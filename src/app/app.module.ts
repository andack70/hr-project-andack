import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HrMockupService } from './core/hr-mock.services';

@NgModule({
	declarations: [ AppComponent ],
	imports: [
		BrowserModule,
		HttpClientModule,
		HttpClientInMemoryWebApiModule.forRoot(HrMockupService)
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
