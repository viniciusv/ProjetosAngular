import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appFundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer
  ) { 
    //console.log(this.elementRef);
    //EVITAR A USAR this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    
    //forma segura 
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
  }

  
}
