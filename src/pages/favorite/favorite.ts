import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { CorService, ProductListModel, ProductService, FavoriteListModel, FavoriteService } from "@ngcommerce/core";
import { Http } from '@angular/http';
import { ProductDetailPage } from '../product-detail/product-detail';
/**
 * Generated class for the FavoritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {
  favorite : any = {items:[]};
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public favoriteService: FavoriteService, 
    public http: Http, 
    public productService: ProductService,
    public loadingCtrl: LoadingController) {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter FavoritePage');
    this.getListFavorite();
    //this.getListProduct();
  }
  getListFavorite() {
    let loading = this.loadingCtrl.create();
    loading.present();
    let favorites = this.favoriteService.getFavoriteList();
    console.log(favorites);
    this.favorite = favorites ? favorites : {items:[]};
    loading.dismiss();
  }
   getListProduct() {
    this.productService.getProductList().then((data) => {
      this.favorite = data;
      console.log(data);
    }, (error) => {
      console.error(error);
    });
  }

  selectedProduct(item){
    this.navCtrl.push(ProductDetailPage,item);
  }

}
