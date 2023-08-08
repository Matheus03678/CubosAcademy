const express = require("express");
const rota = express();
const {
  Get,
  Post,
  Put,
  deleteCont,
  Depositar,
  Sacar,
  Transferir,
  Get_Saldo,
} = require("./controler/banco");

rota.get("/contas", Get);
rota.get("/contas/saldo", Get_Saldo);
rota.post("/contas", Post);
rota.post("/transacoes/depositar", Depositar);
rota.post("/transacoes/sacar", Sacar);
rota.post("/transacoes/transferir", Transferir);
rota.put("/contas/:numero", Put);
rota.delete("/contas/:numeroConta", deleteCont);

module.exports = {
  rota,
};
