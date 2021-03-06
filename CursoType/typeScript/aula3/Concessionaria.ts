 import Carro,{} from "./Carro"
 import { ConcessionariaInterface } from "./ConcessionariaInterface"
 export default class Concessionaria implements ConcessionariaInterface {
  private endereco: string
  private listaDeCarros: Array<Carro> //poderá receber qualquer dado

  constructor(endereco: string, listaDeCarros: Array<Carro>) {
      this.endereco = endereco
      this.listaDeCarros = listaDeCarros
  }

  public fornecerEndereco(): string {
      return this.endereco
  }

  public mostrarListaDeCarros(): Array<Carro> {
      return this.listaDeCarros
  }
  public fornecerHorariosDeFuncionamento(): string {
      return 'De segunda a sexta das 8:00 as 18:00 e sabado das 8:00 as 12:00'
  }
}