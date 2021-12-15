import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { Frases } from './frase-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {

  public frase: Frase[] = Frases
  public instrucao: string = 'Traduza a frase abaixo:'
  public resposta: string =''

  public rodada: number =0;
  public rodadaFrase : Frase

  public progresso : number = 0

  public tentativas: number =3

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter
  constructor(){
   this.rodadaFrase = this.frase[this.rodada]
   console.log(this.rodadaFrase)
  }

  ngOnInit(): void {
  }

  public atualizaResposta(resposta: Event): void{
    this.resposta =(<HTMLInputElement>resposta.target).value
    
  }

  public verificarResposta(): void{

    if(this.rodadaFrase.frasePtbr == this.resposta){
      this.progresso = this.progresso + (100/this.frase.length)
      this.rodada ++ 
      this.rodadaFrase = this.frase[this.rodada]

      if(this.rodada === 4){
        this.encerrarJogo.emit('ganhou')
      }
    }
    else{
      // diminuir variavel tentativa
      this.tentativas--
      if(this.tentativas === -1){
        this.encerrarJogo.emit('perdeu')
      }
    }
  }
  
}
