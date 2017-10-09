import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FavoritePage } from '../favorite/favorite';
import { CartPage } from '../cart/cart';
import { SearchPage } from '../search/search';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the TabnavPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabnav',
  templateUrl: 'tabnav.html'
})
export class TabnavPage {

  homeRoot = HomePage
  favoriteRoot = FavoritePage
  cartRoot = CartPage
  searchRoot = SearchPage
  profileRoot = ProfilePage


  constructor(public navCtrl: NavController) { }

  countBadgeCart() {
    let cart = JSON.parse(window.localStorage.getItem('gCart'));
    let length = 0;
    if (cart && cart.items) {
      let cartLength = cart.items ? cart.items.length : 0;
      for (let i = 0; i < cartLength; i++) {
        length += cart.items[i].qty;
      }
    }
    return length > 0 ? length.toString() : '';
  }

}
