import { Component } from '@angular/core';

@Component({
    selector: '.app-class-selector',  // Class selector instead of a tag selector
    standalone: true,
    template: `<p>This is a component using a class selector!</p>`,
    styles: [
        `p { 
      background-color: lightblue; 
      padding: 10px; 
      border-radius: 5px;
    }`
    ]
})
export class ClassSelectorComponent { }
