import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import { EspService } from './services/esp.service';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica/grafica.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    constructor(private esp :EspService){

    }
  title = 'Angular';
  
  ngOnInit(): void{
      this.esp.inicializar();
      // this.esp.getDatos();

  }
}
