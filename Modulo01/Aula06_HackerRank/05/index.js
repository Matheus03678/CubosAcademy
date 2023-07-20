// const precos = [20, 15, 8, 2, 12];
const precos = [5, 10, 3];

let perdaMinima = Infinity;

for (let i = 0; i < precos.length - 1; i++) {
  for (let j = i + 1; j < precos.length; j++) {
    // console.log("preco na posicao i: " + precos[i]);
    // console.log("preco na posicao j: " + precos[j]);
    let temp = Math.abs(precos[i] - precos[j]);
    // console.log(temp);
    if (temp < perdaMinima) perdaMinima = temp;
  }
}

console.log("perda minima: " + perdaMinima);

// percorrer o array e coparar os elementos
// depois da comparação, saber a perda minima
