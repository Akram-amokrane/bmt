import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PredData } from '../model/pred.model';
import { Score } from '../model/score.model';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {

  constructor(private http: HttpClient) { }

  getPredData(from: string, to: string): Observable<PredData[]> {
    return this.http.get<PredData[]>(`${environment.apiPred}/${from}/${to}`);
  }

  getScore(): Observable<Score> {
    return this.http.get<Score>(`${environment.apiPred}/score`);
  }

  retrainModel(): Observable<string> {
    return this.http.get<string>(`${environment.apiPred}/train`);
  }

}
