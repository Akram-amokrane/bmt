import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  public currentPage: "d" | "p" = "d"

  constructor(private router: Router) { }

  goToDashboard() {
    this.router.navigate(['dashboard',])
    this.currentPage = "d"
  }

  goToPrediction() {
    this.router.navigate(['prediction',])
    this.currentPage = "p"
  }

}
