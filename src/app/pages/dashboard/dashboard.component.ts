import { Component, OnInit } from '@angular/core';
import { curveCardinal } from 'd3-shape';
import { DataShow } from 'src/app/model/datashow.model';
import { EmbDebData } from 'src/app/model/embdeb.model';
import { LineData } from 'src/app/model/line.model';
import { PercentData } from 'src/app/model/percent.model';
import { DashboardService } from 'src/app/services/dashboard.service';
import * as config from "../../model/chartConfig.json"
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public curve = curveCardinal;
  public config = config;
  public from: string = "2016-01-01";
  public to: string = "2017-01-01";

  public dataShow?: DataShow;
  public dataLine?: LineData[];
  public consignataire?: PercentData[];
  public provenance?: PercentData[];
  public embDebData?: EmbDebData[]


  constructor(private dash: DashboardService) { }
  ngOnInit(): void {
    this.refreshData()
  }

  getFromDate(date: string) {
    this.from = date
    this.refreshData()
  }
  getToDate(date: string) {
    this.to = date
    this.refreshData()
  }

  refreshData() {
    this.getDataShow()
    this.getLineData()
    this.getConsignataireData()
    this.getEmbDebData()
    this.getProvenanceData()
  }

  getDataShow() {
    this.dash.getDataShow(this.from, this.to).subscribe((data: DataShow) => {
      this.dataShow = data
    });
  }

  getLineData() {
    this.dash.getLineData(this.from, this.to).subscribe((data: LineData[]) => {
      this.dataLine = data
    });
  }

  getConsignataireData() {
    this.dash.getConsignataireData(this.from, this.to).subscribe((data: PercentData[]) => {
      this.consignataire = data
      this.consignataire = data.map<PercentData>(x => { return { ...x, value: x.value / (this.dataShow!.navires || 1) } })
    });
  }

  getEmbDebData() {
    this.dash.getEmbDebData(this.from, this.to).subscribe((data: EmbDebData[]) => {
      this.embDebData = data
    });
  }


  getProvenanceData() {
    this.dash.getProvenanceData(this.from, this.to).subscribe((data: PercentData[]) => {
      this.provenance = data
    });
  }


}
