import { Injectable } from '@angular/core';
import { Headers, Http, Jsonp, RequestOptions, Response } from "@angular/http";
import { Observable, Observer } from "rxjs/Rx";
import "rxjs/add/operator/map";
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:Http) { }

  forecast()
  {
      const Url = "https://openweathermap.org/data/2.5/forecast/?appid=b6907d289e10d714a6e88b30761fae22&amp;id=1261481&amp;units=metric";
      // let header: Headers = new Headers();
      // header.append('Content-type', 'application/json');
      // let options = new RequestOptions({ headers: header });
    
      return this.http.get(Url).map(response =>response.json())
          
          .catch((error: any) => {
          return Observable.throw(error._body);
          });
  }

  current()
  { const Url = "https://openweathermap.org/data/2.5/weather/?appid=b6907d289e10d714a6e88b30761fae22&amp;id=1261481&amp;units=metric";
  // let header: Headers = new Headers();
  // header.append('Content-type', 'application/json');
  // let options = new RequestOptions({ headers: header });

  return this.http.get(Url).map(response =>response.json())
      
      .catch((error: any) => {
      return Observable.throw(error._body);
      });

  }
}
