import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  // Attribute directive with the pseudo-class
  selector: '[highlight]:not(textarea):not(input)',
  standalone: true
})
export class AttributeDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    // You can manipulate the DOM or apply styles here
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
  }

}
