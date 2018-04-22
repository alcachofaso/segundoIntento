import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sistema-component',
  templateUrl: './sistema-component.component.html',
  styleUrls: ['./sistema-component.component.css']
})
export class SistemaComponentComponent implements OnInit {
  accion:number;

  constructor() {
    this.accion=0;
   }

  opcion(_opcion)
  {
    if(_opcion!=this.accion)
      this.accion=_opcion;
  }
  ngOnInit() {
  }

}
