export class coracao{

  constructor(
    public cheio: boolean,
    public urlCoracaoCheio: string ='/assets/coracao_vazio.png',
    public urlCoracaoVazio: string ='/assets/coracao_cheio.png'
  ){}

  public exibiCoracao() : string {
    if(this.cheio){
      return this.urlCoracaoCheio
    }
    else{
      return this.urlCoracaoVazio
    }
  }
}