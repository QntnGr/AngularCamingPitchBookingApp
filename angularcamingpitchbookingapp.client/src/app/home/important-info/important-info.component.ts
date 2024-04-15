import { Component } from '@angular/core';
import { Information } from './information';

@Component({
  selector: 'app-important-info',
  templateUrl: './important-info.component.html',
  styleUrl: './important-info.component.scss'
})
export class ImportantInfoComponent {
  informations : Information[] = [
    { 
      picto_name: "calendar",
      title: "home.infos-importantes.ouverture.titre",
      text: "home.infos-importantes.ouverture.text"
    },
    { 
      picto_name: "map-pin",
      title: "home.infos-importantes.localisation.titre",
      text: "home.infos-importantes.localisation.text"
    },
    { 
      picto_name: "trees",
      title: "home.infos-importantes.terrain.titre",
      text: "home.infos-importantes.terrain.text"
    },
    { 
      picto_name: "tent",
      title: "home.infos-importantes.emplacements.titre",
      text: "home.infos-importantes.emplacements.text"
    },
  ];

}
