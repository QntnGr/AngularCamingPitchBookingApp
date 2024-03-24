import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true
})

export class HeaderComponent {
  bookButtonLabel : string = "RÉSERVER";
  menuButtonLabel : string = "MENU";
  preheaderMessage : string = "Réservez vite vos vacances";
}
