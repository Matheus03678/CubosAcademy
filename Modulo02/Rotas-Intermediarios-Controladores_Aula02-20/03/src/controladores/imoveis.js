const imoveis = require("../banco_de_dados");

const get = (req, res) => {
  res.send(imoveis);
};

const getPorId = (req, res) => {
  const { id } = req.params;
  const imovel = imoveis.find((element) => {
    return element.id === Number(id);
  });
  res.send(imovel);
};

module.exports = {
  get,
  getPorId,
};
