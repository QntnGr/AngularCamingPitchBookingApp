import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
    ChevronUp, 
    MoveLeft,
    MoveRight,
    Mail,
    ArrowUpLeft,
    Pointer,
    CookingPot,
    Sun,
    ShowerHead,
    BedDouble,
    Users,
    Caravan,
    Truck,
    Zap,
    Copy,
    CalendarClock} from 'lucide-angular';
import { MenuComponent } from '../header/menu/menu.component';
import { ImportantInfoComponent } from './important-info/important-info.component';
import { PitchTypeComponent } from './pitch-type/pitch-type.component';
import { ActivitySliderComponent } from './activity-slider/activity-slider.component';
import { register } from 'swiper/element/bundle';
import { ReplaceLinksPipe } from '../pipes/replace-link';
import { AppRoutingModule } from '../app-routing.module';
import { PopinContactComponent } from './popin-contact/popin-contact.component';
import { CampingPicturesComponent } from './camping-pictures/camping-pictures.component';
import { ServicesComponent } from './services/services.component';
import { CommitmentsComponent } from './commitments/commitments.component';
register();

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
            , ChevronLeft, ChevronRight, ChevronUp, MoveLeft, MoveRight
            , Mail, ArrowUpLeft, Pointer, CookingPot, Sun, ShowerHead
            , BedDouble, Users, Caravan, Truck, Zap, Copy, CalendarClock}),
        ReplaceLinksPipe,
        AppRoutingModule
    ],
    declarations: [
        HomeComponent,
        AccesibilityComponent,
        HeaderComponent, 
        MenuComponent, ImportantInfoComponent, PitchTypeComponent, ActivitySliderComponent, PopinContactComponent, CampingPicturesComponent, ServicesComponent, CommitmentsComponent
    ],
    exports: [
        HomeComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class HomeModule{}
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}