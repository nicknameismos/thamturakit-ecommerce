import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, App } from 'ionic-angular';
import { CorService, UserModel, AuthenService } from "@ngcommerce/core";
import { NotificationPage } from '../notification/notification';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  userProfile = {} as UserModel;
  constructor(public navCtrl: NavController, public navParams: NavParams, public authenService: AuthenService, public app: App) {
    this.userProfile = JSON.parse(window.localStorage.getItem('jjuser'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  logout(e) {
    window.localStorage.removeItem('jjuser');
    this.userProfile = JSON.parse(window.localStorage.getItem('jjuser'));
  }

  notification(e){
    this.navCtrl.push(NotificationPage);
  }

  loginModal(e) {
    this.app.getRootNav().setRoot(LoginPage);
  }

}
