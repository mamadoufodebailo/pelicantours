import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AssuranceModele} from "../../modele/assurance.modele";
import {ModeleServiceProvider} from "../../providers/modele-service/modele-service";

/**
 * Generated class for the AssurancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-assurance',
  templateUrl: 'assurance.html',
})
export class AssurancePage {
  private assurance: AssuranceModele = new AssuranceModele();
  private message: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public modeleService: ModeleServiceProvider) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad AssurancePage');
  }

  addAssurance(){
    this.modeleService.addAssurance(this.assurance).subscribe(data=> {
      this.message = data;
      this.initialiser();
    },error=> {
      this.message = "Probléme de connexion !";
    });
  }

  initialiser(){
    this.assurance.adresse = "";
    this.assurance.email = "";
    this.assurance.prenom_nom = "";
    this.assurance.telephone = "";
    this.assurance.type_assurance = "";
  }

}
