const express = require("express");
const app = express();

const { jogada, remover, adicionar } = require("./controler/jogadores");

app.get("/", jogada);
app.get("/remover", remover);
app.get("/adicionar", adicionar);

app.listen(8000, () => {
  console.log("Servidor no ar!");
});
