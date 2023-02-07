import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataShow } from '../model/datashow.model';
import { EmbDebData } from '../model/embdeb.model';
import { LineData } from '../model/line.model';
import { PercentData } from '../model/percent.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getDataShow(from: string, to: string): Observable<DataShow> {
    return this.http.get<DataShow>(`${environment.apiDash}/datashow/${from}/${to}`);
  }

  getLineData(from: string, to: string): Observable<LineData[]> {
    return this.http.get<LineData[]>(`${environment.apiDash}/line/${from}/${to}`);
  }

  getConsignataireData(from: string, to: string): Observable<PercentData[]> {
    return this.http.get<PercentData[]>(`${environment.apiDash}/consignataire/${from}/${to}`);
  }

  getEmbDebData(from: string, to: string): Observable<EmbDebData[]> {
    return this.http.get<EmbDebData[]>(`${environment.apiDash}/embdeb/${from}/${to}`);
  }

  getProvenanceData(from: string, to: string): Observable<PercentData[]> {
    return this.http.get<PercentData[]>(`${environment.apiDash}/provenance/${from}/${to}`);
  }
}
