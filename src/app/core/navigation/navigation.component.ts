import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
} from '@angular/core';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements AfterViewInit {
  hamburgerOpen = false;
  showNav = false;

  content!: ElementRef[];

  constructor(private navigationService: NavigationService) {}

  ngAfterViewInit(): void {
    this.content = this.navigationService.content;
  }

  @HostListener('window:scroll', ['$event'])
  showNavbar(): void {
    if (window.pageYOffset >= window.innerHeight * 0.6) {
      this.showNav = true;
    } else {
      this.showNav = false;
    }
  }

  scrollToContent(element: ElementRef): void {
    this.hamburgerOpen = false;
    element.nativeElement.scrollIntoView({
      behavior: 'smooth',
    });
  }
}
