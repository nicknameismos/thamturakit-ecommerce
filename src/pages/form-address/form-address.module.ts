import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormAddressPage } from './form-address';

@NgModule({
  declarations: [
    FormAddressPage,
  ],
  imports: [
    IonicPageModule.forChild(FormAddressPage),
  ],
})
export class FormAddressPageModule {}
