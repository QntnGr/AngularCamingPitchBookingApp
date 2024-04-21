import { Component } from '@angular/core';

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
}
