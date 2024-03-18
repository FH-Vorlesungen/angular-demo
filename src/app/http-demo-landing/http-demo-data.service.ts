import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DemoData} from './demo-data.model';
import {DemoRelated} from './demo-related.model';

@Injectable({
  providedIn: 'root'
})
export class HttpDemoDataService {

  private baseUrl = 'http://localhost:3000'
  private httpClient = inject(HttpClient)
  constructor() { }

  getDemoData():Observable<DemoData[]> {
    return this.httpClient.get<DemoData[]>(this.baseUrl+'/demo-data');
  }
  getDemoRelatedData():Observable<DemoRelated[]> {
    return this.httpClient.get<DemoRelated[]>(this.baseUrl+'/demo-related');
  }
}
