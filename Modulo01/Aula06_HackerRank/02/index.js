function solucao(precos) {
  //seu codigo aqui
  const tamanho = precos.length;
  let menorPreco = precos[0];
  let total = 0;

  for (let i = 0; i < precos.length; i++) {
    if (precos[i] < menorPreco) {
      menorPreco = precos[i];
    }
    total += precos[i];
  }

  console.log(total);
  if (tamanho < 5) {
    console.log(total);
  } else {
    console.log(total - menorPreco);
  }
}

const precos = [100, 500, 100, 200, 50];
// const precos = [100, 100, 100, 50];
solucao(precos);
