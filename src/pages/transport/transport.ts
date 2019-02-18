import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TransportModele} from "../../modele/transport.modele";
import {ModeleServiceProvider} from "../../providers/modele-service/modele-service";

/**
 * Generated class for the TransportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transport',
  templateUrl: 'transport.html',
})
export class TransportPage {
  private transport:TransportModele = new TransportModele();
  private message: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public modeleService: ModeleServiceProvider) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad TransportPage');
  }

  onTransport(){
    this.modeleService.addTransport(JSON.stringify(this.transport)).subscribe(data=> {
      this.message = data;
      this.initialiser();
    },error => {
      this.message = "probléme de connexion !";
    })
  }

  initialiser(){
    this.transport.adresse = "";
    this.transport.date_prise = "";
    this.transport.date_remise = "";
    this.transport.email = "";
    this.transport.prenom_nom = "";
    this.transport.telephone = "";
    this.transport.voiture = "";
  }

}
