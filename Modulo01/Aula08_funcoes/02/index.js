const carro = {
  ligado: false,
  velocidade: 0,
  ligar: function () {
    if (this.ligado) {
      console.log(`Este carro já está ligado.`);
    } else {
      this.ligado = true;
      this.estado_atual();
    }
  },
  desligar: function () {
    if (this.ligado) {
      this.ligado = false;
      this.velocidade = 0;
      this.estado_atual();
    } else {
      console.log(`Este carro já está desligado.`);
    }
  },
  acelerar: function () {
    if (this.ligado) {
      this.velocidade += 10;
      this.estado_atual();
    } else {
      console.log(`Não é possível acelerar um carro desligado.`);
    }
  },
  desacelerar: function () {
    if (this.ligado && this.velocidade > 0) {
      if (this.velocidade === 0) this.velocidade = 0;
      else {
        this.velocidade -= 10;
        this.estado_atual();
      }
    } else {
      console.log(`Não é possível desacelerar um carro desligado.`);
    }
  },
  estado_atual: function () {
    console.log(
      `Carro ${this.ligado ? "ligado" : "desligado"}. Velocidade: ${
        this.velocidade
      }.`
    );
  },
};

carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();
