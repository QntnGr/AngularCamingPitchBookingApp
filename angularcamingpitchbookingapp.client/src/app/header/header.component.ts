import { Component } from '@angular/core';
import { TranslateService} from '@ngx-translate/core';
import { Language } from './language';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: false
})

export class HeaderComponent {  

  languages: Language[] = [
    {
      isDefault : true,
      label: "Fr",
      value: "fr"
    },
    {
      label: "En",
      value: "en"
    },
    {
      label: "De",
      value: "de"
    },
    {
      label: "Nl",
      value: "nl"
    },
    {
      label: "Es",
      value: "es"
    }
  ]; 
  isMenuVisible: boolean = false;

  constructor(public translate: TranslateService) {
    translate.setDefaultLang('fr');
    translate.use('fr');
  }

  changeLanguage(languageValue: string) {
    if (languageValue.length === 2) {
      this.translate.use(languageValue);
      setLanguage(this.languages, languageValue);
    }
  }

  onMenuVisibilityChange(visibility: boolean){
    this.isMenuVisible = visibility;
  }
}

function setLanguage(languages: Language[], value: string) {
  for (const lang of languages) {
    if (lang.value === value) {
      lang.isDefault = true;
    } else {
      lang.isDefault = false;
    }
  }
}

