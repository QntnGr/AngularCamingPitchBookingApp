import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

class Booking {
  constructor(private id:number
    , private start:Date
    , private end:Date
    , private campingpitchid: number){
  }
  
}

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>basket works fine!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasketComponent { 
  
  public bookingRslt: string = "";
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.postBooking();
  }

  postBooking() {
    this.http.post<string>('/basket', new Booking(1, new Date(), new Date(), 2)).subscribe({
      next:(result) => {
        this.bookingRslt = result;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  title = 'angularcamingpitchbookingapp.client';}
