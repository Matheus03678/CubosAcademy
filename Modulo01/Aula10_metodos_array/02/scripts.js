const nomes = [
  "Juninho",
  "Vidal",
  "Guido",
  "Dani",
  "Ruli",
  "Diego",
  "Vidal",
  "Guido",
  "Dani",
  "Ruli",
  "Diego",
];
const tamanhoDoGrupo = 4;

function divideArray(array, tamanhoDoGrupo) {
  const quantidadeDeGrupos = Math.ceil(array.length / tamanhoDoGrupo);
  const grupos = [];

  while (array.length > 0) {
    grupos.push(array.splice(0, tamanhoDoGrupo));
  }

  const gruposFormatados = grupos.map((grupo, index) => {
    return `Grupo${index + 1}: ${grupo.join(", ")}`;
  });

  return gruposFormatados.join("\n");
}

console.log(divideArray(nomes, tamanhoDoGrupo));
