import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insitucion-component',
  templateUrl: './insitucion-component.component.html',
  styleUrls: ['./insitucion-component.component.css']
})
export class InsitucionComponentComponent implements OnInit {
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
