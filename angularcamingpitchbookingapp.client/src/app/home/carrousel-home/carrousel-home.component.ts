import { Component, Input, CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { Slide } from './slide';
import { CommonModule } from '@angular/common';
import { SwiperContainer } from 'swiper/element';

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
  
  @ViewChild('swiper-container', { static: false }) swiper?: SwiperContainer;  
  
  slideNext(){
    this.swiper?.swiper.autoplay.start();
  }
  slidePrev(){
    this.swiper?.swiper.slidePrev(100);
  }
}
