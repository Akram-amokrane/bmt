import { Component, Input } from '@angular/core';
import { PercentData } from 'src/app/model/percent.model';

@Component({
  selector: 'app-percent-bar',
  templateUrl: './percent-bar.component.html',
  styleUrls: ['./percent-bar.component.scss']
})
export class PercentBarComponent {
  @Input() data!: PercentData;

  getPregressWidth(p: any) {
    var w = p.clientWidth;
    return w * this.data.value
  }
}


