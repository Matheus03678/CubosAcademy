// function formataNome(nome) {
//   let nome = nome.split(" ");
//   // nome = nome.
// }

// -------------------------- PEDA O DIA E HORA ---------------------------

function getData() {
  const data = new Date();

  const dia = data.getDate();
  const mes = data.getMonth() + 1;
  const ano = data.getFullYear();

  const hora = data.getHours();
  const minutos = data.getMinutes();

  const formatoDuasCasas = (valor) => (valor < 10 ? `0${valor}` : valor);

  const dataFormatada = `${formatoDuasCasas(dia)}/${formatoDuasCasas(
    mes
  )}/${ano}`;
  const horaFormatada = `${formatoDuasCasas(hora)}:${formatoDuasCasas(
    minutos
  )}`;

  return dataFormatada + " " + horaFormatada;
}

module.exports = {
  // formataNome,
  // validaCPF,
  getData,
};
