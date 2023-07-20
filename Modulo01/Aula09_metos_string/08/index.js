const cpf = "01102203344";

const regex = /(\d{3})\.?(\d{3})\.?(\d{3})-?(\d{2})/;

console.log(cpf.replace(regex, "$1.$2.$3-$4"));
