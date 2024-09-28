import { Component } from '@angular/core';

@Component({
    selector: '[appCard]:not(section)', // This makes the component usable as an attribute
    standalone: true,
    template: `
    <div class="card">
      <h2>Card Title</h2>
      <p>This is a card content.</p>
    </div>
  `,
    styles: [`
    .card {
      border: 1px solid #ccc;
      padding: 20px;
      border-radius: 8px;
      background-color: #f9f9f9;
    }
  `]
})
export class CardComponent { }
