import { Component, OnInit,Input } from '@angular/core';
import { coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.scss']
})
export class TentativasComponent implements OnInit {


  public Coracao : coracao[] = [
    new coracao(false),new coracao(false),new coracao(false)

  ]
  
  @Input() public tentativas: number = 0
  constructor() { }

  ngOnInit(): void {
    
  }

}
