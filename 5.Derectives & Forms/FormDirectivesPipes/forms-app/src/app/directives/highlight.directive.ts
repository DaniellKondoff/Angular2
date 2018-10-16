import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { 
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter') onmouseenter() {
    this.hightLight('yellow');
  }
  @HostListener('mouseleave') onmouseleave() {
    this.hightLight('green');
  }
  private hightLight(color :string){
    this.el.nativeElement.style.backgroundColor = color;
  }
}
