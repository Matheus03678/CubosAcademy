const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

let total = 0;

numeros.forEach((item) => {
  if (item % 2 == 0) {
    total += item;
  }
});

console.log(total);
