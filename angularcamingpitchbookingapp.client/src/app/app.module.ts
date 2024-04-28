import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FooterComponent } from './footer/footer.component';
import { Facebook, Instagram, LucideAngularModule, Phone, Youtube} from 'lucide-angular';
import { TranslateModule } from '@ngx-translate/core';
import { ReplaceLinksPipe } from "./pipes/replace-link";

@NgModule({
    providers: [
        provideAnimationsAsync()
    ],
    bootstrap: [AppComponent],
    declarations: [AppComponent, FooterComponent],
    imports: [
        BrowserModule, HttpClientModule,
        AppRoutingModule, HomeModule,
        LucideAngularModule.pick({ Phone, Facebook, Instagram, Youtube }),
        TranslateModule,
        ReplaceLinksPipe
    ]
})
export class AppModule { }
