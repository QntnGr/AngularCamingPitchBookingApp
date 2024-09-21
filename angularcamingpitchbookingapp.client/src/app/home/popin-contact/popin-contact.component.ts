import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import {Clipboard} from '@angular/cdk/clipboard';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

@Component({
  selector: 'app-popin-contact',
  templateUrl: './popin-contact.component.html',
  styleUrl: './popin-contact.component.scss'
})

export class PopinContactComponent {
  title_popin: string = "home.popin-contact.titre";
  opening_hours: string = "home.services.reception";

  @ViewChildren('copyLink') copyLinks?: QueryList<ElementRef>;

  constructor(private clipboard: Clipboard, private _snackBar: MatSnackBar) {}

  ngAfterViewInit(): void {
    this.copyLinks?.forEach((copyLink: ElementRef) => {
      copyLink.nativeElement.addEventListener('click', this.copyElement.bind(this));
    });
  }

  copyElement(e: Event){
    if(e.currentTarget instanceof HTMLElement){
      let textEl = e.currentTarget?.previousElementSibling?.textContent ?? "";
      this.clipboard.copy(textEl);
      this.openSnackBar('Copié', 'OK', 2);
    }
  }
  openSnackBar(message: string, action: string, durationSec: number) {
    let config = new MatSnackBarConfig();
    config.duration = durationSec * 1000;
    this._snackBar.open(message, action, config);
  }
  
}
