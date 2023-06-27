const carro1 = {
  marca: "Honda",
  modelo: "HR-V",
  ano: 2022,
  cor: "preto",
  quantidade_portas: 4,
  automatico: true,
};

const carro2 = {
  marca: "Volkswagen",
  modelo: "Gol",
  ano: 2022,
  cor: "vermelho",
  quantidade_portas: 4,
  automatico: false,
};

const listCarros = [];
listCarros.push(carro1, carro2);

console.log(listCarros[1].marca);
console.log(listCarros[0].marca);
