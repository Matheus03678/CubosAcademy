const numeroCartao = "1111222233334444";

let numeroFormatado = "";
console.log(numeroCartao.length);
for (let i = 0; i < numeroCartao.length; i++) {
  if (i >= 4 && i < numeroCartao.length - 4) {
    numeroFormatado = numeroFormatado + "*";
  } else {
    numeroFormatado = numeroFormatado + numeroCartao[i];
  }
}

console.log(numeroFormatado);
