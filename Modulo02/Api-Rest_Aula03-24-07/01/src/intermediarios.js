const senhaCadastrada = "cubos123";

// validação de senha
const middlewareSenha = (req, res, next) => {
  const { senha } = req.query;

  if (senha !== senhaCadastrada) {
    return res.status(401).json({ mensagem: "Senha incorreta" });
  }

  next();
};

module.exports = {
  middlewareSenha,
};
