import { Injectable } from '@angular/core';

@Injectable()
export class CursosServiceService {

  constructor() { }

  getCursos(){
    return [
      {id: 1, nome: 'vinicius'},
      {id: 2, nome: 'vinicius 2'},
    ];
  }

  getCurso(id: number){
    let cursos = this.getCursos();
    for (var index = 0; index < cursos.length; index++) {
      var element = cursos[index];
      if(element.id == id){
        return element;
      }
      
    }
    return null;
  }
}
