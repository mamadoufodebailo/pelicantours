import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ActualiteDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-actualite-detail',
  templateUrl: 'actualite-detail.html',
})
export class ActualiteDetailPage {
  private actualite: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.actualite = this.navParams.data.actualite;
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ActualiteDetailPage');
  }

}
