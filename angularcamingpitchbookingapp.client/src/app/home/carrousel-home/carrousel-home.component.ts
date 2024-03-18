import { Component, Input, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { Slide } from './slide';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';

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
