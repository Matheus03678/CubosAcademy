let convidados = require("../banco/db");

// Mostra todos os convidados
const get = (req, res) => {
  res.json(convidados);
};

//Busca por id
const getId = (req, res) => {
  const { nome } = req.params;

  console.log(nome);

  if (!nome) {
    return res.status(400).json(convidados);
  }

  console.log("cheguei aqui");
  const convidado = convidados.find((el) => {
    return el.toLowerCase() === nome.toLowerCase();
  });

  console.log(convidado);

  if (convidado) {
    return res.json({
      mensagem: "Convidado presente.",
    });
  } else {
    return res.status(404).json({
      mensagem: "O convidado buscado não está presente na lista.",
    });
  }
};

// Cadastra convidado
const cadastrarConvidado = (req, res) => {
  const { nome } = req.body;

  console.log(nome);

  const convidado = convidados.find((el) => {
    return el === nome;
  });

  if (convidado) {
    return res.status(400).json({
      mensagem:
        "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também.",
    });
  }

  convidados.push(nome);

  return res
    .status(201)
    .json({ mensagem: "Convidado adicionado com sucesso." });
};

const deletar = (req, res) => {
  const { nome } = req.params;

  const index = convidados.findIndex((el) => {
    return el.toLowerCase() === nome.toLowerCase();
  });
  console.log("index do elemento para deletar: " + index);

  if (index < 0) {
    return res.status(404).json({
      mensagem:
        " nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido.",
    });
  }

  convidados.splice(index, 1);
  return res.json({
    mensagem: "Convidado removido com sucesso.",
    convidados,
  });
};

module.exports = {
  get,
  getId,
  cadastrarConvidado,
  deletar,
};
