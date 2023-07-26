const express = require("express");
const {
  encontrarUmProfessor,
  filtrarProfessores,
} = require("./controladores/professores");
const app = express();

// Middlewares
app.use((req, res, next) => {
  console.log("Passei por esse Middleware");
  next();
});

//rota de professores
// Controlador == encontrarUmProfessor, filtrarProfessores
app.get("/professores", encontrarUmProfessor);

//recupera uma informação que queira, nesse caso o 'ID' (localhost:3000/professores/2)
app.get("/professores/:id", filtrarProfessores);

app.listen(3000, () => {
  console.log("Server no ar!");
});
