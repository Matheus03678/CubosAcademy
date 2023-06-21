// const numeros = [3, 24, 1, 8, 11, 7, 15];
const numeros = [3, 4, 1, 8, 11, 7, 5];

let maiorValor = numeros[0];

for (let i = 0; i < numeros.length - 2; i++) {
  if (maiorValor < numeros[i + 1]) {
    maiorValor = numeros[i + 1];
  } else continue;
}

console.log(maiorValor);
