import { Component, OnInit } from '@angular/core';
import { curveCardinal } from 'd3-shape';
import { LineData, SeriesData } from 'src/app/model/line.model';
import { PredData } from 'src/app/model/pred.model';
import { Score } from 'src/app/model/score.model';
import { AuthService } from 'src/app/services/auth.service';
import { PredictionService } from 'src/app/services/prediction.service';
import * as config from "../../model/chartConfig.json";

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.scss']
})
export class PredictionComponent implements OnInit {
  public config = config
  public curve = curveCardinal


  public from: string = "2023-01-01";
  public to: string = "2024-01-01";
  public prediction!: PredData[];
  public lineData!: LineData[];
  public modelScore: number = 0;
  public showAdmin = false;

  constructor(private pred: PredictionService, private auth: AuthService) { }
  ngOnInit(): void {
    this.getPredData()
    this.getScore()
    this.getUserAdmin()
  }

  getUserAdmin() {
    this.showAdmin = this.auth.getCurrentUser().admin
    console.log(this.auth.getCurrentUser())
  }


  getFromDate(date: string) {
    this.from = date
    this.getPredData()
  }
  getToDate(date: string) {
    this.to = date
    this.getPredData()
  }

  getPredData() {
    console.log(this.from, this.to)
    this.pred.getPredData(this.from, this.to).subscribe((data: PredData[]) => {
      console.log(data)
      this.prediction = data
      this.lineData = [{ name: "Chiffre d'affaire", series: this.prediction as unknown as SeriesData[] }]
    })
  }

  getScore() {
    this.pred.getScore().subscribe((data: Score) => {
      this.modelScore = data.score * 100
      console.log(data)
    })
  }

  trainModel() {
    this.pred.retrainModel().subscribe((data: string) => {
      console.log(data == "Done")
      if (data == "Done") {
        this.getScore()
        this.getPredData()
      }
    })
  }




}
