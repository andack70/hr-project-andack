import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HrMockupService } from './core/hr-mock.services';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HrNavComponent } from './hr-nav/hr-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
	declarations: [ AppComponent, HrNavComponent ],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatButtonModule,
		HttpClientModule,
		HttpClientInMemoryWebApiModule.forRoot(HrMockupService),
		LayoutModule,
		MatToolbarModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
