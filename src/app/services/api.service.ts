import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getToken() {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': '2K7cSkoczsWra+mr5RUgyg',
        'Access-Control-Allow-Origin': '*'
      })
    };


    return this.http.post<Object>('https://185.253.153.45/winfra3/api_token/', {
      "domain": "marala",
      "api": "maestros"
    }, httpOptions).pipe(
      map(token => { console.log(token); }),
      catchError(err => of(err))
    );
  }
}

