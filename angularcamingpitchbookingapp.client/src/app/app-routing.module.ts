import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccommodationComponent } from './accommodation/accommodation.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'les-hebergements', component: AccommodationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
