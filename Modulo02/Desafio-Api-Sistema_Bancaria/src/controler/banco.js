const {
  contas,
  saques,
  depositos,
  transferencias,
} = require("../bancodedados");
let { id } = require("../bancodedados");

const { getData } = require("../utils/utils");

// ------------------------ GET --------------------------------

const Get = (req, res) => {
  if (contas.length > 0) {
    return res.status(200).json(contas);
  }
  return res.status(200).json({ mensagem: "nenhuma conta encontrada" });
};

// ------------------------ POST --------------------------------

const Post = (req, res) => {
  const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

  if (
    JSON.stringify(req.body) === "{}" ||
    nome === "" ||
    cpf === "" ||
    data_nascimento === "" ||
    telefone === "" ||
    email === "" ||
    senha === ""
  ) {
    return res.status(400).json({
      mensagem: "Campos não informados ou não preenchidos",
    });
  }

  const conta = {
    numero: id++,
    saldo: 0,
    usuario: {
      nome,
      cpf,
      data_nascimento,
      telefone,
      email,
      senha,
    },
  };

  contas.push(conta);
  return res.status(201).json(contas);
};
// --------------------- OPERAÇÕES -----------------------------

// Depositar
const Depositar = (req, res) => {
  const { numero_conta, valor } = req.body;

  console.log(typeof numero_conta, typeof valor);
  console.log(numero_conta, valor);

  if (String(numero_conta) && String(valor)) {
    console.log("entrei");
    if (valor <= 0) {
      return res.status(400).json({
        mensagem: "Não é possivel somar valores negativos nem nulos(0) ",
      });
    }

    console.log("cheguei no forEach");

    const conta = contas.find((obj) => {
      return obj.numero === numero_conta;
    });

    console.log(conta);

    if (conta === undefined) {
      return res.status(400).json({
        mensagem: "Conta não encontrada para depositar",
        contas,
      });
    } else {
      conta.saldo += valor;

      const registro = {
        data: getData(),
        numero_conta,
        valor,
      };

      depositos.push(registro);
      return res.status(201).json({
        mensagem: "Depósito realizado com sucesso",
        contas,
        depositos,
      });
    }
  } else {
    return res.status(400).json({
      mensagem: "Conta não encontrada para depositar",
      contas,
    });
  }
};

// Sacar
// Transferir

// ------------------------ PUT --------------------------------

const Put = (req, res) => {
  const { numero } = req.params;
  const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

  if (Number(numero) < 0 || Number(numero) > contas.length) {
    return res.status(400).json({
      mensagem: "Numero da conta errado ou inexistente",
    });
  }

  contas.forEach((obj) => {
    if (obj.numero === Number(numero)) {
      obj.usuario.nome = nome;
      obj.usuario.cpf = cpf;
      obj.usuario.data_nascimento = data_nascimento;
      obj.usuario.telefone = telefone;
      obj.usuario.email = email;
      obj.usuario.senha = senha;

      return res.status(201).json({
        mensagem: "Conta atualizada com sucesso",
        contas,
      });
    } else {
      return res.status(400).json({
        mensagem: "Numero da conta errado ou inexistente",
      });
    }
  });
};

// ------------------------ DELETED --------------------------------

const deleteCont = (req, res) => {
  const { numeroConta } = req.params;

  const index = contas.findIndex((obj) => {
    return obj.numero === Number(numeroConta);
  });

  if (index < 0) {
    return res.status(404).json({
      mensagem: "Erro ao excluir. Usuário não encontrado!",
    });
  }

  contas.splice(index, 1);
  return res.status(200).json({
    mensagem: "Conta excluída com sucesso",
    contas,
  });
};

module.exports = {
  Get,
  Post,
  Put,
  deleteCont,
  Depositar,
};
