const carrinho = {
  nomeDoCliente: "Guido Bernal",
  produtos: [
    {
      id: 1,
      nome: "Camisa",
      qtd: 3,
      precoUnit: 3000,
    },
    {
      id: 2,
      nome: "Bermuda",
      qtd: 2,
      precoUnit: 5000,
    },
  ],
  imprimirResumo: function () {
    console.log(`
            Cliente: ${carrinho.nomeDoCliente}
            Total de itens: ${this.calculaTotalDeItens()} itens
            Total a pagar: R$ ${this.calcularTotalAPagar()}
            Total a pagar com desconto: R$ ${this.calcularDesconto()}
        `);
  },
  addProdutoAoCarrinho: function (produto) {
    let produtoEncontrado = false;
    this.produtos.forEach((obj) => {
      if (obj.id === produto.id) {
        obj.qtd += produto.qtd;
        produtoEncontrado = true;
      }
    });
    if (!produtoEncontrado) {
      this.produtos.push(produto);
    }
    console.log("Produto adicionado com sucesso!");
    console.log(this.produtos);
  },
  imprimirDetalhes: function () {
    let qtdTotal = 0;
    this.produtos.forEach((obj) => {
      qtdTotal += obj.qtd;
      console.log(`
        Item ${obj.id} - ${obj.nome} - ${obj.qtd} und - R$ ${(
        (obj.qtd * obj.precoUnit) /
        100
      ).toFixed(2)}
      `);
    });
    console.log(`
      Total de itens: ${this.calculaTotalDeItens()} itens
      Total a pagar: R$ ${this.calcularTotalAPagar()}`);
  },
  calcularTotalAPagar: function () {
    let total = 0;
    this.produtos.forEach((obj) => {
      total += obj.qtd * obj.precoUnit;
    });
    return (total / 100).toFixed(2);
  },
  calculaTotalDeItens: function () {
    let qtdTotal = 0;
    this.produtos.forEach((obj) => {
      qtdTotal += obj.qtd;
    });
    return qtdTotal;
  },
  calcularDesconto: function () {
    let desconto = 0;
    if (this.calcularTotalAPagar() > 100) {
      desconto = this.calcularTotalAPagar() * 0.1;
    }

    let itemMaisBarato = Infinity;
    if (this.calculaTotalDeItens() > 4) {
      this.produtos.forEach((obj) => {
        if (obj.precoUnit < itemMaisBarato) itemMaisBarato = obj.precoUnit;
      });
    }
    console.log(itemMaisBarato / 100);
    console.log(desconto);
    console.log(this.calcularTotalAPagar() - itemMaisBarato / 100);
    console.log(this.calcularTotalAPagar() - desconto);

    if (itemMaisBarato < this.calcularTotalAPagar() * 0.1) {
      //ocorreu um arredondamento para mais aqui naturalmente.
      return this.calcularTotalAPagar() - itemMaisBarato / 100;
    } else {
      return this.calcularTotalAPagar() - desconto;
    }
  },
};

carrinho.imprimirResumo();

//FUNCAO INDEPENDENTE DO OBJ
/** 
function imprimirResumoDoCarrinho(carrinho) {
  const { produtos } = carrinho;
  let total = 0;
  produtos.forEach(({ precoUnit }) => {
    total += precoUnit;
  });

  console.log(`
        Cliente: ${carrinho.nomeDoCliente}
        Total de itens: ${carrinho.produtos.length} itens
        Total a pagar: R$ ${total}
    `);
} 

imprimirResumoDoCarrinho(carrinho);*/

//ADD PRODUTOS NO CARRINHO
// function addProdutoAoCarrinho(carrinho, produto) {
//   const { produtos } = carrinho;

//   let produtoEncontrado = false;
//   produtos.forEach((obj) => {
//     if (obj.id === produto.id) {
//       obj.qtd += produto.qtd;
//       produtoEncontrado = true;
//     }
//   });
//   if (!produtoEncontrado) {
//     produtos.push(produto);
//   }
//   console.log("Produto adicionado com sucesso!");
//   console.log(produtos);
// }

// const novaBermuda = {
//   id: 2,
//   nome: "Bermuda",
//   qtd: 3,
//   precoUnit: 5000,
// };

// const novoTenis = {
//   id: 3,
//   nome: "Tenis",
//   qtd: 1,
//   precoUnit: 10000,
// };

// // addProdutoAoCarrinho(carrinho, novaBermuda);
// carrinho.addProdutoAoCarrinho(novaBermuda);
// carrinho.addProdutoAoCarrinho(novoTenis);

// carrinho.imprimirResumo();
// carrinho.imprimirDetalhes();
