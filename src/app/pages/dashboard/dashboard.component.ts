import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public datashow = {
    title: "Chiffre d'affaire",
    value: 8541248,
    percent: 0.12364,
    state: "down"
  }
}
