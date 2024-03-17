import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() inputName: string = "";
  @Output() buttonClicked: EventEmitter<string> = new EventEmitter<string>();

  handleClick(event: MouseEvent): void {
    if(event.button === 0){
      this.buttonClicked.emit("cliked left button");
    }
    else if(event.button === 1){
      this.buttonClicked.emit("cliked wheel button");
    }
  }
}
