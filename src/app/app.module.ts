import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HrMockupComponent } from './hr-mockup/hr-mockup.component';

@NgModule({
  declarations: [
    AppComponent,
    HrMockupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
