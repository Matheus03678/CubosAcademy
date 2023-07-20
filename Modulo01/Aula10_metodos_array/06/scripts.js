const usuarios = [
  {
    nome: "João",
    pets: ["Max"],
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

function buscaDono(usuarios, petBuscado) {
  let flag = false;
  let nomeDoPet;
  for (let { nome, pets } of usuarios) {
    pets.forEach((pet) => {
      if (pet.toLowerCase() === petBuscado.toLowerCase()) {
        flag = true;
        nomeDoPet = nome;
      }
    });
  }

  if (flag) {
    console.log(`O dono(a) do(a) ${petBuscado} é o(a) ${nomeDoPet}`);
  }
}

buscaDono(usuarios, "Lessie");
