import { Component } from '@angular/core';

@Component({
  selector: 'app-accesibility',
  templateUrl: './accesibility.component.html',
  styleUrl: './accesibility.component.scss'
})

export class AccesibilityComponent {
  preTitle : string = "BIENVENU AU CAMPING";
  title : string = "Montacabana !";
  contactButtonLabel : string = "CONACTEZ NOUS";
  
  topParagraph : string = "Réservez vite vos vacances";
  middleParagraph : string = "Réservez vite vos vacances";
  bottomParagraph : string = "Réservez vite vos vacances";
}
