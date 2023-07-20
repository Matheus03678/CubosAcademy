// const email = "aluno@cubos.academy";
// const email = "jose@cubos";
// const email = ".@";
const email = "@.";
// const email = "jose.@cubos";

const regex = /[\w\.+-]+@([\w-])+(\.[a-z]{2,})?/;

if (email[0] === "." || email[email.length - 1] === ".") {
  console.log("E-mail inválido");
} else if (email.search(regex) !== -1) {
  console.log(`E-mail valido: ${email}`);
} else {
  console.log("E-mail inválido");
}
