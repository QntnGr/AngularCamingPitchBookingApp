import { Component, HostListener } from '@angular/core';
declare function parallax(elements: any, speed: number, maxPositionX: number): void;

@Component({
  selector: 'app-accesibility',
  templateUrl: './accesibility.component.html',
  styleUrl: './accesibility.component.scss'
})

export class AccesibilityComponent {
  preTitle : string = 'home.bienvenu-section.sous-titre';
  title : string = "Montacabana !";
  contactButtonLabel : string = 'home.bienvenu-section.contactez-nous';
  textBienvenu : string = 'home.bienvenu-section.text';
  
  topParagraph : string = "Réservez vite vos vacances";
  middleParagraph : string = "Réservez vite vos vacances";
  bottomParagraph : string = "Réservez vite vos vacances";

  
  @HostListener('window:scroll', ['$event'])
  onScroll(e: any) {    
    if(window.innerWidth > 770){
      const parallaxElements = document.querySelectorAll('.parallax');
      const parallaxSlowElements = document.querySelectorAll('.parallax-fast');
  
      let fastSpeed = 0.18;
      let limitFast = 60;
      let slowSpeed = 0.20;
      let limitSlow = 90;

      parallax(parallaxSlowElements, slowSpeed, limitSlow);
      parallax(parallaxElements, fastSpeed, limitFast);
    }    
  }

}

