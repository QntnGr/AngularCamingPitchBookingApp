import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AnnoncesComponent } from '../annonces/components/annonces.component';
import { HeaderComponent } from '../header/header.component';
import { CarrouselHomeComponent } from './carrousel-home/carrousel-home.component';
import { AccesibilityComponent } from './accesibility/accesibility.component';
// import ngx-translate and the http loader
import { HttpClient } from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { LucideAngularModule, Home, Menu, CalendarDays, Trees, Calendar, 
    MapPin, Tent, Phone, X, ChevronDown, ChevronLeft, ChevronRight, 
    ChevronUp } from 'lucide-angular';
import { MenuComponent } from '../header/menu/menu.component';

@NgModule({
    imports: [
        AnnoncesComponent,        
        CommonModule,
        CarrouselHomeComponent,      
        TranslateModule.forRoot({
          loader: {
              provide: TranslateLoader,
              useFactory: HttpLoaderFactory,
              deps: [HttpClient]
          }
        }),
        LucideAngularModule.pick({Home, Menu, CalendarDays
            , Trees, Calendar, MapPin, Tent, Phone, X, ChevronDown
            , ChevronLeft, ChevronRight, ChevronUp })
    ],
    declarations: [
        HomeComponent,
        AccesibilityComponent,
        HeaderComponent, 
        MenuComponent
    ],
    exports: [
        HomeComponent
    ]
})

export class HomeModule{}
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}