import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../../config';

@Injectable({
  providedIn: 'root'
})
export class DefaultService {

  public url: string;
  public status: string;

  constructor(
    public _http: HttpClient
  ) 
  {
    this.url = GLOBAL.url;
  }

  getDatas(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get(this.url + 'users', { headers: headers });
  }


}
