import { Component } from '@angular/core';
import { PitchCard } from './pitch-card';

@Component({
  selector: 'app-pitch-type',
  templateUrl: './pitch-type.component.html',
  styleUrl: './pitch-type.component.scss'
})
export class PitchTypeComponent {
  titlePitchTypeSection: string = "Types d'emplacements";
  pitches: PitchCard[] = [
    {
      image_url : '../../../assets/Images/Home/Sections/PitchTypes/tente-lodge.png',
      title : "Tente Lodge",
      text : "ma super tente lodge",
      alt : "type tente lodge"
    },
    {
      image_url : '../../../assets/Images/Home/Sections/PitchTypes/caping-car.png',
      title : "Camping Car",
      text : "mon super Camping Car",
      alt : "type camping-car"
    },
    {
      image_url : '../../../assets/Images/Home/Sections/PitchTypes/tente.png',
      title : "Tente",
      text : "ma super tente, ma super tente , ma super tente <br> ma super tente ",
      alt : "type tente"
    },
  ];
}
