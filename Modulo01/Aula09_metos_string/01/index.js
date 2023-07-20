// const comentario = "Esse COVID é muito perigoso!";
const comentario = "Esse é muito perigoso!";

const arrayComentario = comentario.split(" ");
let flag = false;
if (comentario.includes("covid") || palavra.includes("pandemia")) {
  flag = true;
}

flag
  ? console.log("Comentário bloqueado por conter palavras proibidas")
  : console.log("Comentário autorizado");
