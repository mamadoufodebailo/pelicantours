import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HotelModele} from "../../modele/hotel.modele";
import {ModeleServiceProvider} from "../../providers/modele-service/modele-service";

/**
 * Generated class for the HotelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hotel',
  templateUrl: 'hotel.html',
})
export class HotelPage {
  private hotel:HotelModele = new HotelModele();
  private message: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public modeleService: ModeleServiceProvider) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad HotelPage');
  }

  onHotel(){
    this.modeleService.addHotel(JSON.stringify(this.hotel)).subscribe(data=>{
      this.message = data;
      this.initialiser();
    },error => {
      this.message = "Probléme de connection !";
    })
  }

  initialiser(){
    this.hotel.adresse = "";
    this.hotel.adulte = 1;
    this.hotel.date_arrivee = "";
    this.hotel.email = "";
    this.hotel.nombre_nuit = 1;
    this.hotel.prenom_nom = "";
    this.hotel.type = "";
    this.hotel.telephone = "";
  }

}
