const express = require("express");
const {
  listarInstrutor,
  listarInstrutorId,
  cadastrarInstrutor,
} = require("./controladores/instrutores");
const rotas = express();

rotas.get("/instrutores", listarInstrutor);
rotas.get("/instrutores/:id", listarInstrutorId);
rotas.post("/instrutores", cadastrarInstrutor);

module.exports = rotas;
