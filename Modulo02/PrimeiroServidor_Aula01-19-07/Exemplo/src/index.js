const express = require("express");
const app = express();

//Cria uma rota, que recebe uma função como callback que manipulará a requisição que chegará no servidor.
// '/' é a rota mais básica do servidor.
app.get("/", function (req, res) {
  //send retorna uma resposta do servidor
  res.send(`Olá...
  Esta é a página inical da aplicação`);
});

const list = [
  { id: 11, nome: "joao", idade: 23 },
  { id: 2, nome: "maria", idade: 18 },
  { id: 4, nome: "ana", idade: 30 },
  { id: 1, nome: "ferdiando", idade: 17 },
  { id: 123, nome: "rodrigo", idade: 17 },
];

let usuario = "";
list.forEach((el) => {
  usuario = el.id + " " + el.nome + " " + el.idade;
});

app.get("/usuarios", function (req, res) {
  //send retorna uma resposta do servidor
  res.send(usuario);
});

//fica ouvindo uma porta especifica para saber se o servidor foi chamado
app.listen(3000);
