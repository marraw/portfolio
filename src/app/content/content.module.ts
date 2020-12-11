import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    StartComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  imports: [CommonModule],
  exports: [
    StartComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
  ],
})
export class ContentModule {}
