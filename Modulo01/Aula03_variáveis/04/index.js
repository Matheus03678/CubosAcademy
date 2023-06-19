let montante = 0;
const capital = 1000;
const taxa_fixa_de_juros = 0.125;
const periodo_de_tempo = 5;

montante = Math.round(capital * (1 + taxa_fixa_de_juros) ** periodo_de_tempo);

console.log(montante);
