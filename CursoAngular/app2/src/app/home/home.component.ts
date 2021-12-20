import { Component, OnInit } from '@angular/core';

import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [OfertasService] //uso dos serviços no Angular
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[]=[]
  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
   // this.ofertas = this.ofertasService.getOfertas()
    // console.log(this.ofertas)


  this.ofertasService.getOferta2()
    .then((ofertas: Oferta[] )=>{ 
      console.log('a funçao vai ser exibida depois de 3 segundos')
      this.ofertas = ofertas 
    })
    .catch((param:any) => {
    console.log(param)
    })
  
  }

}
