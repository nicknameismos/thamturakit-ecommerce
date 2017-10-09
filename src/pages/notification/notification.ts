import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {
  notifications: Array<any> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.notifications = JSON.parse(window.localStorage.getItem('onNotifications'));
  }

}
