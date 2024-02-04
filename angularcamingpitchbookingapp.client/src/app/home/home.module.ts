import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { AnnoncesComponent } from '../annonces/components/annonces.component';
import { HeaderComponent } from '../header/header.component';

@NgModule({
    imports: [
        AnnoncesComponent,
        HeaderComponent
    ],
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent
    ]
})

export class HomeModule{}