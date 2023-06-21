//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000;
const rendaEmReais = rendaMensalEmCentavos / 100;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 60;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1000000;
const totalPagoEmReais = totalJaPagoPeloAluno / 100;
const percentualParcela = 0.18;

if (mesesDecorridos >= 60)
  console.log("Não precisa mais pagar, numero de meses excedido");
else if (totalPagoEmReais == 18000) console.log("Divida quitada, parabens");
else if (rendaEmReais > 2000) {
  const parcela = rendaEmReais * percentualParcela;
  const restoDaDivida = Math.abs(totalPagoEmReais - 18000);
  const parcelaRestante = Math.trunc(restoDaDivida / parcela);
  console.log(
    `Falta ${restoDaDivida} para ser quitado, com ${parcelaRestante}x com valor de ${parcela} mensais`
  );
} else {
  console.log(
    "Renda abaixo do acordado, parcelas para pagamento somente para salários acima de 2.000,00"
  );
}
