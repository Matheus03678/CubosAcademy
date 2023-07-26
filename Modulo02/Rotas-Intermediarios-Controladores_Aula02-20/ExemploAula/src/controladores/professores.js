const professores = require("../BancoDeDados");

const filtrarProfessores = (req, res, next) => {
  let professor;
  professores.forEach((el) => {
    if (el.id === Number(req.params.id)) {
      professor = el;
    }
  });
  res.send(professor.nome);
};

const encontrarUmProfessor = (req, res, next) => {
  let professor;
  professores.forEach((el) => {
    if (el.nome.toLowerCase() === req.query.nome.toLowerCase()) {
      professor = el;
    }
  });
  res.send(professor);
};

module.exports = {
  filtrarProfessores,
  encontrarUmProfessor,
};
