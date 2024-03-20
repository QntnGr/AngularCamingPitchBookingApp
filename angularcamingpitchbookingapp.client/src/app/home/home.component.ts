import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  images = [
    {
      srcUrl: 'assets/Images/Home/Slider/camping_dans_foret.png',
      imgAlt: 'camping foret'
    },
    {
      srcUrl: 'assets/Images/Home/Slider/foret-des-Landes_pin.png',
      imgAlt: 'foret des landes'
    },
    {
      srcUrl: 'assets/Images/Home/Slider/plage_cabane.png',
      imgAlt: 'camping foret'
    }
  ];

}
