import { Component } from '@angular/core';
import {LoadingController, NavController} from 'ionic-angular';
import {SlideServiceProvider} from "../../providers/slide-service/slide-service";
import {VolPage} from "../vol/vol";
import {TransportPage} from "../transport/transport";
import {HotelPage} from "../hotel/hotel";
import {AssurancePage} from "../assurance/assurance";
import {Storage} from "@ionic/storage";
import {SlideModele} from "../../modele/slide.modele";
import {PresentationPage} from "../presentation/presentation";
import {PelerinagePage} from "../pelerinage/pelerinage";
import {ServicePage} from "../service/service";
import {Constant} from "../../modele/Constant";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private images: any = {slides: []};
  private donnees: any;
  private logo: any;
  private nom: any;

  constructor(public navCtrl: NavController,public slideService : SlideServiceProvider,
              public loadingCtrl: LoadingController,public storage: Storage) {

  }

  onSearch(){
    this.slideService.getSlide().subscribe(data=> {
      this.donnees =  data;

      this.donnees.slides.forEach(d=>{
        let slide = new SlideModele();
        slide.titre= d.description;
        slide.photo = d.photo;

        this.images.slides.push(slide);
      })

      this.storage.set("slides",this.images.slides);
    },error=>{
      this.storage.get("slides").then(slides=>{
        this.donnees = slides;

        this.donnees.forEach(part=>{
          let slide = new SlideModele();

          slide.titre = part.titre;
          slide.photo = part.photo;

          this.images.slides.push(slide);
        })
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

  onReserver(){
    this.navCtrl.push(VolPage);
  }

  onTransport(){
    this.navCtrl.push(TransportPage);
  }

  onHotel(){
    this.navCtrl.push(HotelPage);
  }

  onAssurance(){
    this.navCtrl.push(AssurancePage);
  }

  onPresentation(){
    this.navCtrl.push(PresentationPage);
  }

  onPelerinage(){
    this.navCtrl.push(PelerinagePage);
  }

  onService(){
    this.navCtrl.push(ServicePage);
  }

}
