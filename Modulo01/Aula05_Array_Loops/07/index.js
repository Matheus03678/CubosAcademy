const nomes = ["Ana", "Joana", "Carlos", "amanda"];
const letraFiltrada = "a";

const nomesFiltrados = [];

nomes.forEach((element) => {
  if (element[0].toLowerCase() === letraFiltrada) {
    nomesFiltrados.push(element);
  }
});

console.log(nomesFiltrados);
