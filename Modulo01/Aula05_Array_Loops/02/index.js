const letras = ["A", "a", "B", "C", "E", "e"];

const letraBuscada = "a";
let cont = 0;

const letrasIguais = [];

letras.forEach((item) => {
  if (item.toLowerCase() == letraBuscada) {
    letrasIguais.push(item);
    cont++;
  }
});

if (cont === 0) {
  console.log("Não há letras correspodentes!!");
} else {
  console.log(
    `Foram encontradas ${cont} letras "${letraBuscada.toUpperCase()}" ou "${letraBuscada.toLowerCase()}"`
  );
}
