const usuarios = [
  {
    nome: "João",
    pets: [],
  },
  {
    nome: "Ana",
    pets: ["Pingo", "Lulu"],
  },
  {
    nome: "Beatriz",
    pets: ["Lessie"],
  },
  {
    nome: "Carlos",
    pets: ["Farofa", "Salsicha", "Batata"],
  },
  {
    nome: "Antonio",
    pets: ["Naninha"],
  },
];

usuarios.forEach((obj) => {
  if (obj.pets.length === 0) {
    console.log(`Sou ${obj.nome} e não tenho pets`);
  } else if (obj.pets.length !== 0) {
    console.log(`Sou ${obj.nome} e tenho ${obj.pets.length} pets`);
  }
});
