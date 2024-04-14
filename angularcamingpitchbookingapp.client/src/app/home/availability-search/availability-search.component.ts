import { Component, importProvidersFrom } from '@angular/core';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MAT_DATE_LOCALE, provideNativeDateAdapter} from '@angular/material/core';
import DateUtils from '../../helpers/date-utils';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CalendarDays, ChevronRight, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-availability-search',
  templateUrl: './availability-search.component.html',
  styleUrl: './availability-search.component.scss',
  standalone: true,
  providers: [provideNativeDateAdapter(), {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'}],
  imports: [MatFormFieldModule, MatDatepickerModule, FormsModule, 
        ReactiveFormsModule, JsonPipe, TranslateModule, LucideAngularModule],
})
export class AvailabilitySearchComponent {
  range = new FormGroup({
    start: new FormControl<Date | null>(new Date()),
    end: new FormControl<Date | null>(DateUtils.addOneMonthToDate(new Date())),
  });
  typeButtonLabel : string = "Type d’hébergement";
  availabilityButtonLabel : string = "Disponibilités";
  
  constructor(translate: TranslateService) {
    translate.setDefaultLang('fr');
    translate.use('fr');
  }
}
importProvidersFrom(LucideAngularModule.pick({ CalendarDays, ChevronRight }));
