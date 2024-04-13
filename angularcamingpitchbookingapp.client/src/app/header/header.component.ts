import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: false
})

export class HeaderComponent {
  bookButtonLabel : string = "RÉSERVER";
  menuButtonLabel : string = "MENU";
  preheaderMessage : string = "Réservez vite vos vacances";
  
  constructor(translate: TranslateService) {
    translate.setDefaultLang('fr');
    translate.use('fr');
  }
}
