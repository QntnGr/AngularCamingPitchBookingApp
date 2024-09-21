import { Component } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { Picture } from './picture';

@Component({
  selector: 'app-camping-pictures',
  templateUrl: './camping-pictures.component.html',
  styleUrl: './camping-pictures.component.scss'
})
export class CampingPicturesComponent {
  titleCampingPicture: string = "home.camping.title";
  camp_pictures: Picture[] = [];

  
  ngOnInit(){
    for(let i = 1; i <= 8; i++){
      this.camp_pictures[i-1] = {
        alt : "Photo " + i,
        class: "picture" + i
      }
    }
    this.initSlider();
  }

  initSlider(): void{    
    const swiperEl = document.querySelector('.swiper-camping-pictures') as SwiperContainer;
    let that = this;
    if(swiperEl){
      const swiperParams  = {
        allowTouchMove: true,  
        navigation: {
          nextEl: '.swiper-button-camping-next',
          prevEl: '.swiper-button-camping-prev',
        },
        centeredSlides: true,
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 8
          },
          779: {
            slidesPerView: 2.18,
            spaceBetween: 16
          },
          2150: {
            slidesPerView: 3.04,
            spaceBetween: 32
          },
        },
        on: {
          init() {
            if(window.innerWidth > 780){
              setTimeout(that.goToNextSlide, 200);
            }
          },
        },
        parallax: true,
        freeMode: {
          enabled: true,
          sticky: true,
        },
      };
      Object.assign(swiperEl, swiperParams);
      swiperEl.initialize();
    }
  }

  
  goToNextSlide(): void{
    const swiperEl = document.querySelector('.swiper-camping-pictures') as SwiperContainer;
    if(swiperEl){
      swiperEl.swiper.slideNext();
      swiperEl.swiper.on('slideChange', function (event) {
        if(swiperEl.swiper.isBeginning){
          swiperEl.swiper.slideNext();
        }
      });
    }
  }

}
