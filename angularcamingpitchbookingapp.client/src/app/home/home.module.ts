import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AnnoncesComponent } from '../annonces/components/annonces.component';
import { HeaderComponent } from '../header/header.component';
import { CarrouselHomeComponent } from './carrousel-home/carrousel-home.component';

@NgModule({
    imports: [
        AnnoncesComponent,
        HeaderComponent,
        CommonModule,
        CarrouselHomeComponent
    ],
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent
    ]
})

export class HomeModule{}