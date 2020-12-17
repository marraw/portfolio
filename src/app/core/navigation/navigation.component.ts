import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
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
  @ViewChild('about') about!: ElementRef;
  @ViewChild('skills') skills!: ElementRef;
  @ViewChild('projects') projects!: ElementRef;
  @ViewChild('contact') contact!: ElementRef;

  constructor(
    private renderer: Renderer2,
    private navigationService: NavigationService
  ) {}

  ngAfterViewInit(): void {
    this.content = this.navigationService.content;
  }

  @HostListener('window:scroll', ['$event'])
  animateNav(): void {
    if (window.innerWidth < 1024) {
      this.showNav = window.pageYOffset >= window.innerHeight * 0.9;
    } else if (window.innerWidth >= 1024) {
      this.showNav = window.pageYOffset >= window.innerHeight * 0.5;
    }

    if (this.showNav) {
      const clear = (element: ElementRef) => {
        this.renderer.removeClass(element.nativeElement, 'active-link');
      };
      const activate = (element: ElementRef) => {
        this.renderer.addClass(element.nativeElement, 'active-link');
      };

      if (this.content[2].nativeElement.offsetTop > window.pageYOffset + 100) {
        activate(this.about);
        clear(this.skills);
        clear(this.projects);
        clear(this.contact);
      } else if (
        this.content[3].nativeElement.offsetTop >
        window.pageYOffset + 100
      ) {
        activate(this.skills);
        clear(this.about);
        clear(this.projects);
        clear(this.contact);
      } else if (
        this.content[4].nativeElement.offsetTop >
        window.pageYOffset + 200
      ) {
        activate(this.projects);
        clear(this.about);
        clear(this.skills);
        clear(this.contact);
      } else {
        activate(this.contact);
        clear(this.about);
        clear(this.skills);
        clear(this.projects);
      }
    }
  }

  scrollToContent(element: ElementRef): void {
    if (window.innerWidth < 1024) {
      this.hamburgerOpen = false;
      element.nativeElement.scrollIntoView();
    } else {
      element.nativeElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }
}
