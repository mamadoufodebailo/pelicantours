import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VolPage } from './vol';

@NgModule({
  declarations: [
    VolPage,
  ],
  imports: [
    IonicPageModule.forChild(VolPage),
  ],
})
export class VolPageModule {}
