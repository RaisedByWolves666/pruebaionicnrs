
import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
 
@IonicPage()
@Component({
  selector: 'page-starships',
  templateUrl: 'starships.html',
})
export class StarshipsPage {
  starships: Observable<any>;
 
  constructor(public navCtrl: NavController, public apiProvider: ApiProvider) { 
    this.starships = this.apiProvider.getStarships();
  }
 
  openDetails(starships) {
    this.navCtrl.push('StarshipsDetailPage', {starship: starships});
  }
}
