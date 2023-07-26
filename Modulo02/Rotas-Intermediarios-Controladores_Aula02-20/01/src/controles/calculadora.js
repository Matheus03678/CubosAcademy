const somar = (req, res, next) => {
  const { num1 = 0, num2 = 0 } = req.query;
  const soma = Number(num1) + Number(num2);
  res.send(soma.toString());
};
const subtrair = (req, res, next) => {
  const { num1 = 0, num2 = 0 } = req.query;
  const subtrair = Number(num1) - Number(num2);
  res.send(subtrair.toString());
};
const multiplicar = (req, res, next) => {
  const { num1 = 0, num2 = 0 } = req.query;
  const multiplicar = Number(num1) * Number(num2);
  res.send(multiplicar.toString());
};
const dividir = (req, res, next) => {
  const { num1 = 0, num2 = 0 } = req.query;
  const dividir = Number(num1) / Number(num2);
  res.send(dividir.toString());
};

module.exports = {
  somar,
  subtrair,
  multiplicar,
  dividir,
};
