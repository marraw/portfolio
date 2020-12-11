import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationService } from 'src/app/core/navigation/navigation.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements AfterViewInit {
  @ViewChild('about') about!: ElementRef;

  constructor(private navigationService: NavigationService) {}

  ngAfterViewInit(): void {
    this.navigationService.content[1] = this.about;
  }
}
