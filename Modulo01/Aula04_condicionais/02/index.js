// const rodada = [jogador1 = "impar", jogador2 = "par" ];
const jogador1 = "par";
const jogador2 = "impar";

const jogada1 = 6;
const jogada2 = 5;

const valorDaRodada = jogada1 + jogada2;

//seu código aqui
if (valorDaRodada % 2 != 0) {
  if (jogador1 === "impar")
    console.log(`O jogador01 ganhor por ter escolhido ${jogador1} `);
  else console.log(`O jogador02 ganhor por ter escolhido ${jogador2} `);
} else {
  if (jogador1 === "par")
    console.log(`O jogador01 ganhor por ter escolhido ${jogador1} `);
  else console.log(`O jogador02 ganhor por ter escolhido ${jogador2} `);
}
