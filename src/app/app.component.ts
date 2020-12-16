import {
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('start') start!: ElementRef;

  constructor(private renderer: Renderer2) {}

  @HostListener('window:scroll')
  hideAnimation(): void {
    if (window.pageYOffset > window.innerHeight) {
      this.renderer.setStyle(this.start.nativeElement, 'visibility', 'hidden');
    } else {
      this.renderer.setStyle(this.start.nativeElement, 'visibility', 'visible');
    }
  }
}
