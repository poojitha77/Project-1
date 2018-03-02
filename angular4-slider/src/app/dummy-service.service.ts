import { Injectable } from '@angular/core';
import { RequestOptions, RequestMethod, RequestOptionsArgs, Http, Headers, Response, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DummyServiceService {

  constructor(private http: Http) { }


  getCall(param) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: headers});
    let url = "https://jsonplaceholder.typicode.com/";
    switch(param) {
      case 'Expired':
        url = url + 'users/';
        break;
      case 'Active':
        url = url + 'posts/';
        break;
      case 'Future':
        url = url + 'todos/';
        break;
      case 'All':
        url = url + 'comments/';
        break;
    }
    return this.http.get(url, options).map((res: Response) => res.json()).catch(res => this.handleError(res));
  }




  private handleError(error: Response) {
   return Observable.throw(error.json());
 }

}
