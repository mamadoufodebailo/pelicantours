import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ServiceProvider} from "../../providers/service/service";
import {SlideModele} from "../../modele/slide.modele";
import {Storage} from "@ionic/storage";

/**
 * Generated class for the ServicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-service',
  templateUrl: 'service.html',
})
export class ServicePage {
  service: any ;
  donnees: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public serviceProvider: ServiceProvider,public storage: Storage) {
  }

  ionViewDidLoad() {
    this.serviceProvider.getService("service").subscribe(data=>{
      this.donnees = data;
      let slide = new SlideModele();

      slide.photo = this.donnees.photo;
      slide.titre = this.donnees.contenu;

      this.service = slide;
      this.storage.set("service",this.service);
    },error => {
      this.storage.get("service").then(d=>{

        let slide = new SlideModele();

        slide.photo = d.photo;
        slide.titre = d.titre;

        this.service = slide;
      });
    });
  }

}
