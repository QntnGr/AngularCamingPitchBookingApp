import { Component, Input, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { Slide } from './slide';
import { CommonModule } from '@angular/common';
import { AvailabilitySearchComponent} from '../availability-search/availability-search.component'

@Component({
  selector: 'app-carrousel-home',
  templateUrl: './carrousel-home.component.html',
  styleUrl: './carrousel-home.component.scss',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, AvailabilitySearchComponent],
})
export class CarrouselHomeComponent {
  @Input() images: Slide[] = [];
    
}
