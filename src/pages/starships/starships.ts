import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StarshipsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-starships',
  templateUrl: 'starships.html',
})
export class StarshipsPage {

  constructor(public navCtrl: NavController, public apiProvider: ApiProvider) { 
    this.starships = this.apiProvider.getStarships();
  }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad StarshipsPage');
  }

}
