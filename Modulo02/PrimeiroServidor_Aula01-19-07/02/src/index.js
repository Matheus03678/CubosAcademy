const express = require("express");
const app = express();
const port = 3000;

let minutos = 0;
let segundos = 0;
let cronometroAtivo = false;
let intervalId;

function iniciarCronometro() {
  if (cronometroAtivo) {
    intervalId = setInterval(() => {
      segundos++;
      if (segundos === 60) {
        minutos++;
        segundos = 0;
      }
    }, 1000);
  }
}

app.get("/", function (req, res, next) {
  res.send(
    `Ola, o time é: ${minutos.toString().padStart(2, "0")} : 
    ${segundos.toString().padStart(2, "0")}`
  );
});

app.get("/iniciar", function (req, res, next) {
  cronometroAtivo = true;
  iniciarCronometro();
  res.send(`Cronômetro iniciado! `);
});

app.get("/pausar", function (req, res, next) {
  if (segundos > 0 || minutos > 0) {
    cronometroAtivo = false;
    res.send(`Cronômetro pausado!`);
    clearInterval(intervalId);
  } else {
    res.send("Inicialize o cronometro primeiro!");
  }
});

app.get("/zerar", function (req, res, next) {
  if (segundos !== 0 || minutos !== 0) {
    segundos = 0;
    minutos = 0;
    res.send(`Cronômetro zerado!`);
  } else {
    res.send("Cronometro já está zerado, o inicie primeiro!");
  }
});

app.get("/continuar", function (req, res, next) {
  if (segundos !== 0) {
    cronometroAtivo = true;
    res.send(`Cronômetro continuando!`);
    iniciarCronometro();
  } else {
    res.send("Cronometro não foi iniciado, o inicie primeiro!");
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
