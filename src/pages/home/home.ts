import { Component } from '@angular/core';
import { IonicPage, App, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HomeService, HomeCategoryModel, ProductItemModel } from "@ngcommerce/core";
import { LoginPage } from '../login/login';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  homeData = {} as HomeCategoryModel;
  lastVisit = [] as Array<ProductItemModel>;
  pages: string;

  constructor(
    public app: App,
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public homeService: HomeService,
  ) {
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad HomePage');
    this.getHomeData();
    this.getLastVisit();
  }

  getHomeData() {
    this.pages = '0';
    let loading = this.loadingCtrl.create();
    loading.present();
    this.homeService.getHome().then((data) => {
      this.homeData = data;
      loading.dismiss();
    }, (error) => {
      console.log(error);
      loading.dismiss();
    });

  }

  getLastVisit() {
    this.lastVisit = this.homeService.getLastVisit();
    console.log(this.lastVisit.length);
  }

  onSelectedPage(index) {
    this.pages = index;
  }
}
