import { Component } from '@angular/core';

@Component({
  selector: '[app-drop-zone]',
  standalone: true,
  imports: [],
  templateUrl: './drop-zone.component.html',
  styleUrl: './drop-zone.component.css'
})
export class DropZoneComponent {
  // This is where logic for the dropzone can be written
  handleDrop(event: DragEvent) {
    event.preventDefault();
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      console.log('Files dropped:', files);
      // Handle the files (e.g., upload them)
    }
  }

  handleDragOver(event: DragEvent) {
    event.preventDefault(); // Prevent default behavior to allow drop
  }

}
