import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AboutMe } from '../../assets/interfaces'

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
    return this.http.get('./assets/data.json')
  }
  
}
