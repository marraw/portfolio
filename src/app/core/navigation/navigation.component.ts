import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  menuOpen = false;
  showMenu = false;
  showHamburger = false;

  constructor() {}

  @HostListener('window:scroll', ['$event'])
  showNavbar(): void {
    if (window.pageYOffset >= window.innerHeight * 0.6) {
      this.showMenu = true;
      this.showHamburger = true;
    } else {
      this.showMenu = false;
      this.showHamburger = false;
    }
  }
}
