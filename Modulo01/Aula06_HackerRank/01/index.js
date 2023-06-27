function solucao(stringCorrompida) {
  //seu codigo aqui
  const regex = /[!@#$%&*()]/g;
  const stringClear = stringCorrompida.replace(regex, "");
  console.log(stringClear);
}

function processData(input) {
  solucao(input);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
