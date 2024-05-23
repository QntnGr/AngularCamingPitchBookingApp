import { Component, HostListener } from '@angular/core';
declare function parallax(elements: any, speed: number): void;

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
    const parallaxElements = document.querySelectorAll('.parallax');
    const parallaxSlowElements = document.querySelectorAll('.parallax-fast');
    parallax(parallaxElements, 0.1);
    parallax(parallaxSlowElements, 0.13);
  }
}
