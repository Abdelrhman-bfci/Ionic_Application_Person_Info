import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditePersonPage } from './edite-person';

@NgModule({
  declarations: [
    EditePersonPage,
  ],
  imports: [
    IonicPageModule.forChild(EditePersonPage),
  ],
})
export class EditePersonPageModule {}
