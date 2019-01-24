import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-starships-details',
  templateUrl: 'film-details.html',
})
export class StarshipsDetailsPage {
  starships: any;
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.starships = this.navParams.get('starships');
  }
}

