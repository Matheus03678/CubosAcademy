const numeros = [8, 11, 4, 1];

let diferenca = 0;

for (let i = 0; i < numeros.length; i++) {
  for (let j = 0; j < numeros.length; j++) {
    let temp = Math.abs(numeros[i] - numeros[j]);
    if (diferenca < temp) {
      diferenca = temp;
    }
  }
}

console.log(diferenca);
