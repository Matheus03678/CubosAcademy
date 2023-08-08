const express = require("express");
const rota = express();
const { Get, Post, Put, deleteCont, Depositar } = require("./controler/banco");

rota.get("/contas", Get);
rota.post("/contas", Post);
rota.post("/transacoes/depositar", Depositar);
rota.put("/contas/:numero", Put);
rota.delete("/contas/:numeroConta", deleteCont);

module.exports = {
  rota,
};
