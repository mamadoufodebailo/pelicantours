import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PartenaireServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PartenaireServiceProvider {

  constructor(public http: HttpClient) {
    //console.log('Hello PartenaireServiceProvider Provider');
  }

  getPartenaire(){
    return this.http.get("http://pelicantoursn.com/news/api/partenaire.php");
  }

}
