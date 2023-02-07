import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularSvgIconModule } from "angular-svg-icon";
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { MatIconModule } from "@angular/material/icon"

import { HttpClientModule } from "@angular/common/http"
import { WindowBarComponent } from './components/window-bar/window-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PredictionComponent } from './pages/prediction/prediction.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataShowComponent } from './components/data-show/data-show.component';
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatInputModule } from '@angular/material/input';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { PercentBarComponent } from './components/percent-bar/percent-bar.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { LoginComponent } from './pages/login/login.component';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [
    AppComponent,
    WindowBarComponent,
    SideBarComponent,
    DashboardComponent,
    PredictionComponent,
    DataShowComponent,
    DatePickerComponent,
    PercentBarComponent,
    AvatarComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    BrowserAnimationsModule,
    NgxChartsModule,
    MatDatepickerModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
