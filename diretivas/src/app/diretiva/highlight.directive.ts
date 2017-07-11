import { Directive, HostListener, ElementRef, Renderer, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor() { }

    //vai ficar escutando a pagina 
  @HostListener('mouseenter')onmouseover(){
    this.backgroundColor = this.highColor;
  }

  @HostListener('mouseleave')onmouseleave(){
    this.backgroundColor = this.defaultColor;
  }
  
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @Input() defaultColor: string = 'white';
  @Input('appHighlight') highColor: string = 'yellow';

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }
}
