import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = "testando interpolção";
  cursoAngular: boolean = true;
  urlImagem: string ="http://icon-icons.com/icons2/851/PNG/512/pikachu_icon-icons.com_67535.png";
  valorAtual = '';
  nome: string = 'abc';

  nomeDoCurso: string = 'vinicius curso';

  pessoa: any = {
    nome: 'vini',
    idade: 20
  }

  onMudouValor(evento){
    console.log(evento.novoValor);
  }

  getCurso(){
    return true;
  }
  getValor(){
    return 1;
  }
  
  clica(){
    alert('botao clicado!');
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  constructor() { }

  ngOnInit() {
  }

}
