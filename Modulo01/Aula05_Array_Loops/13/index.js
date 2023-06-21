// const disjuntores = [false, false, true, false, false, true, false, false];
const disjuntores = [
  false,
  true,
  true,
  false,
  false,
  true,
  false,
  false,
  true,
  true,
];

const dijuntoresLigados = [];

disjuntores.forEach((element, index) => {
  if (element) {
    dijuntoresLigados.push(index);
  }
});

dijuntoresLigados.forEach((element) => {
  console.log(element);
});
