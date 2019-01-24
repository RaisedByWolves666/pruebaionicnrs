import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
 
@IonicPage()
@Component({
  selector: 'page-vehicles',
  templateUrl: 'vehicles.html',
})
export class VehiclesPage {
  vehicles: Observable<any>;
 
  constructor(public navCtrl: NavController, public apiProvider: ApiProvider) { 
    this.vehicles = this.apiProvider.getVehicles();
  }
 
  openDetails(vehicles) {
    this.navCtrl.push('VehiclesDetailPage', {vehicles: vehicles});
  }
}
