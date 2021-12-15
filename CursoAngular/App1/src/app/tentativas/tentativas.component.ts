import { Component, OnInit, OnChanges, Input } from '@angular/core';
//import { coracao } from '../shared/coracao.model';
import { Heart } from '../shared/heart.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.scss']
})
export class TentativasComponent implements OnInit, OnChanges {


  public Hearts: Heart[]=[
    new Heart(true),new Heart(true),new Heart(true)
  ]
  
  @Input() public tentativas: number = 0
  constructor() { }
  ngOnChanges(){

    if(this.tentativas !== this.Hearts.length){
       let indice = this.Hearts.length - this.tentativas
        this.Hearts[indice-1].full = false
        //3 -1 = 2 -1 =1
        //3-2 = 1 -1 =0
        //3-0 = 3 -1 = 2
    }
    console.log(this.tentativas)
  }
  ngOnInit(): void {
    
  }

}
