import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationService } from 'src/app/core/navigation/navigation.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements AfterViewInit {
  @ViewChild('projects') projects!: ElementRef;

  constructor(private navigationService: NavigationService) {}

  ngAfterViewInit(): void {
    this.navigationService.content[3] = this.projects;
  }
}
