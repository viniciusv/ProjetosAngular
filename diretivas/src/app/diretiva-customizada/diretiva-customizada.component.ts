import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-customizada',
  templateUrl: './diretiva-customizada.component.html',
  styleUrls: ['./diretiva-customizada.component.css']
})
export class DiretivaCustomizadaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mostrarCursos: boolean = false;

  onMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos;
  }

}
