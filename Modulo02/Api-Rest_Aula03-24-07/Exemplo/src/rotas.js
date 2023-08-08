const express = require("express");
const {
  listarInstrutor,
  listarInstrutorId,
  cadastrarInstrutor,
  atualizarInstrutor,
  atualizarStatusInstrutor,
  deletarInstrutor,
} = require("./controladores/instrutores");
const rotas = express();

rotas.get("/instrutores", listarInstrutor);
rotas.get("/instrutores/:id", listarInstrutorId);
rotas.post("/instrutores", cadastrarInstrutor);
rotas.put("/instrutores/:id", atualizarInstrutor);
rotas.patch("/instrutores/:id/status", atualizarStatusInstrutor);
rotas.delete("/instrutores/:id", deletarInstrutor);

module.exports = rotas;
