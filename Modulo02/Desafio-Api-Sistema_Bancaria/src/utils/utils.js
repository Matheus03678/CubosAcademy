// function formataNome(nome) {
//   let nome = nome.split(" ");
//   // nome = nome.
// }

function getData() {
  const data = new Date();

  // Obtendo os componentes da data
  const dia = data.getDate();
  const mes = data.getMonth() + 1; // Os meses em JavaScript são baseados em zero, adicionamos 1 para ficar correto
  const ano = data.getFullYear();

  // Obtendo os componentes da hora
  const hora = data.getHours();
  const minutos = data.getMinutes();

  // Formatação para adicionar um zero à esquerda se o valor for menor que 10
  const formatoDuasCasas = (valor) => (valor < 10 ? `0${valor}` : valor);

  // Criando a string formatada
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
