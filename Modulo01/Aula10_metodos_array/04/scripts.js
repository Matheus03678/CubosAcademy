const pacientes = ["José", "Pedro", "Maria", "João", "Ana", "Bárbara", "Joana"];

function chamada(pacientes, operacao, nome) {
  switch (operacao) {
    case "agendar":
      pacientes.push(nome);
      console.log(pacientes.join(", "));
      break;
    case "atender":
      pacientes.shift();
      console.log(pacientes.join(", "));
      break;
  }
}

chamada(pacientes, "agendar", "Matheus");
chamada(pacientes, "atender");
