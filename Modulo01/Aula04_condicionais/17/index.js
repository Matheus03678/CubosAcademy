//valor do produto comprado.
const valorDoProduto = 100000 / 100; //Valor do procuto convertido de centavos para real

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300; //Valor do procuto em real

const valorApagar = valorDoProduto - valorPago;
const valorDaParcela = valorDoProduto / 10;
const parcelasRestantes = Math.trunc(valorApagar / valorDaParcela);

console.log(`Restam ${parcelasRestantes} parcelas de R$${valorDaParcela}`);
