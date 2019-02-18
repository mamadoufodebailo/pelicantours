import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ModeleServiceProvider} from "../../providers/modele-service/modele-service";
import {VolModele} from "../../modele/vol.modele";

/**
 * Generated class for the VolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vol',
  templateUrl: 'vol.html',
})
export class VolPage {
  private vol: VolModele = new VolModele();
  private message: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public modeleService: ModeleServiceProvider) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad VolPage');
  }

  onVol(){
    this.modeleService.addVol(JSON.stringify(this.vol)).subscribe(data=>{
      this.message = data;
    },error => {
      console.log(error);
    })
  }

  onChange(type) {
    if (type == 'double')
      document.getElementById("retour").style.display = "block";
    else
      document.getElementById("retour").style.display = "none";
  }

}
