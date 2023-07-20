const cpf = "12345678900";
const cnpj = "12345678900";

function validaCpf(cpf) {
  let elementosParaValidacao = cpf.slice(0, cpf.length - 2);
  let digitoVerificador;
  let total = 0;
  let cont = 1;

  // while (elementosParaValidacao.toString().length !== 11) {
  if (cpf.length === 11) {
    for (let numero of elementosParaValidacao) {
      total += Number(numero) * cont;
      cont++;
    }
    console.log(total);
    console.log(typeof (digitoVerificador = total % 11).toString());

    if (digitoVerificador === "10") {
      console.log(elementosParaValidacao);
      elementosParaValidacao += "0";
      console.log(elementosParaValidacao);
    } else {
      elementosParaValidacao += digitoVerificador;
      console.log(elementosParaValidacao);
    }
  } else {
    console.log("CPF Inválido");
    return;
  }
  // }

  return elementosParaValidacao;
}

validaCpf(cpf);
