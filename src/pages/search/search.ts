import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { CorService, ProductListModel, ProductService } from "@ngcommerce/core";
import { Http } from '@angular/http';
import { ProductDetailPage } from '../product-detail/product-detail';
/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  product = {} as ProductListModel;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public productService: ProductService, 
    public http: Http,
    public loadingCtrl: LoadingController) {
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad SearchPage');
    this.getListProduct();
  }
  getListProduct(){
    let loading = this.loadingCtrl.create();
    loading.present();
     this.productService.getProductList().then((data) => {
      this.product = data;
      loading.dismiss();
      console.log(data);
    },(error) => {
      loading.dismiss();
      console.error(error);
    });
  }
  selectedProduct(item){
    this.navCtrl.push(ProductDetailPage,item);
  }

}
