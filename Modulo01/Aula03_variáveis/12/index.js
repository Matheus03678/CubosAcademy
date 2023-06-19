var taxaDeJuros;
var montante = 90000;
var capitalInicial = 60000;
var meses = 24;

taxaDeJuros = Math.pow(montante / capitalInicial, 1 / meses) - 1;

const percentual = taxaDeJuros * 100;
console.log(percentual.toFixed(3));
