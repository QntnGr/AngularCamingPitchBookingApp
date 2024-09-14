import { Component } from '@angular/core';
import { ServiceInfo } from './service-information';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  title : string = "home.services.title";
  services_info : ServiceInfo[] = [
    { 
      text: "home.services.reception",
      image_src: "../../../assets/Images/Home/Sections/Services/icon_reception.svg"
    },
    { 
      text: "home.services.parking",
      image_src: "../../../assets/Images/Home/Sections/Services/icon_parking.svg"
    },
    { 
      text: "home.services.petanque",
      image_src: "../../../assets/Images/Home/Sections/Services/icon_petanque.svg"
    },
    { 
      text: "home.services.pets",
      image_src: "../../../assets/Images/Home/Sections/Services/icon_pate_chien.svg"
    },
    { 
      text: "home.services.wash",
      image_src: "../../../assets/Images/Home/Sections/Services/icon_lave_linge.svg"
    },
    { 
      text: "home.services.wc",
      image_src: "../../../assets/Images/Home/Sections/Services/icon_wc.svg"
    },
    { 
      text: "home.services.table",
      image_src: "../../../assets/Images/Home/Sections/Services/icon_table.svg"
    },
  ];
}
