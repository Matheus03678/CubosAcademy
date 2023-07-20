let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

function salvaDados(identificador, nome, email) {
  email = email.replaceAll(" ", "");
  const nomeEmArray = nome.split(" ");

  let cont = 0;
  nomeEmArray.map((element) => {
    if (element[0] !== element[0].toUpperCase()) {
      nomeEmArray[cont] = element[0].toUpperCase() + element.substr(1);
    }
    cont++;
  });

  let nomeConcat = "";
  nomeEmArray.forEach((ele) => {
    nomeConcat = nomeConcat + " " + ele;
  });
  console.log(nomeConcat);

  if (identificador.length < 6) {
    const tamanho = 6 - identificador.length;
    for (let i = 0; i < tamanho; i++) {
      identificador = "0" + identificador;
    }
  }

  return {
    nomeConcat,
    identificador,
    email,
  };
}

const res = salvaDados(identificador, nome, email);
console.log(`
${res.identificador}, 
${res.nomeConcat}, 
${res.email}
`);
