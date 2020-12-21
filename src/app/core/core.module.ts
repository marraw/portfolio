import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartComponent } from './start/start.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [StartComponent, NavigationComponent],
  imports: [CommonModule],
  exports: [StartComponent, NavigationComponent],
})
export class CoreModule {}
