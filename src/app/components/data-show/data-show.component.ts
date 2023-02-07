import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-show',
  templateUrl: './data-show.component.html',
  styleUrls: ['./data-show.component.scss']
})
export class DataShowComponent {
  @Input() title!: string;
  @Input() icon?: string;
  @Input() value!: number;
  @Input() currency = false;
  @Input() bg: String = "#BAEDBD90";


}


