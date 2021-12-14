import { Component, OnInit } from '@angular/core';

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

  constructor(){
    console.log(this.frase)
  }

  ngOnInit(): void {
  }

  public atualizaResposta(resposta: Event): void{
    this.resposta =(<HTMLInputElement>resposta.target).value
    console.log(this.resposta)
  }

  
}
