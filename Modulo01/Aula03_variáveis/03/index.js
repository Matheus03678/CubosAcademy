const valor_total = 110;
const meu_dinheiro = 50;

let totalMenosMeuDinheiro = valor_total - meu_dinheiro;

const valor_do_desconto = ((meu_dinheiro * 100) / valor_total).toFixed(2);

console.log(valor_do_desconto);
