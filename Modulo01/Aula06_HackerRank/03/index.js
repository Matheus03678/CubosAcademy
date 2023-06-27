function solucao(sequencia) {
  //seu codigo aqui
  let index = 0;
  for (let click of sequencia) {
    if (click === ">") {
      if (index >= 6) {
        index = 0;
      } else {
        index++;
      }
    } else {
      if (index === 0) {
        index = 6;
      } else {
        index--;
      }
    }
  }

  console.log(index);
}

// const sequencia = [">", ">", ">", "<", ">"];
const sequencia = [">", ">", ">", ">", ">", ">", ">", ">", ">"];
// const sequencia = [">"];
solucao(sequencia);
