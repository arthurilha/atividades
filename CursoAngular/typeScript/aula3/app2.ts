class carro{

  private modelo: string
  private numeroPortas: number
  private velocidade : number =0

  constructor(modelo: string, numeroPortas: number, velocidade: number){
      this.modelo = modelo;
      this.numeroPortas = numeroPortas;
      this.velocidade = velocidade;
  }

   
  public acelerar(): void {
    this.velocidade = this.velocidade + 10
  }
  
  public para(): void{
    this.velocidade =0
  }
  
  public valocidadeAtual(): number{
    return this.velocidade;
  }

}

class concessionaria {
  private endereco: string =''
  private listaDeCarros: any //any = pode ser qualquer tipo 

  constructor(endereco: string, listaDeCarros: any){
    this.endereco = endereco
    this.listaDeCarros = listaDeCarros;
  }

  public fornecerEndereco(): string {
    return this.endereco
  }

  public mostrarListaDeCarros(): any{
    return this.listaDeCarros
  }

}

class pessoa {

  private nome: string = ''
  private carroPreferido: string =''
  private carro: any
  constructor(nome: string, carroPreferido: string){
    this.nome = nome
    this.carroPreferido = carroPreferido
    
  }
  
  public dizerNome(): string{
    return this.nome
  }
  
  public dizerCarroPreferido(): string{
    return this.carroPreferido
  }
  
  public compraCarro(): void{
     this.carro
  }

  public dizerCarroPossui(): any{
    return this.carro
  }
}

let dados = new pessoa('arthur','ferrari')
