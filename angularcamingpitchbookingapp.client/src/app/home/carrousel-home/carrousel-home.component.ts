import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Slide } from './slide';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrousel-home',
  templateUrl: './carrousel-home.component.html',
  styleUrl: './carrousel-home.component.css',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule]
})
export class CarrouselHomeComponent {
  @Input() images: Slide[] = [];
  
}
