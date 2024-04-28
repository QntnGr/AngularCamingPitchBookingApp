import { Component } from '@angular/core';
import { FooterEl } from './footer-element';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  footerEls: FooterEl[] = [
    {
      title: "Contactez nous",
      style: "mainfont",
      rows: [
        {
          pictoNames: ["phone"],
          text: "+33 7 84 56 89 52"
        },
        {
          text: "monAdress@email.com",
          style: "bolder"
        },
        {
          url: "https://codepen.io/falcornus/pen/ZpRyGz",
        }
      ]
    },
    {
      title: "Social",
      style: "mainfont",
      rows: [
        {
          pictoNames: ["facebook", "instagram", "youtube"],
        }
      ]
    },
    {
      title: "Autre info",
      style: "mainfont",
      rows: [
        {
          text: "une info",
        },
        {
          url:  "https://codepen.io/mblode/pen/qBMywM"
        }
      ]
    },
  ];
}
