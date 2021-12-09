import Carro from "./Carro";
import Moto from "./Moto";
import Concessionaria from './Concessionaria'

let carro = new Carro('veloster', 3 );

let moto = new Moto();

let concessionaria = new Concessionaria('',[])

console.log(concessionaria.fornecerHorariosDeFuncionamento())