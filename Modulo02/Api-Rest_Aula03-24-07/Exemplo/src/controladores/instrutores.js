const { instrutores } = require("../banco_de_dados");
let { idInstrutor } = require("../banco_de_dados");

//por padrão o express já manda o 200 como status
const listarInstrutor = (req, res) => {
  return res.status(200).json(instrutores);
};

const listarInstrutorId = (req, res) => {
  const { id } = req.params;

  const instrutor = instrutores.find((instrutorCad) => {
    return instrutorCad.id === Number(id);
  });

  //inverte o valor quando vazio, ou seja false, e entra no if
  if (!instrutor) {
    return res.status(404).json({ mensagem: "Instrutor não encontrado" });
  }

  // NÃO PRECISA O .STATUS(200), POIS POR PADRÃO JÁ É 200 NO EXPRESS
  return res.status(200).json(instrutor);
};

const cadastrarInstrutor = (req, res) => {
  const { nome, email, status } = req.body;

  if (!nome || !email)
    res.status(404).json({ mensagem: "Nome e Email são campos obrigatórios!" });

  const newInstrutor = {
    id: idInstrutor++,
    nome,
    email,
    status: status ?? false,
  };

  // '??'

  instrutores.push(newInstrutor);

  return res.status(201).json(instrutores);
};

module.exports = {
  listarInstrutor,
  listarInstrutorId,
  cadastrarInstrutor,
};
