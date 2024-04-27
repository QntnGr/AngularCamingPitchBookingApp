import { Component } from '@angular/core';
import { Card } from '../pitch-type/card';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'app-activity-slider',
  templateUrl: './activity-slider.component.html',
  styleUrl: './activity-slider.component.scss',
})
export class ActivitySliderComponent {
  baseUrl: string = "../../../assets/Images/Home/Sections/Activities/";
  titleActivities: string = "home.activites.titre-section";

  activities: Card[] = [
    {
      image_url : this.baseUrl + 'thio-marche-vendays-montalivet-medoc-atlantique-tiny.jpg',
      title : "home.activites.le-camping.titre",
      text : "home.activites.le-camping.text",
      alt : "le marché de vendays-montalivet",
      hover_background_color: "black"
    },
    {
      image_url : this.baseUrl + 'sur-tiny.jpg',
      title : "home.activites.surf.titre",
      text : "home.activites.surf.text",
      alt : "activité surf, cours de surf",
      hover_background_color: "black"
    },
    {
      image_url : this.baseUrl + 'velo-tiny.jpg',
      title : "home.activites.velo.titre",
      text : "home.activites.velo.text",
      alt : "type tente",
      hover_background_color : "black"
    },
    {
      image_url : this.baseUrl + 'vignobles-tiny.png',
      title : "home.activites.vignobles.titre",
      text : "home.activites.vignobles.text",
      alt : "activité vignobles",
      hover_background_color : "black"
    },
  ];
  
  ngOnInit(){
    this.initSlider();
  }

  initSlider(): void{    
    const swiperEl = document.querySelector('.swiper-acivities') as SwiperContainer;
    let that = this;
    if(swiperEl){
      const swiperParams  = {
        allowTouchMove: true,  
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        centeredSlides: true,
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 8
          },
          760: {
            slidesPerView: 2,
            spaceBetween: 16
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 32
          },
        },
        on: {
          init() {
            setTimeout(that.goToNextSlide, 1000);
          },
        },
      };
      Object.assign(swiperEl, swiperParams);
      swiperEl.initialize();
    }
  }
  goToNextSlide(): void{
    let swiper_activities = document.querySelector('.swiper-acivities') as SwiperContainer;
    if(swiper_activities){
      swiper_activities.swiper.slideNext();
    }
  }
}
