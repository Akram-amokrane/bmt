import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularSvgIconModule } from "angular-svg-icon";

import { HttpClientModule } from "@angular/common/http"
import { WindowBarComponent } from './components/window-bar/window-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PredictionComponent } from './pages/prediction/prediction.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataShowComponent } from './components/data-show/data-show.component'

@NgModule({
  declarations: [
    AppComponent,
    WindowBarComponent,
    SideBarComponent,
    DashboardComponent,
    PredictionComponent,
    DataShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
