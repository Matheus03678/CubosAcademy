const prova = {
  aluno: "João",
  materia: "Português",
  valor: 10,
  questoes: [
    {
      resposta: "a",
      correta: "b",
    },
    {
      resposta: "c",
      correta: "c",
    },
    {
      resposta: "e",
      correta: "b",
    },
    {
      resposta: "b",
      correta: "b",
    },
    {
      resposta: "c",
      correta: "c",
    },
  ],
};

function corrigirProva({ questoes }) {
  let cont = 0;

  questoes.forEach((respostas) => {
    if (respostas.resposta === respostas.correta) cont++;
  });

  return cont;
}

const acertos = corrigirProva(prova);

console.log(
  `O aluno(a) ${prova.aluno} acertou ${acertos} questões e obteve nota ${
    acertos * 2
  }`
);
