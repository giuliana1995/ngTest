import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Api } from '../api-model/model';

@Injectable({
  providedIn: 'root'
}) 

export class InfoService {

  constructor(private http: HttpClient) {
    console.log('ciao sono il servizio', Math.random() * 2);
  }

  getApi(): Observable<Api[]> {
    return this.http.get<Api[]>('https://jsonplaceholder.typicode.com/photos')
    .pipe(
      map((api) => {
        return api
      })
    )
  }

}
