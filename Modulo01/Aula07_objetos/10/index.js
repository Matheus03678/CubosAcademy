// clientes
const patricia = { nome: "Patricia", carrinho: [] };
const carlos = { nome: "Carlos", carrinho: [] };
const renato = { nome: "Renato", carrinho: [] };
const jose = { nome: "José", carrinho: [] };
const roberto = { nome: "Roberto", carrinho: [] };

// produtos
const tv = { nome: "TV Samsung 4K", valorEmCentavos: 129900 };
const notebook = { nome: "Notebook Dell", valorEmCentavos: 399990 };
const mouse = { nome: "Mouse MX Master 3", valorEmCentavos: 23000 };
const teclado = { nome: "Teclado Keychron K8", valorEmCentavos: 50000 };
const caboUsb = { nome: "Cabo USB 2 Metros", valorEmCentavos: 1990 };
const carregador = { nome: "Carregador portátil", valorEmCentavos: 4590 };
const webcam = { nome: "Webcam C920s", valorEmCentavos: 80000 };
const monitor = { nome: "Monitor LG 29 FHD", valorEmCentavos: 129900 };

// a. Adicione uma tv, dois cabos usb e uma webcam para o José
jose.carrinho.push(tv, caboUsb, caboUsb, webcam);

// b. Adicione dois notebooks para o Carlos
carlos.carrinho.push(notebook);

// c. Adicione um teclado, dois cabos usb, um carregador, um mouse e um monitor para a Patricia
patricia.carrinho.push(teclado, caboUsb, caboUsb, carregador, mouse, monitor);

// d. Adicione cinco webcams para o Renato
const num = 5;
while (num <= 5) {
  renato.carrinho.push(webcam);
}
// e. Adicione uma webcam, dois cabos usb e um monitor para o Roberto
roberto.carrinho.push(webcam, caboUsb, caboUsb, monitor);
console.log(patricia);
