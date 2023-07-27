const express = require("express");
const { get, getId, cadastrarAluno, deletar } = require("./controler/alunos");

const { middlewareSenha } = require("./intermediarios");

const rotas = express();

rotas.use(middlewareSenha);
rotas.get("/alunos", get);
rotas.get("/alunos/:id", getId);
rotas.post("/alunos", cadastrarAluno);
rotas.delete("/alunos/:id", deletar);

module.exports = rotas;
