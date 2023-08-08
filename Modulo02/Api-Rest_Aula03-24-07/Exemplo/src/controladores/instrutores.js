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

const atualizarInstrutor = (req, res) => {
  const { id } = req.params;
  const { nome, email, status } = req.body;

  if (Number(id) < 0 || Number(id) > instrutores.length) {
    return res.status(400);
  }

  const statusStr = status.toString();

  if (
    !nome ||
    !email ||
    !statusStr ||
    nome === " " ||
    email === " " ||
    statusStr === " "
  ) {
    return res.status(400).json({
      mensagem:
        "Não é permitido campos em branco ou somente com espaço, todos são de preenchimento obrigatórios",
    });
  }

  const instrutor = instrutores.find((el) => {
    return el.id === Number(id);
  });

  if (!instrutor) {
    return res.status(404).json({ mensagem: "Instrutos não encontrado." });
  }

  instrutor.nome = nome;
  instrutor.email = email;
  instrutor.status = status;

  return res.status(204).send();
};

const atualizarStatusInstrutor = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const instrutor = instrutores.find((el) => {
    return el.id === Number(id);
  });

  if (!instrutor) {
    return res.status(404).json({ mensagem: "Instrutor não encontrado." });
  }

  instrutor.status = status;

  res.status(200).json({ mensagem: "Alterado com sucesso." });
};

const deletarInstrutor = (req, res) => {
  const { id } = req.params;

  const instrutorIndex = instrutores.findIndex((el) => {
    return el.id === Number(id);
  });

  if (instrutorIndex === -1) {
    return res.status(404).json({ mensagem: "Instrutor não encontrado." });
  }

  instrutores.splice(instrutorIndex, 1);

  return res.status(200).json({ mensagem: "Instrutor deletado com sucesso." });
};

module.exports = {
  listarInstrutor,
  listarInstrutorId,
  cadastrarInstrutor,
  atualizarInstrutor,
  atualizarStatusInstrutor,
  deletarInstrutor,
};
