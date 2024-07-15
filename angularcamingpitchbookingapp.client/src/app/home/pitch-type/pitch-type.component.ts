import { Component } from '@angular/core';
import { Card } from './card';

@Component({
  selector: 'app-pitch-type',
  templateUrl: './pitch-type.component.html',
  styleUrl: './pitch-type.component.scss'
})
export class PitchTypeComponent {

  public titlePitchTypeSection: string = "home.types-emplacements.titre-section";
  public text_lien: string = "home.types-emplacements.text-lien";
  public pitches: Card[] = [
    {
      file_url: "../../../assets/files/TARIFS_LODGE_2024_juillet.pdf",
      image_class: 'tente-lodge-img',
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
      ],
      gap_offers_class: "gap"
    },
    {
      file_url: "../../../assets/files/TARIFS_EMPLACMENTS_2024.pdf",
      image_class: 'tente-img',
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
      ],
      gap_offers_class: "gap"
    },
  ];

  
  public manageTapOrClick(e: Event, url: string) {
    if (window.innerWidth < 720 
      && e.target instanceof HTMLElement) {
        let classNameTarget = e.target.classList;

        if (classNameTarget.contains("link-fake")) {
            window.open(url, '_blank');
        }
        e.stopPropagation();
    }
    else{
      window.open(url, '_blank');
    }
  }
  

}
