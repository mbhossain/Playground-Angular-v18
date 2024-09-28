import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '.app-highlight',  // Class selector for directive
    standalone: true
})
export class ClassSelectorDirective {
    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
    }
}
