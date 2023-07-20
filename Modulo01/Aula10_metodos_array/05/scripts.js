const pacientes = ["José", "Pedro", "Maria", "João", "Ana", "Bárbara", "Joana"];

function fila(pacientes, operacao, nome) {
  switch (operacao) {
    case "agendar":
      agendarPaciente(pacientes, nome);
      break;
    case "atender":
      atenderPaciente(pacientes);
      break;
    case "cancelar":
      cancelarAtendimento(pacientes, nome);
      break;
  }
}

function agendarPaciente(pacientes, nome) {
  pacientes.push(nome);
  console.log(pacientes.join(", "));
}

function atenderPaciente(pacientes) {
  pacientes.shift();
  console.log(pacientes.join(", "));
}

function cancelarAtendimento(pacientes, nome) {
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].toLowerCase() === nome.toLowerCase()) {
      return console.log(`
        Paciente retirado da fila: ${nome}.
        ${pacientes.slice(0, i).join(", ")}`);
    }
  }
  return console.log("Paciente não encontrado.");
}

fila(pacientes, "agendar", "Matheus");
fila(pacientes, "atender");
fila(pacientes, "cancelar", "Matheus");
