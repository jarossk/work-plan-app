import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { IData } from './data';

@Injectable()
export class ApiService {

  api_url = 'http://localhost:3000';
  appUrl = `${this.api_url}/api/content`;
  // result: any;
  constructor(private _http: Http) { }

  getData(): Observable<IData[]> {
    return this._http
          .get(this.appUrl)
          .map((res: Response) => {
              console.log(res);
              return <IData[]>res.json();
          })
          .catch(this.handleError);
  }

  private handleError(err: Response) {
    return Observable.throw(err.statusText);
  }
}
