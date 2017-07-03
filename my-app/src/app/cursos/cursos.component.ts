import { Component, OnInit } from '@angular/core';

import { CursosService } from "./cursos.service";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  //any qualquer coisa

  cursos: string[];

  //injeção de dependencias 
  constructor(private cursosService: CursosService) { 
    this.nomePortal = "vinicius.viana.com.br";
    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit() {
  }

}
