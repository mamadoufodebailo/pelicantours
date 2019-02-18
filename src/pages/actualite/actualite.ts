import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {ActualiteServiceProvider} from "../../providers/actualite-service/actualite-service";
import {ActualiteDetailPage} from "../actualite-detail/actualite-detail";
import {Storage} from "@ionic/storage";
import {ActualiteModele} from "../../modele/actualite.modele";
import {Constant} from "../../modele/Constant";

/**
 * Generated class for the ActualitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-actualite',
  templateUrl: 'actualite.html',
})
export class ActualitePage {
  private actus :any = {actualites: []};
  private page: number = 1;
  private nombreElement:number = 10;
  private donnees : any;
  private totalPages: number;
  private nom: any;
  private logo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController,
              public actuService: ActualiteServiceProvider,public storage: Storage) {
  }

  onSearch(){
    this.actuService.getActualite(this.page,this.nombreElement).subscribe(data=> {
      this.donnees = data;

      this.totalPages = Math.ceil(this.donnees.nombre / this.nombreElement);

      this.donnees.actualites.forEach(d=> {
        let actualite = new ActualiteModele();

        actualite.titre = d.titre;
        actualite.description = d.description;
        actualite.contenu = d.contenu;

        this.actus.actualites.push(actualite);
      });

      this.storage.set("actualites",this.actus.informations);
    },error=> {
      this.storage.get("actualites").then(actualites=> {
        this.donnees = actualites;

        this.donnees.forEach(actu=> {
          let actualite = new ActualiteModele();

          actualite.titre = actu.titre;
          actualite.description = actu.description;
          actualite.contenu = actu.contenu;

          this.actus.informations.push(actualite);
        });
      });
    });
  }

  ionViewDidLoad() {
    this.logo = Constant.LOGO;
    this.nom = Constant.NOM;

    let loading = this.loadingCtrl.create({
      content: "Chargement des données..."
    });

    loading.present();

    this.onSearch();

    loading.dismiss();
  }

  doInfinite(event){
    if (this.page < this.totalPages){
      ++this.page;
      this.onSearch();
      event.complete();
    }
  }

  onDetail(actu){
    this.navCtrl.push(ActualiteDetailPage,{actualite: actu});
  }

}
