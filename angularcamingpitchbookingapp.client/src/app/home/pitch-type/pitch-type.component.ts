import { Component } from '@angular/core';
import { Card } from './card';

@Component({
  selector: 'app-pitch-type',
  templateUrl: './pitch-type.component.html',
  styleUrl: './pitch-type.component.scss'
})
export class PitchTypeComponent {
  titlePitchTypeSection: string = "home.types-emplacements.titre-section";
  text_lien: string = "home.types-emplacements.text-lien";
  pitches: Card[] = [
    {
      file_url: "../../../assets/files/TARIFS_LODGE_2024.pdf",
      image_url : '../../../assets/Images/Home/Sections/PitchTypes/tente-lodge.jpg',
      title : "home.types-emplacements.tente-lodge.titre",
      text : "ma super tente lodge",
      alt : "type tente lodge",
      hover_background_color: "black",
      offers: [
        {
          title: "offre 1",
          rows: [
            {
              picto_name:"users",
              text: "home.types-emplacements.tente-lodge.offre1.text-ligne1"
            },
            {
              picto_name:"bed-double",
              text: "home.types-emplacements.tente-lodge.offre1.text-ligne2"
            },
            {
              picto_name:"shower-head",
              text: "home.types-emplacements.tente-lodge.offre1.text-ligne3"
            },
            {
              picto_name:"cooking-pot",
              text: "home.types-emplacements.tente-lodge.offre1.text-ligne4"
            },
            {
              picto_name:"sun",
              text: "home.types-emplacements.tente-lodge.offre1.text-ligne5"
            },
          ]
        },
        {
          title: "offre 2",
          rows: [
            {
              picto_name:"users",
              text: "home.types-emplacements.tente-lodge.offre2.text-ligne1"
            },
            {
              picto_name:"bed-double",
              text: "home.types-emplacements.tente-lodge.offre2.text-ligne2"
            },
            {
              picto_name:"sun",
              text: "home.types-emplacements.tente-lodge.offre2.text-ligne3"
            },
          ]
        },
        {
          title: "offre 3",
          rows: [
            {
              picto_name:"users",
              text: "home.types-emplacements.tente-lodge.offre3.text-ligne1"
            },
            {
              picto_name:"bed-double",
              text: "home.types-emplacements.tente-lodge.offre3.text-ligne2"
            },
            {
              picto_name:"sun",
              text: "home.types-emplacements.tente-lodge.offre3.text-ligne5"
            },
          ]
        },
      ]
    },
    {
      file_url: "../../../assets/files/TARIFS_EMPLACMENTS_2024.pdf",
      image_url : '../../../assets/Images/Home/Sections/PitchTypes/tente.jpg',
      title : "home.types-emplacements.tente.titre",
      text : "ma super tente, ma super tente , ma super tente <br> ma super tente ",
      alt : "type tente",
      hover_background_color : "black",
      offers: [
        {
          title: "offre 1",
          rows: [
            {
              picto_name:"users",
              text: "home.types-emplacements.tente.offre1.text-ligne1"
            },
            {
              picto_name:"tent",
              text: "home.types-emplacements.tente.offre1.text-ligne2"
            },
            {
              picto_name:"caravan",
              text: "home.types-emplacements.tente.offre1.text-ligne3"
            },
            {
              picto_name:"zap",
              text: "home.types-emplacements.tente.offre1.text-ligne5"
            },
          ]
        },
      ]
    },
  ];

}
