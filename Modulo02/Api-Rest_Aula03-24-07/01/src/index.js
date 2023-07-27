const express = require("express");
const app = express();

const rotas = require("./rotas");

// Middleware nativo do express, que indica que vai aceitar somente informações em JSON
app.use(express.json());
app.use(rotas);

app.listen(3000, () => {
  console.log("Server no ar!!");
});
