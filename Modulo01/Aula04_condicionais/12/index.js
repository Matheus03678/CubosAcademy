const diaDaSemana = 2;

const diasDaSemana = [
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
  "Domingo",
];

if (diaDaSemana > diasDaSemana.length) {
  console.log("O dia da semana informado não é válido.");
  return;
} else {
  diasDaSemana.forEach((dia, index) => {
    if (diaDaSemana === index + 1) {
      console.log(dia);
    }
  });
}
