import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ModeleServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ModeleServiceProvider {

  constructor(public http: HttpClient) {
    //console.log('Hello ModeleServiceProvider Provider');
  }

  addVol(vol:any){
    return this.http.post("http://pelicantoursn.com/news/api/vol.php",vol,
      {headers: new HttpHeaders({"content-type": "application/json"})});
  }

  addHotel(hotel:any){
    return this.http.post("http://pelicantoursn.com/news/api/hotel.php",hotel,
      {headers: new HttpHeaders({"content-type": "application/json"})});
  }

  addAssurance(assurance:any){
    return this.http.post("http://pelicantoursn.com/news/api/assurance.php",assurance,
      {headers: new HttpHeaders({"content-type": "application/json"})});
  }

  addTransport(transport:any){
    return this.http.post("http://pelicantoursn.com/news/api/transport.php",transport,
      {headers: new HttpHeaders({"content-type": "application/json"})});
  }

  addContact(contact:any){
    return this.http.post("http://pelicantoursn.com/news/api/contact.php",contact,
      {headers: new HttpHeaders({"content-type": "application/json"})});
  }

}
