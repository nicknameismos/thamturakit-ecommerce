import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { SignupModel } from "@ngcommerce/core";
import { TabnavPage } from '../tabnav/tabnav';
import { UserModel, AuthenService, CartService } from "@ngcommerce/core";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  signup = {} as SignupModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authenService: AuthenService,
    public loading: LoadingController,
    public cartService: CartService
  ) {

    if (this.navParams.data.first_name) {
      this.signup.firstName = this.navParams.data.first_name;
      this.signup.lastName = this.navParams.data.last_name;
      this.signup.email = this.navParams.data.email;
      this.signup.profileImageURL = this.navParams.data.picture.data.url;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  onRegister() {
    let loading = this.loading.create();
    loading.present();
    this.authenService.signUp(this.signup).then((data) => {
      window.localStorage.setItem('jjuser', JSON.stringify(data));
      this.navCtrl.push(TabnavPage);
      this.getCartByUser();
      loading.dismiss();
    }, (error) => {
      loading.dismiss();
      alert(JSON.parse(error._body).message);
    });
  }

  getCartByUser() {
    let user = JSON.parse(window.localStorage.getItem('jjuser'));

    this.cartService.getCartByUser(user._id).then((data) => {
      this.cartService.saveCartStorage(data);
    }, (error) => {

    });
  }

}
