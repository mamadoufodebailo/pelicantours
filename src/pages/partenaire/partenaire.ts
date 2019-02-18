import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {PartenaireServiceProvider} from "../../providers/partenaire-service/partenaire-service";
import {SlideModele} from "../../modele/slide.modele";
import {Storage} from "@ionic/storage";
import {Constant} from "../../modele/Constant";

/**
 * Generated class for the PartenairePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-partenaire',
  templateUrl: 'partenaire.html',
})
export class PartenairePage {
  private donnees: any;
  private partenaire: any = {partenaires : []};
  private logo: any;
  private nom: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController,
              public partenaireService: PartenaireServiceProvider,public storage: Storage) {
  }

  ionViewDidLoad() {
    this.logo = Constant.LOGO;
    this.nom = Constant.NOM;

    let loading = this.loadingCtrl.create({
      content: 'Veuillez patienter...'
    });

    loading.present();

    this.onSearch();

    loading.dismiss();
  }

  onSearch(){
    this.partenaireService.getPartenaire().subscribe(data=> {
      this.donnees =  data;

      this.donnees.partenaires.forEach(d=>{
        let slide = new SlideModele();
        slide.photo = d.photo;

        this.partenaire.partenaires.push(slide);
      })

      this.storage.set("partenaires",this.partenaire.partenaires);
    },error=>{
      this.storage.get("partenaires").then(partenaires=>{
        this.donnees = partenaires;

        this.donnees.forEach(partenaire=>{
          let slide = new SlideModele();

          slide.photo = partenaire.photo;

          this.partenaire.partenaires.push(slide);
        })
      });
    });
  }

}
