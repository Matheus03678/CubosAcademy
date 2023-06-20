const jogada1 = "tesoura";
const jogada2 = "pedra";

// PASSOS
// - Pedra ganha da Tesoura (a amassa e quebra)

// - Tesoura ganha do Papel (o corta)

// - Papel ganha da Pedra (a embrulha)

//seu código aqui
if (jogada1 == "pedra" && jogada2 == "tesoura") {
  console.log("Jogador 1 ganhou");
} else if (jogada2 == "pedra" && jogada1 == "tesoura") {
  console.log("Jogador 2 ganhou");
} else if (jogada1 == "tesoura" && jogada2 == "papel") {
  console.log("Jogador 1 ganhou");
} else if (jogada2 == "tesoura" && jogada1 == "papel") {
  console.log("Jogador 2 ganhou");
} else if (jogada1 == "Papel" && jogada2 == "pedra") {
  console.log("Jogador 1 ganhou");
} else if (jogada2 == "Papel" && jogada1 == "pedra") {
  console.log("Jogador 2 ganhou");
}
