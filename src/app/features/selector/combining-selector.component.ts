import { Component } from '@angular/core';

@Component({
  selector: 'combining-drop-zone, [combiningdropzone]', // Element and attribute selector
  standalone: true,
  template: `
    <div class="drop-zone">
      <ng-content></ng-content>  <!-- Allowing custom content inside the drop zone -->
      <p>Drag and drop files here</p>
    </div>
  `,
  styles: [
    `
    .drop-zone {
      border: 2px dashed #cccccc;
      padding: 20px;
      text-align: center;
      border-radius: 10px;
      background-color: #f9f9f9;
      cursor: pointer;
    }
    `
  ]
})
export class CombiningDropZoneComponent { }
