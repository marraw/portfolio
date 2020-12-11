import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  hamburgerOpen = false;
  showNav = false;

  @HostListener('window:scroll', ['$event'])
  showNavbar(): void {
    if (window.pageYOffset >= window.innerHeight * 0.6) {
      this.showNav = true;
    } else {
      this.showNav = false;
    }
  }

  scrollTop(): void {
    let scroll = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 80);
      } else {
        window.clearInterval(scroll);
      }
    }, 16);
  }
}
