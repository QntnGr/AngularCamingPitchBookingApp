import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})

export class MenuComponent {
  menus: Menu[] = [
    { isVisible: true, idTranslate: "home.menu.le-camping", url: "/le-camping" },
    { isVisible: true, idTranslate: "home.menu.les-hebergements", url: "/les-hebergements" },
    { isVisible: true, idTranslate: "home.menu.le-tourisme", url: "/le-tourisme" },
  ];
  @Input() isMenuVisible?: boolean;
  @Output() menuVisibilityChange : EventEmitter<boolean> = new EventEmitter<boolean>();

  getVisibleMenus() {
    return this.menus.filter(menu => menu.isVisible);
  }

  redirectTo(partialUrl: string) {
    alert('implement link to:' + partialUrl);
  }

  closeMenu(){
    this.isMenuVisible = false;
    this.updateMenuVisibility(false);
  }

  updateMenuVisibility(newVisibility: boolean){
    this.menuVisibilityChange.emit(newVisibility);
  }
}
