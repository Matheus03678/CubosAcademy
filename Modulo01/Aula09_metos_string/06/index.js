// const celular = 7199918888;
// const numeroEmString = celular.toString();

// // const regex = (\(\d{2}\)\s)?(\d{4,5}\-\d{4});
// const regex = /(\d{2})(\d{5})(\d{4})/;

// const numeroCelularFormatado = numeroEmString.replace(regex, "($1) 9 $2-$3");
// console.log(numeroCelularFormatado);

let numeroCelularDesformatado = 99918888;
const numero = numeroCelularDesformatado.toString();

if (numeroCelularDesformatado.length === 11) {
  let regex = /(\d{2})(\d{4})(\d{4})/;
  let numeroCelularFormatado = numero.replace(regex, "($1) 9 $2-$3");
  console.log(numeroCelularFormatado);
} else {
  let regex = /(\d{4})(\d{4})/;
  let numeroCelularFormatado = numero.replace(regex, "9 $1-$2");
  console.log(numeroCelularFormatado);
}
