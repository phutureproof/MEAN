import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ListComponent} from './components/list/list.component';
import {CreateComponent} from './components/create/create.component';
import {EditComponent} from './components/edit/edit.component';
import {MatCardModule, MatInputModule, MatToolbarModule} from "@angular/material";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {DataService} from "./services/data.service";

@NgModule({
	declarations: [
		AppComponent,
		ListComponent,
		CreateComponent,
		EditComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatCardModule,
		MatInputModule,
		HttpClientModule,
		FormsModule
	],
	providers: [DataService],
	bootstrap: [AppComponent]
})
export class AppModule {
}
