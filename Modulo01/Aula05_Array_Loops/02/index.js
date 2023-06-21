const letras = ["A", "a", "B", "C", "E", "e"];

const letraBuscada = "e";
let cont = 0;

const letrasIguais = [];

letras.forEach((item) => {
  if (item.toLowerCase() == letraBuscada) {
    letrasIguais.push(item);
    cont++;
  }
});

letrasIguais.forEach((item) => {
  console.log(`Foram encontradas ${cont} letras ${item}`);
});
