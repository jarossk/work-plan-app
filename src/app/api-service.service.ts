import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  result: any;

  constructor(private _http: Http) { }

  getData() {
    return this._http.get('/api')
          .map(result => this.result = result.json().data);
  }

}
