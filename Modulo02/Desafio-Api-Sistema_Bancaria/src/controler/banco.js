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

  if (String(numero_conta) && String(valor)) {
    if (valor <= 0) {
      return res.status(400).json({
        mensagem: "Não é possivel somar valores negativos nem nulos(0) ",
      });
    }

    const conta = contas.find((obj) => {
      return obj.numero === numero_conta;
    });

    console.log("passei do find");
    if (String(conta) === String(undefined)) {
      return res.status(400).json({
        mensagem: "Conta não encontrada para depositar",
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
        depositos,
      });
    }
  } else {
    return res.status(400).json({
      mensagem: "Conta não encontrada para depositar",
    });
  }
};

// Sacar

const Sacar = (req, res) => {
  const { numero_conta, valor, senha } = req.body;

  const conta = contas.find((obj) => {
    return obj.numero === numero_conta;
  });

  if (conta && conta.usuario.senha === String(senha)) {
    if (conta.saldo <= 0) {
      return res.status(400).json({
        mensagem: "Valor insuficente para saque.",
      });
    }
    if (valor > conta.saldo) {
      return res.status(400).json({
        mensagem: "Erro ao sacar, valor maior que o presente em conta.",
        saldo: conta.saldo,
      });
    }
    conta.saldo -= valor;

    const registro = {
      data: getData(),
      numero_conta,
      valor,
    };

    saques.push(registro);

    return res.status(201).json({
      mensagem: "Saque realizado com sucesso",
      saques,
    });
  }

  return res.status(404).json({
    mensagem: "Verifique o numero da conta ou senha.",
  });
};

// Transferir

const Transferir = (req, res) => {
  const { numero_conta_origen, numero_conta_destino, valor, senha } = req.body;
  let contaOrigen = {};
  let contaDestino = {};
  let registro = {};

  contaOrigen = contas.find((obj) => {
    return obj.numero === numero_conta_origen;
  });

  contaDestino = contas.find((obj) => {
    return obj.numero === numero_conta_destino;
  });

  if (
    contaOrigen &&
    contaDestino &&
    contaOrigen.usuario.senha === String(senha)
  ) {
    if (contaOrigen.numero !== contaDestino.numero) {
      if (contaOrigen.saldo > 0 && valor <= contaOrigen.saldo) {
        contaOrigen.saldo -= valor;
        contaDestino.saldo += valor;

        registro = {
          data: getData(),
          numero_conta_origen,
          numero_conta_destino,
          valor,
        };

        transferencias.push(registro);

        return res.status(200).json({
          mensagem: "Transferência realizado com sucesso",
          contas,
        });
      } else {
        return res.status(400).json({
          mensagem: "Valor insuficiente em conta.",
        });
      }
    }
  } else {
    return res.status(404).json({
      mensagem: "Numero de conta errado ou inexistente.",
    });
  }
};

// Consultar Saldo
const Get_Saldo = (req, res) => {
  const { numero_conta, senha } = req.query;

  if (numero_conta && senha) {
    const conta = contas.find((obj) => {
      return obj.numero === Number(numero_conta);
    });

    if (conta === undefined) {
      console.log("conta inexistente");
      return res.status(400).json({
        mensagem: "Conta inexistente.",
      });
    }
    if (String(senha) === conta.usuario.senha) {
      return res.status(200).json({
        mensagem: `Seu saldo é ${conta.saldo}`,
      });
    }

    return res.status(400).json({
      mensagem: "Senha inforamda incorreta.",
    });
  }

  return res.status(400).json({
    mensagem: "Numero de conta não informado.",
  });
};

//Extrato

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
  Sacar,
  Transferir,
  Get_Saldo,
};
