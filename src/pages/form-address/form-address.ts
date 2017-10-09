import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AddressModel } from "@ngcommerce/core";

/**
 * Generated class for the FormAddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form-address',
  templateUrl: 'form-address.html',
})
export class FormAddressPage {
  address = {} as AddressModel;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormAddressPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

  saveAddress() {
    this.viewCtrl.dismiss(this.address);
  }
}
