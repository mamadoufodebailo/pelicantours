import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssurancePage } from './assurance';

@NgModule({
  declarations: [
    AssurancePage,
  ],
  imports: [
    IonicPageModule.forChild(AssurancePage),
  ],
})
export class AssurancePageModule {}
