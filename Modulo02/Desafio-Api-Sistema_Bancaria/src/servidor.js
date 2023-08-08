const express = require("express");
const app = express();
const { rota } = require("./rotas");
const { middlewares } = require("./middlewares");

app.use(express.json());
app.use(middlewares);
app.use(rota);

module.exports = app;
