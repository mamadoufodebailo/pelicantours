import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SlideServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SlideServiceProvider {

  constructor(public http: HttpClient) {
    //console.log('Hello SlideServiceProvider Provider');
  }

  getSlide(){
    return this.http.get("http://pelicantoursn.com/news/api/slide.php");
  }

}
