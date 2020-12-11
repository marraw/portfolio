import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { ContentModule } from './content/content.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), CoreModule, ContentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
