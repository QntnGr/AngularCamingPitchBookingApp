import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Slide } from './slide';
import { CommonModule } from '@angular/common';
import { AvailabilitySearchComponent} from '../availability-search/availability-search.component'
import Swiper from 'swiper';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-carrousel-home',
  templateUrl: './carrousel-home.component.html',
  styleUrl: './carrousel-home.component.scss',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, AvailabilitySearchComponent, TranslateModule],
})
export class CarrouselHomeComponent {
  @Input() images: Slide[] = [];
  titleTop: string = 'CRÉEZ DES SOUVENIRS INOUBLIABLES';
  titleBottom: string = 'DANS VOTRE CAMPING...';

  constructor(translate: TranslateService) {
    translate.setDefaultLang('fr');
    translate.use('fr');
  }
  
  ngOnInit(){
    this.initSlider();
  }

  initSlider(): void{
      let swiperEl = document.querySelector('swiper-container');
      if(swiperEl){
        let swiperParams  = {
          spaceBetween: 0,
          pagination: true,
          allowTouchMove: false,
          speed: 1000,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
          on: {
            init(this){
              let slider = new Swiper('swiper-container');
              slider.autoplay.start();
            }
          }    
        };
        Object.assign(swiperEl, swiperParams);
        swiperEl.initialize();
      }
  }

}