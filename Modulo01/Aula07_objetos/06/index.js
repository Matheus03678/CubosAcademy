const usuarios = [
  {
    nome: "João",
    idade: 25,
  },
  {
    nome: "Ana",
    idade: 18,
  },
  {
    nome: "Beatriz",
    idade: 15,
  },
  {
    nome: "Carlos",
    idade: 16,
  },
  {
    nome: "Antonio",
    idade: 32,
  },
];

const jovens = usuarios.filter((obj) => {
  return obj.idade < 18;
});
const adultos = usuarios.filter((obj) => {
  return obj.idade > 18;
});

console.log(jovens);
console.log(adultos);
