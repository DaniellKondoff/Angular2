import { Directive , ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[textColor]'
})
export class TextColorDirective{
    @Input("textColor") color: string;

    @HostListener('mouseenter') OnMouseEnter(){
        this.changeColor(this.color);
    }

    @HostListener('mouseleave') OnMouseLeave(){
        this.changeColor(null);
    }
    constructor(private el: ElementRef){
        
    }

    private changeColor(color){
        this.el.nativeElement.style.color = color;
    }
}