export class Heart{
  constructor(
    public full:boolean,
    public urlFull:string = "mx-1 fa fa-heart fa-2x",
    public urlEmpy:string = "mx-1 fa fa-heart-o fa-2x"
    ){}

    public viewHeart(): string{
      if(this.full){
        return this.urlFull
      }else{
        return this.urlEmpy
      }

    }
}