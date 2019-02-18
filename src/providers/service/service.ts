import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {

  constructor(public http: HttpClient) {
    //console.log('Hello ServiceProvider Provider');
  }

  getService(type){
    return this.http.get("http://pelicantoursn.com/news/api/service.php?type="+type);
  }

}
