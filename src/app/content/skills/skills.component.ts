import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationService } from 'src/app/core/navigation/navigation.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements AfterViewInit {
  @ViewChild('skills') skills!: ElementRef;

  constructor(private navigationService: NavigationService) {}

  ngAfterViewInit(): void {
    this.navigationService.content[2] = this.skills;
  }
}
