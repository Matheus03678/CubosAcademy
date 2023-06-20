const pagarAvista = false;
const qtdParcelas = 12;
const taxaJutos = 0.01;

const precoProduto = 100;
const desconto = 10;

function calculaDesconto(preco, desconto) {
  return preco - (preco * desconto) / 100;
}

if (pagarAvista || qtdParcelas == 1) {
  console.log(
    "Para pagamentos avista há 10% de desconto, o novo valor é:" +
      " " +
      calculaDesconto(precoProduto, desconto)
  );
} else {
  if (qtdParcelas > 0 && qtdParcelas <= 6) {
    console.log(
      "Valor, sem juros, por parcela é:" + " " + precoProduto / qtdParcelas
    );
  } else if (qtdParcelas >= 7 && qtdParcelas <= 12) {
    const valorComJuros = (
      precoProduto *
      (1 + taxaJutos) ** qtdParcelas
    ).toFixed(2);
    console.log(
      `O valor com juros é: ${valorComJuros}, ficando ${qtdParcelas} parcelas de ${(
        valorComJuros / qtdParcelas
      ).toFixed(2)}`
    );
  }
}
