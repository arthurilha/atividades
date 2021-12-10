"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Carro_1 = __importDefault(require("./Carro"));
const Pessoa_1 = __importDefault(require("./Pessoa"));
const Concessionaria_1 = __importDefault(require("./Concessionaria"));
/* --- cirar carros --- */
let carroA = new Carro_1.default('dodge journey', 4);
let carroB = new Carro_1.default('veloster', 3);
let carroC = new Carro_1.default('cerato', 4);
/* --- montar a lista de carros da concessionaria ---*/
let listaDeCarros = [carroA, carroB, carroC];
let concessionaria = new Concessionaria_1.default('Av Paulista', listaDeCarros);
/* --- exibir a lista de carros --- */
// console.log(concessionaria.mostrarListaDeCarros())
/* --- comprar o carro --- */
let cliente = new Pessoa_1.default('João', 'veloster');
concessionaria.mostrarListaDeCarros().map((carro) => {
    if (cliente.dizerCarroPreferido() === carro.modelo) {
        console.log(`Cliente comprou o carro ${carro.modelo}`);
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
