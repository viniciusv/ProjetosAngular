import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {
  //vai ficar escutando a pagina 
  @HostListener('mouseenter')onmouseover(){
    //this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave')onmouseleave(){
    //this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'white');
    this.backgroundColor = 'white';
  }
  
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor( 
    private elementRef: ElementRef,
    private renderer: Renderer) { }

}
