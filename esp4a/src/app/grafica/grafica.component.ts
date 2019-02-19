import { Component, OnInit } from '@angular/core';
import { EspService } from '../services/esp.service';
@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {

  constructor(private espService: EspService){

  }
  
  
     ngOnInit(){
    //   this.espService.inicializar();
     }

}
