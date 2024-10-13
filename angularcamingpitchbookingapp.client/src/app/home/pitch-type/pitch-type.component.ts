import { Component, EventEmitter, Output } from '@angular/core';
import { Card } from './card';
import { SwiperContainer } from 'swiper/element';
import { GoogleStorageService } from '../../services/storage/google-storage.service';

@Component({
  selector: 'app-pitch-type',
  templateUrl: './pitch-type.component.html',
  styleUrl: './pitch-type.component.scss'
})
export class PitchTypeComponent {

  @Output() urlChangeEvent = new EventEmitter<string>();
  
  public titlePitchTypeSection: string = "home.types-emplacements.titre-section";
  public text_lien: string = "home.types-emplacements.text-lien";
  public text_btn_inventory: string = "home.types-emplacements.text-btn-inventory";
  public pitches: Card[] = [
    {
      file_url: "../../../assets/files/TARIF_LODGE_2024.pdf",
      image_class: 'tente-lodge-img',
      title : "home.types-emplacements.tente-lodge.titre",
      text : "ma super tente lodge",
      alt : "type tente lodge",
      class: "lodge",
      images: [
        {
          alt: "lodge 1",
          class: "lodge1"
        },
        {
          alt: "lodge 2",
          class: "lodge2"
        },
        {
          alt: "lodge 3",
          class: "lodge3"
        },
        {
          alt: "lodge 4",
          class: "lodge4"
        },
        {
          alt: "lodge 5",
          class: "lodge5"
        },
        {
          alt: "lodge 6",
          class: "lodge6"
        },
      ],
      offers: [
        {
          title: "home.types-emplacements.tente-lodge.offre1.title",
          rows: [
            {
              picto_name:"users",
              text: "home.types-emplacements.tente-lodge.offre1.text-ligne1"
            },
            {
              picto_name:"bed-double",
              text: "home.types-emplacements.tente-lodge.offre1.text-ligne2"
            },
            {
              picto_name:"sun",
              text: "home.types-emplacements.tente-lodge.offre1.text-ligne5"
            },
            {
              picto_name:"cooking-pot",
              text: "home.types-emplacements.tente-lodge.offre1.text-ligne4"
            },
          ],
          class: "kitchen"
        },
        {
          title: "home.types-emplacements.tente-lodge.offre2.title",
          rows: [
            {
              picto_name:"users",
              text: "home.types-emplacements.tente-lodge.offre2.text-ligne1"
            },
            {
              picto_name:"bed-double",
              text: "home.types-emplacements.tente-lodge.offre2.text-ligne2"
            },
            {
              picto_name:"sun",
              text: "home.types-emplacements.tente-lodge.offre2.text-ligne3"
            },
          ],
          class: "no_kitchen"
        },
      ],
      gap_offers_class: "gap"
    },
    {
      file_url: "../../../assets/files/TARIF_EMPLACEMENT_NUS.pdf",
      image_class: 'tente-img',
      title : "home.types-emplacements.tente.titre",
      text : "ma super tente, ma super tente , ma super tente <br> ma super tente ",
      alt : "type tente",
      class : "field",
      images: [
        {
          alt : "emplacement 1",
          class: "tent1"
        },
        {
          alt : "emplacement 2",
          class: "tent2"
        },
        {
          alt : "emplacement 3",
          class: "tent3"
        },
      ],
      offers: [
        {
          title: "home.types-emplacements.tente.offre1.title",
          rows: [
            {
              picto_name:"users",
              text: "home.types-emplacements.tente.offre1.text-ligne1"
            },
            {
              picto_name:"tent",
              text: "home.types-emplacements.tente.offre1.text-ligne2"
            },
            {
              picto_name:"caravan",
              text: "home.types-emplacements.tente.offre1.text-ligne3"
            },
            {
              picto_name:"zap",
              text: "home.types-emplacements.tente.offre1.text-ligne5"
            },
          ]
        },
      ],
      gap_offers_class: "gap"
    },
  ];

  constructor(private storageService: GoogleStorageService) {}
  
  async getUriFromStorageService(fileName: string): Promise<any> {
    return this.storageService.getDownloadUrl(fileName);
  }
  
  ngAfterViewInit(){
    this.initSliders();
  }

  public manageTapOrClick(e: Event, url: string) {
    if (window.innerWidth < 720 
      && e.target instanceof HTMLElement) {
        let classNameTarget = e.target.classList;

        if (classNameTarget.contains("link-fake")) {
            window.open(url, '_blank');
        }
        e.stopPropagation();
    }
    else{
      window.open(url, '_blank');
    }
  }
  
  initSliders(): void {
    const swiperElements = document.querySelectorAll('.swiper-pitch-type-pictures') as NodeListOf<SwiperContainer>;
  
    swiperElements.forEach(swiperEl => {
      const sliderParent = swiperEl.closest('.slider');
      
      if (sliderParent) {
        const prevButton = sliderParent.querySelector('.swiper-button-pich-prev');
        const nextButton = sliderParent.querySelector('.swiper-button-pitch-next');
  
        const swiperParams = {
          allowTouchMove: true,
          navigation: {
            nextEl: nextButton, 
            prevEl: prevButton,
          },
          rewind: true,
          slidesPerView: 1,
          spaceBetween: 8,
        };
  
        Object.assign(swiperEl, swiperParams);
        swiperEl.initialize();
      }
    });
  }
  
  
  onClick(event: MouseEvent) {
    const button = event.target as HTMLElement;
    this.displayPdf(button.className);
  }

  async displayPdf(classes: string) {    
    let newUrl = 'assets/files/';
    let fileName = '';
    if(classes.includes('lodge')){
      fileName = 'TARIF_LODGE.pdf';
      newUrl = await this.getUriFromStorageService(fileName);
    }
    else if(classes.includes('field')){
      fileName = 'TARIF_EMPLACEMENT_NUS.pdf';
      newUrl = await this.getUriFromStorageService(fileName);
    }
    else if(classes.includes('no_kitchen')){
      fileName = 'Inventaire_lodge_sans_cuisine.pdf';
      newUrl += fileName;
    }
    else if(classes.includes('kitchen')){
      fileName = 'Inventaire_lodge_avec_cuisine.pdf';
      newUrl += fileName;
    }
    else{
      return;
    }
    this.urlChangeEvent.emit(newUrl);
  }
}
