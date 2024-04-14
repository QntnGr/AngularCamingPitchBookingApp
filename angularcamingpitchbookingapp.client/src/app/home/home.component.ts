import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  images = [
    {
      srcUrl: 'assets/Images/Home/Slider/feret_pins.jpg',
      imgAlt: 'foret des landes'
    },
    {
      srcUrl: 'assets/Images/Home/Slider/camping_dans_foret.png',
      imgAlt: 'camping foret'
    },
    {
      srcUrl: 'assets/Images/Home/Slider/plage_cabane.png',
      imgAlt: 'camping foret'
    }
  ];

}
