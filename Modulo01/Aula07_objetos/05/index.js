const curso = {
  id: 1234,
  nome: "Lógica de programação",
  aulas: [],
};

const aula01 = {
  Identificador: "01",
  nome_da_aula: "Introdução a programação",
};
const aula02 = {
  Identificador: "02",
  nome_da_aula: "Introdução a programação",
};
const aula03 = {
  Identificador: "03",
  nome_da_aula: "Introdução a programação",
};
const aula04 = {
  Identificador: "04",
  nome_da_aula: "Introdução a programação",
};

const { aulas } = curso;

aulas.push(aula01);
aulas.push(aula02);
aulas.push(aula03);
aulas.push(aula04);

console.log(curso.aulas[0]);
