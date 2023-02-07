import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Event, NavigationStart, NavigationError } from "@angular/router"
import { filter, pipe } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  public currentPage: "d" | "p" = "d"
  public user!: User;

  constructor(private router: Router, private auth: AuthService) {
    this.router.events.subscribe((event: Event) => {

      if (event instanceof NavigationEnd) {
        //do something on end activity
        this.currentPage = event.url == "/dashboard" ? "d" : "p";
      }
    });
  }


  ngOnInit(): void {
    this.currentPage = this.router.url === '/dashboard' ? "d" : "p";
    this.user = this.auth.getCurrentUser()

  }

  goToDashboard() {
    this.router.navigate(['dashboard',])
    this.currentPage = "d"
    console.log(this.user)
  }

  goToPrediction() {
    this.router.navigate(['prediction',])
    this.currentPage = "p"
  }

}
