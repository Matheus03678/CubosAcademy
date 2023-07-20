// const nomeArquivo = "Foto da Familia.pdf";
const nomeArquivo = "Foto da Familia.png";

function validateArchive(nomeArquivo) {
  const regex = /\.(jpg|jpeg|gif|png)$/;

  regex.test(nomeArquivo)
    ? console.log("Arquivo válido")
    : console.log("Arquivo invalido");
}

validateArchive(nomeArquivo);
