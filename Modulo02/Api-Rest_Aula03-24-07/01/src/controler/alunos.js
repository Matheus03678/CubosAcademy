let { idAluno } = require("../dados/banco_de_dados");
const { alunos } = require("../dados/banco_de_dados");

// Mostra todos os alunos
const get = (req, res) => {
  res.json(alunos);
};

//Busca por id
const getId = (req, res) => {
  const { id } = req.params;

  console.log(id);

  if (Number(id) > alunos.length) {
    return res.status(400).json({ mensagem: "ID deve ser um número válido" });
  }

  const aluno = alunos.find((el) => {
    return el.id === Number(id);
  });

  if (aluno) {
    return res.json(aluno);
  } else {
    return res.status(404).json({ mensagem: "Aluno não encontrado" });
  }
};

// Cadastra aluno
const cadastrarAluno = (req, res) => {
  const { nome, sobrenome, idade, curso } = req.body;

  if (!nome || !sobrenome || !idade || !curso) {
    return res.status(400).json({ mensagem: "Há algum campo vazio" });
  } else if (
    !nome ||
    !sobrenome ||
    !curso ||
    nome === " " ||
    sobrenome === " " ||
    curso === " "
  ) {
    return res
      .status(400)
      .json({ mensagem: "Há algum sem preencher ou somente em branco" });
  } else if (idade < 18) {
    return res.status(400).json({ mensagem: "Idade menos que 18" });
  }

  const newAlunos = {
    id: idAluno++,
    nome,
    sobrenome,
    idade,
    curso,
  };

  alunos.push(newAlunos);

  return res.status(201).json(alunos);
};

const deletar = (req, res) => {
  const { id } = req.params;

  if (Number(id) < 0) {
    return res.status(400).json({ mensagem: "ID deve ser um número válido" });
  }

  console.log(id);
  const index = alunos.findIndex((el) => {
    return el.id === Number(id);
  });
  console.log("index do elemento para deletar: " + index);

  if (index < 0) {
    return res
      .status(404)
      .json({ mensagem: "aluno a ser excluído não foi encontrado" });
  }

  alunos.splice(index, 1);
  return res.json(alunos);
};

module.exports = {
  get,
  getId,
  cadastrarAluno,
  deletar,
};
