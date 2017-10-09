import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { TabnavPage } from './../tabnav/tabnav';

/**
 * Generated class for the CompletePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-complete',
  templateUrl: 'complete.html',
})
export class CompletePage {
  completeOrder: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
    this.completeOrder = JSON.parse(window.localStorage.getItem('order'));
    console.log(this.completeOrder);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompletePage');
  }
  goHome() {
    localStorage.removeItem('gCart');
    this.app.getRootNav().setRoot(TabnavPage); // set full page
  }

}
