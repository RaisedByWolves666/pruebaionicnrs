import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-vehicles-details',
  templateUrl: 'vehicles-details.html',
})
export class VehiclesDetailsPage {
  vehicles: any;
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.vehicles = this.navParams.get('vehicles');
  }
}
