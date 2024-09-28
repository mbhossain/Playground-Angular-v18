import { Component } from '@angular/core';
import { AttributeDirective } from '../attribute.directive';
import { CardComponent } from '../card.component';
import { DropZoneComponent } from '../drop-zone/drop-zone.component';
import { ClassSelectorComponent } from '../class-selector.component';
import { ClassSelectorDirective } from '../class-selector.directive';
import { CombiningDropZoneComponent } from '../combining-selector.component';
import { ResetButtonComponent } from '../combining-selector-btn.component';

@Component({
  selector: 'app-common',
  standalone: true,
  imports: [
    AttributeDirective
    , CardComponent
    , DropZoneComponent
    , ClassSelectorComponent
    , ClassSelectorDirective
    , CombiningDropZoneComponent
    , ResetButtonComponent
  ],
  templateUrl: './common.component.html',
  styleUrl: './common.component.css'
})
export class CommonComponent {

}
