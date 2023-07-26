const jogadores = require("../bando_de_dados");

let nomeJogadorDaVez = "";
let cont = 0;

const jogada = (req, res) => {
  if (cont < jogadores.length) {
    nomeJogadorDaVez = `É a vez de ${jogadores[cont]} jogar!`;
    cont++;
    res.send(nomeJogadorDaVez);
  } else {
    nomeJogadorDaVez = `Todos já jogaram.`;
    res.send(nomeJogadorDaVez);
  }
};

const remover = (req, res) => {
  const { indice } = req.query;
  console.log(indice);
  jogadores.splice(indice, 1);
  res.send(jogadores);
};

const adicionar = (req, res) => {
  const { nome, indice } = req.query;

  // Posso pegar uma fatia ao invez de um loop

  const primeiraLetra = nome.slice(0, 1);
  const restiDoNome = nome.slice(1);
  let nomeFormatado = primeiraLetra.toUpperCase() + restiDoNome;

  const indiceNumber = Number(indice);

  if (indiceNumber) {
    if (indiceNumber > jogadores.length - 1) {
      res.send(
        `O índice informado ${indiceNumber} não existe no array. Novo jogador(${nomeFormatado}) não foi adicionado.`
      );
    }
    jogadores.splice(Number(indiceNumber), 0, nomeFormatado);
    res.send(jogadores);
  } else {
    jogadores.push(nomeFormatado);
    res.send(jogadores);
  }
};

module.exports = {
  jogada,
  remover,
  adicionar,
};
