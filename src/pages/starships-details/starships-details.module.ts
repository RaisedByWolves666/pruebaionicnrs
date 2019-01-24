import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StarshipsDetailsPage } from './starships-details';

@NgModule({
  declarations: [
    StarshipsDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(StarshipsDetailsPage),
  ],
})
export class StarshipsDetailsPageModule {}
