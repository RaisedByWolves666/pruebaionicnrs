import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VehiclesDetailsPage } from './vehicles-details';

@NgModule({
  declarations: [
    VehiclesDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(VehiclesDetailsPage),
  ],
})
export class VehiclesDetailsPageModule {}
