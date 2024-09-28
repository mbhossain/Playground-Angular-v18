import { Component } from '@angular/core';

@Component({
  selector: 'button[type="reset"]',  // Target only reset buttons
  standalone: true,
  template: `<button>Reset</button>`,
  styles: [
    `button {
      background-color: #f44336;  /* Custom color for reset buttons */
      color: white;
      border: none;
      padding: 10px 20px;
      font-size: 14px;
      cursor: pointer;
    }`
  ]
})
export class ResetButtonComponent {
  constructor() {
    console.log('ResetButtonComponent initialized.');
  }
}
