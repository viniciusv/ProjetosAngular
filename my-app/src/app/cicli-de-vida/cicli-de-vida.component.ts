import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cicli-de-vida',
  templateUrl: './cicli-de-vida.component.html',
  styleUrls: ['./cicli-de-vida.component.css']
})
export class CicliDeVidaComponent implements OnInit {

  constructor() { 
    console.log('construtor');
  }

  ngOnChanges() { 
    console.log('changes');
  }

  ngOnInit() {
     console.log('init');
  }

  ngDoCheck() {
     console.log('init');
  }

  ngAfterContentChecked() {
     console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
     console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
     console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
     console.log('ngAfterViewInit');
  }
}
