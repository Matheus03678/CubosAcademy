const { query, json } = require("express");
const { banco } = require("./bancodedados");

const senhaCad = banco.senha;

const middlewares = (req, res, next) => {
  const { senha_banco } = req.query;

  if (!senha_banco) res.status(404).json({ mensagem: "Senha não informada" });

  if (senha_banco === senhaCad) next();
  else res.status(401).json({ mensagem: "Senha incorreta" });
};

module.exports = {
  middlewares,
};
