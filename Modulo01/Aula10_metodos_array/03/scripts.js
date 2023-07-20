const nomes = [
  "Ford Ká",
  "Ranger",
  "Hilux",
  "Corola",
  "Fusca",
  "Chevete",
  "Brasilia",
];
const posicao = 3;

function buscaCarros(array, posicao) {
  console.log(nomes.slice(posicao, posicao + 3));
}

buscaCarros(nomes, posicao);
