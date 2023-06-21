// const arrayA = [5, 32, 3, 44, 1];
// const arrayB = [57, 4, 21, 2, 13];

const arrayA = [1, 3, 3, 44, 11];
const arrayB = [57, 4, 21, 32, 13];

const newArray = [];

//como o exercicio fala que os arrays são do mesmo tamanho
//não é necessário fazer for separados
for (let i = 0; i < arrayA.length; i++) {
  arrayA[i] < arrayB[i] ? newArray.push(arrayA[i]) : newArray.push(arrayB[i]);
}

console.log(newArray);
