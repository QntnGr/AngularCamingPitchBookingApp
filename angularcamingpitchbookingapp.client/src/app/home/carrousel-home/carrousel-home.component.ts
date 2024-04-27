import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Slide } from './slide';
import { CommonModule } from '@angular/common';
import { AvailabilitySearchComponent} from '../availability-search/availability-search.component'
import Swiper from 'swiper';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SwiperContainer } from 'swiper/element';

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
      const swiperEl = document.querySelector('.swiper-home') as SwiperContainer;
      if(swiperEl){
        let swiperParams  = {
          spaceBetween: 0,
          pagination: true,
          allowTouchMove: false,
          speed: 1100,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false
          }   
        };
        Object.assign(swiperEl, swiperParams);
        swiperEl.initialize();
      }
  }

}