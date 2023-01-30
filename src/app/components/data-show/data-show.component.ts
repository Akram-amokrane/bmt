import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-show',
  templateUrl: './data-show.component.html',
  styleUrls: ['./data-show.component.scss']
})
export class DataShowComponent implements OnInit {
  @Input() data!: any;
  @Input() bg: String = "#BAEDBD90";
  public stateOpe = "+"

  ngOnInit(): void {
    if (this.data.state == "down") {
      this.stateOpe = "-"
    } else {
      this.stateOpe = "+"
    }
  }
}


