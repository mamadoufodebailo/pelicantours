import { Component } from '@angular/core';
import {LoadingController, NavController} from 'ionic-angular';
import {ContactServiceProvider} from "../../providers/contact-service/contact-service";
import {ModeleServiceProvider} from "../../providers/modele-service/modele-service";
import {ContactModele} from "../../modele/contact.modele";
import {Storage} from "@ionic/storage";
import {InformationModele} from "../../modele/information.modele";
import {Constant} from "../../modele/Constant";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  private information: any;
  private contact: ContactModele= new ContactModele();
  private message: any;
  private donnees: any;
  private logo: any;
  private nom: any;

  constructor(public navCtrl: NavController,public contactService: ContactServiceProvider,
              public modele: ModeleServiceProvider,public loadingCtrl: LoadingController,
              public storage: Storage) {
  }

  onSearch(){
    this.contactService.getContact().subscribe(data=> {
      this.donnees = data;

      let information = new InformationModele();

      information.adresse = this.donnees.contact.adresse;
      information.email = this.donnees.contact.email;
      information.mobile = this.donnees.contact.mobile;

      this.information = information;

      this.storage.set("information",this.information);
    },error=> {
      this.storage.get("information").then(info=> {
        this.donnees = info;

        let information = new InformationModele();

        information.adresse = this.donnees.adresse;
        information.email = this.donnees.email;
        information.mobile = this.donnees.mobile;

        this.information = information;
      });
    });
  }

  ionViewDidLoad(){
    this.logo = Constant.LOGO;
    this.nom = Constant.NOM;

    let loading = this.loadingCtrl.create({
      content: "Chargement des données..."
    });

    loading.present();

    this.onSearch();

    loading.dismiss();
  }

  addContact(){
    this.modele.addContact(JSON.stringify(this.contact)).subscribe(data=> {
      this.message = data;
      this.initialiser();
    },error => {
      this.message = "Probléme de connexion !";
    });
  }

  initialiser(){
    this.contact.email = "";
    this.contact.message = "";
    this.contact.objet = "";
    this.contact.prenom_nom = "";
  }

}
