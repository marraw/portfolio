import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [StartComponent, AboutComponent, SkillsComponent],
  imports: [CommonModule],
  exports: [StartComponent, AboutComponent, SkillsComponent],
})
export class ContentModule {}
