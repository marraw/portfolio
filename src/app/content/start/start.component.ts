import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NavigationService } from 'src/app/core/navigation/navigation.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements AfterViewInit {
  @ViewChild('start') start!: ElementRef;

  constructor(private navigationService: NavigationService) {}

  ngAfterViewInit(): void {
    this.navigationService.content[0] = this.start;
  }
}
