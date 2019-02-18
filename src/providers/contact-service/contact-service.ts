import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ContactServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactServiceProvider {

  constructor(public http: HttpClient) {
    //console.log('Hello ContactServiceProvider Provider');
  }

  getContact(){
    return this.http.get("http://pelicantoursn.com/news/api/information.php");
  }

}
