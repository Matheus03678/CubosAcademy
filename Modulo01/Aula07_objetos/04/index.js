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

usuarios.forEach((obj) => {
  if (obj.idade > 17) {
    obj.maior_idade = true;
  } else {
    obj.maior_idade = false;
  }
});

console.log(usuarios);
