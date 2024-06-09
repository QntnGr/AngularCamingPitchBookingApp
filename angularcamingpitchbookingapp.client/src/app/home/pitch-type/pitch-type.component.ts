import { Component } from '@angular/core';
import { Card } from './card';

@Component({
  selector: 'app-pitch-type',
  templateUrl: './pitch-type.component.html',
  styleUrl: './pitch-type.component.scss'
})
export class PitchTypeComponent {
  titlePitchTypeSection: string = "home.types-emplacements.titre-section";
  pitches: Card[] = [
    {
      image_url : '../../../assets/Images/Home/Sections/PitchTypes/tente-lodge.png',
      title : "home.types-emplacements.tente-lodge.titre",
      text : "ma super tente lodge",
      alt : "type tente lodge",
      hover_background_color: "black"
    },
    {
      image_url : '../../../assets/Images/Home/Sections/PitchTypes/tente.png',
      title : "home.types-emplacements.tente.titre",
      text : "ma super tente, ma super tente , ma super tente <br> ma super tente ",
      alt : "type tente",
      hover_background_color : "black"
    },
  ];

}
