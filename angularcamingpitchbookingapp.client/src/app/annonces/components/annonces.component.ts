import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Annonce } from '../models/annonce.model';

@Component({
  selector: 'app-annonce',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './annonces.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AnnoncesComponent { 

    public annonce: Annonce | null;

    public bookingRslt = "";

    constructor(private http: HttpClient){
      this.annonce = {
        id: 1,
        message: "mon annonnce de test",
        title: "Annonce Test",
        imageUrl: "fakeUrl.com"
      }
    }


    title = 'angularcamingpitchbookingapp.client';
}
