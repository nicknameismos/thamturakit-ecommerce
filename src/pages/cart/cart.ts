import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { CartModel, CartService } from "@ngcommerce/core";
import { CheckoutPage } from './../checkout/checkout';


/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  cart = {} as CartModel;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public cartService: CartService,
    public loadingCtrl: LoadingController
  ) {

  }

  ionViewWillEnter() {
    let loading = this.loadingCtrl.create();
    loading.present();
    let cartStorage = this.cartService.getCartStorage();
    if (cartStorage) {
      if (cartStorage.items && cartStorage.items.length > 0) {
        this.cart = cartStorage;
        this.onCalculate();
      }
    } else {
      this.cart.items = [];
    }
    loading.dismiss();
  }

  ionViewWillLeave() {
    this.cart = this.cartService.getCartStorage();
    let user = JSON.parse(window.localStorage.getItem('jjuser'));

    console.log(this.cart);
    if (user) {
      this.onCalculate();
      if (this.cart && this.cart._id) {
        this.updateCart(this.cart);
      } else {
        this.createCart(this.cart);
      }
    }
  }

  createCart(cart) {
    let loading = this.loadingCtrl.create();
    loading.present();
    this.cartService.createCart(cart).then((data) => {
      console.log('create success.');
      this.cartService.saveCartStorage(data);
      loading.dismiss();
    }, (error) => {
      loading.dismiss();
      alert(JSON.parse(error._body).message);
    });

  }

  updateCart(cart) {
    this.cartService.updateCart(cart).then((data) => {
      console.log('update success.');
      this.cartService.saveCartStorage(data);
    }, (error) => {
      alert(JSON.parse(error._body).message);
    });
  }

  returnItems(event) {
    this.onCalculate();
    this.cartService.saveCartStorage(this.cart);
  }

  onCalculate() {
    this.cart = this.cartService.onCalculate(this.cart);
  }
  gotocheckout() {
    this.navCtrl.push(CheckoutPage)
  }

}
