//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "debito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000 / 100;
let valorFinal;

if (tipoDePagamento === "credito") {
  const desconto = 0.05;
  valorFinal = valorDoProduto - valorDoProduto * desconto;
} else if (tipoDePagamento === "cheque") {
  const desconto = 0.03;
  valorFinal = valorDoProduto - valorDoProduto * desconto;
} else if (tipoDePagamento === "debito" || tipoDePagamento === "dinheiro") {
  const desconto = 0.1;
  valorFinal = valorDoProduto - valorDoProduto * desconto;
}

console.log(valorFinal);
