const express = require("express");
const {
  get,
  getId,
  cadastrarConvidado,
  deletar,
} = require("./controler/convidados");

const { middlewareSenha } = require("./intermediarios");

const rotas = express();

rotas.use(middlewareSenha);
rotas.get("/convidados", get);
rotas.get("/convidados/:nome", getId);
rotas.post("/convidados", cadastrarConvidado);
rotas.delete("/convidados/:nome", deletar);

module.exports = rotas;
