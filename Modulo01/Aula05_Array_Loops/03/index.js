const numeros = [54, 22, 14, 10, 284];

const numeroBuscado = 10;
let lenghtArray = numeros.length;
let indexBuscado;

numeros.forEach((item, index) => {
  if (item === numeroBuscado) {
    lenghtArray--;
    indexBuscado = index;
  }
});

lenghtArray === numeros.length ? console.log(-1) : console.log(indexBuscado);
