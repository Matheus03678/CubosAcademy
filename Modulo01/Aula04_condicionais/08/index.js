const idade = 17;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

if (idade < 12 || idade > 65 || possuiPatologia || altura < 150) {
  console.log("ACESSO NEGADO");
} else if (idade > 12 && idade < 18) {
  if (ehEstudante) console.log("10 reais");
  else console.log("20 reais");
} else console.log("20 reais");
