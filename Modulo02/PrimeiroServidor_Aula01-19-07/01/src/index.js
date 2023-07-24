const express = require("express");
const servidor = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let jogadorDaVez = "";
let cont = 0;

const jogada = (req, res, next) => {
  jogadores.forEach((el) => {
    if (cont < jogadores.length) {
      jogadorDaVez = `É a vez de ${jogadores[cont]} jogar!`;
      req.use = jogadorDaVez;
    } else {
      jogadorDaVez = `Todos já jogaram.`;
      req.use = jogadorDaVez;
    }
  });

  next();
};
servidor.use(jogada);

servidor.get("/", function (req, res) {
  cont++;
  res.send(req.use);
});

servidor.listen(3000, function () {
  console.log("Servidor no ar!!");
});
