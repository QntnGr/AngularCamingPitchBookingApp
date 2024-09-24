import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dynamic-iframe',
  templateUrl: './dynamic-iframe.component.html',
  styleUrl: './dynamic-iframe.component.scss'
})

export class DynamicIframeComponent {
  @Input() documentUrl: string = '';
  @Input() isVisible: boolean = false;
  @Output() closeIframe = new EventEmitter<void>();

  sanitizedUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  // Met à jour l'URL sécurisée à chaque changement de l'input
  ngOnChanges() {
    if (this.documentUrl) {
      this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.documentUrl);
    }
  }

  closePopin(){
    this.closeIframe.emit();
  }
}
