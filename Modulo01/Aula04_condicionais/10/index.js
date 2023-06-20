const caractere = "e";

const arrayCaractere = [
  "A",
  "E",
  "I",
  "O",
  "U",
  "a",
  "e",
  "i",
  "o",
  "u",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  9,
  0,
];
// const numeros = [1, 2, 3, 4, 5, 6, 7, 9, 0]

let resultado = "Consoante";

arrayCaractere.forEach((item) => {
  if (typeof item === "string") {
    if (caractere === item.toUpperCase()) {
      resultado = "Vogal Maiúscula";
    }
    if (caractere === item.toLowerCase()) {
      resultado = "Vogal Minúscula";
    }
  }
  if (typeof caractere === "number") {
    resultado = "Número";
    return;
  }
});

console.log("final: " + resultado);
