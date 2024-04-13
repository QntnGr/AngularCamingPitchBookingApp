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
        })
    ],
    declarations: [
        HomeComponent,
        AccesibilityComponent,
        HeaderComponent
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