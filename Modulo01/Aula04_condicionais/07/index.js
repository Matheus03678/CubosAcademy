const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos

//seu código aqui
if (portadoraDeDoenca || aposentada) {
  cnosole.log("ISENTA do imposto de renda");
} else if (totalDeRendimentos <= 2855970) {
  console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE");
} else if (totalDeRendimentos > 2855970) {
  console.log("PEGA LEAO");
}
