import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PredictionComponent } from './pages/prediction/prediction.component';

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent, data: { connected: true } },
  { path: "login", component: DashboardComponent, data: { connected: false } },
  { path: "prediction", component: PredictionComponent, data: { connected: true } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
