const populaçãoIncial = 1000; //P
const qtdPossiveisInfectados = 4; //x
const tempo = 8; //t

const populaçãoInfectada = Math.pow(
  populaçãoIncial * qtdPossiveisInfectados,
  tempo / 7
);

console.log(populaçãoInfectada);
