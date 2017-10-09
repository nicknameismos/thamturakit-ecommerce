webpackJsonp([14],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabnav_tabnav__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngcommerce_core__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, authenService, loading, cartService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authenService = authenService;
        this.loading = loading;
        this.cartService = cartService;
        this.signup = {};
        if (this.navParams.data.first_name) {
            this.signup.firstName = this.navParams.data.first_name;
            this.signup.lastName = this.navParams.data.last_name;
            this.signup.email = this.navParams.data.email;
            this.signup.profileImageURL = this.navParams.data.picture.data.url;
        }
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.onRegister = function () {
        var _this = this;
        var loading = this.loading.create();
        loading.present();
        this.authenService.signUp(this.signup).then(function (data) {
            window.localStorage.setItem('jjuser', JSON.stringify(data));
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabnav_tabnav__["a" /* TabnavPage */]);
            _this.getCartByUser();
            loading.dismiss();
        }, function (error) {
            loading.dismiss();
            alert(JSON.parse(error._body).message);
        });
    };
    RegisterPage.prototype.getCartByUser = function () {
        var _this = this;
        var user = JSON.parse(window.localStorage.getItem('jjuser'));
        this.cartService.getCartByUser(user._id).then(function (data) {
            _this.cartService.saveCartStorage(data);
        }, function (error) {
        });
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"D:\mosthamapp\thamturakit-ecommerce\src\pages\register\register.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Register</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Fistname</ion-label>\n\n      <ion-input type="text" [(ngModel)]="signup.firstName"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Lastname</ion-label>\n\n      <ion-input type="text" [(ngModel)]="signup.lastName"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>E-mail</ion-label>\n\n      <ion-input type="email" [(ngModel)]="signup.email"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Username</ion-label>\n\n      <ion-input type="text" [(ngModel)]="signup.username"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Password</ion-label>\n\n      <ion-input type="password" [(ngModel)]="signup.password"></ion-input>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n  <button ion-button block (click)="onRegister()">Register</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\mosthamapp\thamturakit-ecommerce\src\pages\register\register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__ngcommerce_core__["b" /* AuthenService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__ngcommerce_core__["c" /* CartService */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngcommerce_core__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(app, navCtrl, navParams, loadingCtrl, homeService) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.homeService = homeService;
        this.homeData = {};
        this.lastVisit = [];
    }
    HomePage.prototype.ionViewWillEnter = function () {
        console.log('ionViewDidLoad HomePage');
        this.getHomeData();
        this.getLastVisit();
    };
    HomePage.prototype.getHomeData = function () {
        var _this = this;
        this.pages = '0';
        var loading = this.loadingCtrl.create();
        loading.present();
        this.homeService.getHome().then(function (data) {
            _this.homeData = data;
            loading.dismiss();
        }, function (error) {
            console.log(error);
            loading.dismiss();
        });
    };
    HomePage.prototype.getLastVisit = function () {
        this.lastVisit = this.homeService.getLastVisit();
        console.log(this.lastVisit.length);
    };
    HomePage.prototype.onSelectedPage = function (index) {
        this.pages = index;
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"D:\mosthamapp\thamturakit-ecommerce\src\pages\home\home.html"*/'<!--\n\n  Generated template for the HomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-icon-searchbar></ion-icon-searchbar>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n  <!-- segment -->\n\n  <div no-padding>\n\n    <ion-segment mode="md" [(ngModel)]="pages">\n\n      <ion-segment-button *ngFor="let segment of homeData.categories; let i = index;" [ngClass]="{\'active-page\' : i == pages}"\n\n        (click)="onSelectedPage(i)">\n\n        {{ segment.name }}\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </div>\n\n  <!-- segment display -->\n\n  <div>\n\n    <div *ngFor="let segment of homeData.categories; let i = index;" [hidden]="i != pages">\n\n\n\n      <ion-grid>\n\n\n\n        <ion-row no-padding>\n\n          <ion-col col-12>\n\n            <img src="./assets/image/2.png">\n\n            <ion-row no-padding>\n\n              <ion-col col-12 text-center>\n\n                <span class="icon-green-text"></span>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row *ngIf="segment.popularproducts  && segment.popularproducts.length > 0">\n\n          <ion-col col-12 class="highLight" text-center>\n\n            <h4>Popular Products</h4>\n\n          </ion-col>\n\n          <ion-col col-12 class="grid-product">\n\n            <ion-list-grid [items]="segment.popularproducts"></ion-list-grid>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row *ngIf="segment.bestseller && segment.bestseller.length > 0" id="rowBest">\n\n          <ion-col col-12 class="highLight" text-center>\n\n            <h4>Best Seller</h4>\n\n          </ion-col>\n\n          <ion-col col-12 class="grid-product">\n\n            <ion-list-grid [items]="segment.bestseller"></ion-list-grid>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row *ngIf="segment.popularshops && segment.popularshops.length > 0" id="rowBest">\n\n          <ion-col col-12 class="highLight" text-center>\n\n            <h4>Popular Shops</h4>\n\n          </ion-col>\n\n          <ion-col col-12 class="grid-product">\n\n            <ion-list-grid [items]="segment.popularshops"></ion-list-grid>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row *ngIf="lastVisit && lastVisit.length > 0" id="rowBest">\n\n          <ion-col col-12 class="highLight" text-center>\n\n            <h4>Last Visit</h4>\n\n          </ion-col>\n\n          <ion-col col-12 class="grid-product">\n\n            <ion-list-grid [items]="lastVisit"></ion-list-grid>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n      </ion-grid>\n\n\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\mosthamapp\thamturakit-ecommerce\src\pages\home\home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__ngcommerce_core__["f" /* HomeService */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngcommerce_core__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_detail_product_detail__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the FavoritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FavoritePage = (function () {
    function FavoritePage(navCtrl, navParams, favoriteService, http, productService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.favoriteService = favoriteService;
        this.http = http;
        this.productService = productService;
        this.loadingCtrl = loadingCtrl;
        this.favorite = { items: [] };
    }
    FavoritePage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter FavoritePage');
        this.getListFavorite();
        //this.getListProduct();
    };
    FavoritePage.prototype.getListFavorite = function () {
        var loading = this.loadingCtrl.create();
        loading.present();
        var favorites = this.favoriteService.getFavoriteList();
        console.log(favorites);
        this.favorite = favorites ? favorites : { items: [] };
        loading.dismiss();
    };
    FavoritePage.prototype.getListProduct = function () {
        var _this = this;
        this.productService.getProductList().then(function (data) {
            _this.favorite = data;
            console.log(data);
        }, function (error) {
            console.error(error);
        });
    };
    FavoritePage.prototype.selectedProduct = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__product_detail_product_detail__["a" /* ProductDetailPage */], item);
    };
    return FavoritePage;
}());
FavoritePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-favorite',template:/*ion-inline-start:"D:\mosthamapp\thamturakit-ecommerce\src\pages\favorite\favorite.html"*/'<!--\n\n  Generated template for the FavoritePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>favorite</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list-product [items]="favorite.items" (selectedProduct)="selectedProduct($event)"></ion-list-product>\n\n</ion-content>'/*ion-inline-end:"D:\mosthamapp\thamturakit-ecommerce\src\pages\favorite\favorite.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ngcommerce_core__["e" /* FavoriteService */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2__ngcommerce_core__["y" /* ProductService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], FavoritePage);

//# sourceMappingURL=favorite.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WritereviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the WritereviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WritereviewPage = (function () {
    function WritereviewPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    WritereviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WritereviewPage');
    };
    WritereviewPage.prototype.selectedReview = function (e) {
        this.viewCtrl.dismiss(e);
    };
    return WritereviewPage;
}());
WritereviewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-writereview',template:/*ion-inline-start:"D:\mosthamapp\thamturakit-ecommerce\src\pages\writereview\writereview.html"*/'<!--\n\n  Generated template for the WritereviewPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>writereview</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-form-review (selectedReview)="selectedReview($event)"></ion-form-review>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\mosthamapp\thamturakit-ecommerce\src\pages\writereview\writereview.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
], WritereviewPage);

//# sourceMappingURL=writereview.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngcommerce_core__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__form_address_form_address__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__complete_complete__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CheckoutPage = (function () {
    function CheckoutPage(navCtrl, navParams, modalCtrl, cartService, addressService, paymentService, orderService, app, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.cartService = cartService;
        this.addressService = addressService;
        this.paymentService = paymentService;
        this.orderService = orderService;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.address = {};
        this.payment = {};
        this.shipping = {};
        this.datashipping = {};
        this.datapayment = {};
        this.dataconfirm = {};
        this.steps = [
            {
                value: 1,
                title: "SHIPPING"
            },
            {
                value: 2,
                title: "PAYMENT"
            },
            {
                value: 3,
                title: "CONFIRM"
            }
        ];
        this.currentstep = 1;
        this.getShippingData();
        this.getAddressData();
        this.getPayment();
    }
    CheckoutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CheckoutPage');
    };
    CheckoutPage.prototype.getShippingData = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        var user = JSON.parse(window.localStorage.getItem('jjuser'));
        this.cartService.getCartByUser(user._id).then(function (data) {
            console.log(data);
            _this.shipping = data;
            loading.dismiss();
            // console.log(this.shipping);
        }, function (error) {
            loading.dismiss();
            console.error(error);
        });
    };
    CheckoutPage.prototype.getAddressData = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.addressService.getAddressByUser().then(function (data) {
            _this.address = data;
            loading.dismiss();
        }, function (error) {
            loading.dismiss();
            console.error(error);
        });
    };
    CheckoutPage.prototype.getPayment = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.paymentService.getPaymentList().then(function (data) {
            _this.payment = data[0];
            console.log(_this.payment);
            loading.dismiss();
        }, function (err) {
            loading.dismiss();
            console.error(err);
        });
    };
    CheckoutPage.prototype.completedShippingStep = function (e) {
        this.datashipping = e;
        // alert('completedShippingStep');
        this.currentstep += 1;
    };
    CheckoutPage.prototype.completedPaymentStep = function (e) {
        this.datapayment = e;
        // alert('completedPaymentStep');
        this.currentstep += 1;
    };
    CheckoutPage.prototype.completedConfirmStep = function (e) {
        var _this = this;
        this.dataconfirm = e;
        console.log(this.dataconfirm);
        if (this.dataconfirm) {
            this.orderService.createOrder(this.dataconfirm).then(function (data) {
                // this.navCtrl.push(CompletePage);
                window.localStorage.setItem('order', JSON.stringify(data));
                _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__complete_complete__["a" /* CompletePage */]); // set full page
            }, function (error) {
                console.error(error);
            });
        }
    };
    CheckoutPage.prototype.openFormAddress = function (e) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__form_address_form_address__["a" /* FormAddressPage */]);
        modal.onDidDismiss(function (data) {
            var loading = _this.loadingCtrl.create();
            loading.present();
            _this.addressService.createAddress(data).then(function (resp) {
                loading.dismiss();
                _this.getAddressData();
            }, function (err) {
                loading.dismiss();
            });
            console.log(data);
        });
        modal.present();
    };
    return CheckoutPage;
}());
CheckoutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-checkout',template:/*ion-inline-start:"D:\mosthamapp\thamturakit-ecommerce\src\pages\checkout\checkout.html"*/'<!--\n\n  Generated template for the CheckoutPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>checkout</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-form-wizard [steps]="steps" [(currentstep)]="currentstep">\n\n      <ion-form-wizard-step [step]="1">\n\n          <ion-form-shipping [listaddress]="address" [listshipping]="shipping" (gotoNext)="completedShippingStep($event)" (createAddress)="openFormAddress($event)"></ion-form-shipping>\n\n      </ion-form-wizard-step>\n\n      <ion-form-wizard-step [step]="2">\n\n          <ion-form-payment [paymentgateway]="payment" [datashipping]="datashipping" (gotoNext)="completedPaymentStep($event)"></ion-form-payment>\n\n      </ion-form-wizard-step>\n\n      <ion-form-wizard-step [step]="3">\n\n          <ion-form-confirm [confirmgateway]="datapayment" (gotoNext)="completedConfirmStep($event)"></ion-form-confirm>\n\n      </ion-form-wizard-step>\n\n  </ion-form-wizard>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\mosthamapp\thamturakit-ecommerce\src\pages\checkout\checkout.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2__ngcommerce_core__["c" /* CartService */],
        __WEBPACK_IMPORTED_MODULE_2__ngcommerce_core__["a" /* AddressService */],
        __WEBPACK_IMPORTED_MODULE_2__ngcommerce_core__["x" /* PaymentService */],
        __WEBPACK_IMPORTED_MODULE_2__ngcommerce_core__["w" /* OrderService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], CheckoutPage);

//# sourceMappingURL=checkout.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormAddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FormAddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FormAddressPage = (function () {
    function FormAddressPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.address = {};
    }
    FormAddressPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FormAddressPage');
    };
    FormAddressPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    FormAddressPage.prototype.saveAddress = function () {
        this.viewCtrl.dismiss(this.address);
    };
    return FormAddressPage;
}());
FormAddressPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-form-address',template:/*ion-inline-start:"D:\mosthamapp\thamturakit-ecommerce\src\pages\form-address\form-address.html"*/'<!--\n\n  Generated template for the FormAddressPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n      <ion-navbar>\n\n          <ion-title>{{\'FORM_ADDRESS\'}}</ion-title>\n\n          <ion-buttons end>\n\n              <button ion-button icon-only color="royal" (click)="dismiss()">\n\n              <ion-icon name="ios-close-circle-outline"></ion-icon>\n\n            </button>\n\n          </ion-buttons>\n\n      </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n      <form (ngSubmit)="saveAddress()">\n\n          <ion-item>\n\n              <ion-label floating>First Name</ion-label>\n\n              <ion-input type="text" [(ngModel)]="address.firstname" name="Firstname"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n              <ion-label floating>Last Name</ion-label>\n\n              <ion-input type="text" [(ngModel)]="address.lastname" name="Lastname"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n              <ion-label floating>Address</ion-label>\n\n              <ion-input type="text" [(ngModel)]="address.address" name="Address"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n              <ion-label floating>Subdistrict</ion-label>\n\n              <ion-input type="text" [(ngModel)]="address.subdistrict" name="Subdistrict"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n              <ion-label floating>District</ion-label>\n\n              <ion-input type="text" [(ngModel)]="address.district" name="District"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n              <ion-label floating>Province</ion-label>\n\n              <ion-input type="text" [(ngModel)]="address.province" name="Province"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n              <ion-label floating>Postcode</ion-label>\n\n              <ion-input type="text" [(ngModel)]="address.postcode" name="Postcode"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n              <ion-label floating>Tel</ion-label>\n\n              <ion-input type="text" [(ngModel)]="address.tel" name="Tel"></ion-input>\n\n          </ion-item>\n\n          <button ion-button round full type="submit">{{\'SAVE\'}}</button>\n\n      </form>\n\n  </ion-content>\n\n'/*ion-inline-end:"D:\mosthamapp\thamturakit-ecommerce\src\pages\form-address\form-address.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
], FormAddressPage);

//# sourceMappingURL=form-address.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompletePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabnav_tabnav__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CompletePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CompletePage = (function () {
    function CompletePage(navCtrl, navParams, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.completeOrder = JSON.parse(window.localStorage.getItem('order'));
        console.log(this.completeOrder);
    }
    CompletePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CompletePage');
    };
    CompletePage.prototype.goHome = function () {
        localStorage.removeItem('gCart');
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__tabnav_tabnav__["a" /* TabnavPage */]); // set full page
    };
    return CompletePage;
}());
CompletePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-complete',template:/*ion-inline-start:"D:\mosthamapp\thamturakit-ecommerce\src\pages\complete\complete.html"*/'<!--\n\n  Generated template for the CompletePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Complete Order</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-card>\n\n\n\n    <ion-card-header>\n\n        {{\'ยินดีด้วย\'}}\n\n    </ion-card-header>\n\n\n\n    <ion-card-content>\n\n      <p>{{\'ขอบคุณ คุณ\'}} <b>{{ completeOrder.shipping.firstname}} {{ completeOrder.shipping.lastname}}</b></p>\n\n      <p>{{\'ทางเราขอขอบคุณที่ท่านให้ความไว้วางใจในการเลือกซื้อสินค้ากับเรา\'}}</p>\n\n      <p>{{\'หมายเลขสั่งซื้อสินค้าของท่านคือ\'}} <b>{{ completeOrder._id}}</b></p>\n\n      <p>{{\'ขอบคุณที่ท่านให้ความสนใจและเลือกใช้บริการจากเรา\'}}</p>\n\n\n\n    </ion-card-content>\n\n\n\n  </ion-card>\n\n  <div padding>\n\n    <button ion-button block color="danger" (click)="goHome()">{{"หน้าหลัก"}}</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\mosthamapp\thamturakit-ecommerce\src\pages\complete\complete.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
], CompletePage);

//# sourceMappingURL=complete.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngcommerce_core__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_detail_product_detail__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchPage = (function () {
    function SearchPage(navCtrl, navParams, productService, http, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productService = productService;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.product = {};
    }
    SearchPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewDidLoad SearchPage');
        this.getListProduct();
    };
    SearchPage.prototype.getListProduct = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.productService.getProductList().then(function (data) {
            _this.product = data;
            loading.dismiss();
            console.log(data);
        }, function (error) {
            loading.dismiss();
            console.error(error);
        });
    };
    SearchPage.prototype.selectedProduct = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__product_detail_product_detail__["a" /* ProductDetailPage */], item);
    };
    return SearchPage;
}());
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search',template:/*ion-inline-start:"D:\mosthamapp\thamturakit-ecommerce\src\pages\search\search.html"*/'<!--\n\n  Generated template for the SearchPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>search</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content >\n\n  <ion-list-product [items]="product.items" (selectedProduct)="selectedProduct($event)"></ion-list-product>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\mosthamapp\thamturakit-ecommerce\src\pages\search\search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ngcommerce_core__["y" /* ProductService */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngcommerce_core__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_notification__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, authenService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authenService = authenService;
        this.userProfile = {};
        this.userProfile = JSON.parse(window.localStorage.getItem('jjuser'));
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.logout = function (e) {
        window.localStorage.removeItem('jjuser');
        this.userProfile = JSON.parse(window.localStorage.getItem('jjuser'));
    };
    ProfilePage.prototype.notification = function (e) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__notification_notification__["a" /* NotificationPage */]);
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"D:\mosthamapp\thamturakit-ecommerce\src\pages\profile\profile.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>profile</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n  <ion-form-profile [item]="userProfile" (itemClicked)="logout($event)" (notificationClicked)="notification($event)"></ion-form-profile>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\mosthamapp\thamturakit-ecommerce\src\pages\profile\profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ngcommerce_core__["b" /* AuthenService */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationPage = (function () {
    function NotificationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.notifications = [];
    }
    NotificationPage.prototype.ionViewWillEnter = function () {
        this.notifications = JSON.parse(window.localStorage.getItem('onNotifications'));
    };
    return NotificationPage;
}());
NotificationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-notification',template:/*ion-inline-start:"D:\mosthamapp\thamturakit-ecommerce\src\pages\notification\notification.html"*/'<!--\n\n  Generated template for the NotificationPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>notification</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n  <ion-list>\n\n    <ion-item *ngFor="let noti of notifications">\n\n      <h3>{{ noti.message }}</h3>\n\n      <p>{{ noti.date | date: \'dd MMMM yyyy HH:mm:ss a\'}}</p>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\mosthamapp\thamturakit-ecommerce\src\pages\notification\notification.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], NotificationPage);

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngcommerce_core__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabnav_tabnav__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(186);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, authenService, viewCtrl, loading, fb, cartService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authenService = authenService;
        this.viewCtrl = viewCtrl;
        this.loading = loading;
        this.fb = fb;
        this.cartService = cartService;
        this.user = {};
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function (user) {
        var _this = this;
        var loading = this.loading.create();
        loading.present();
        this.authenService.signIn(user).then(function (data) {
            _this.user = data; ///////////////////// บรรทัดนี้ตอนแรกยังไม่มี มาเขียนเพิ่มตอนที่จะไปโชว์ที่หน้าจอ ตามขั้นตอนด้านล่าง
            console.log(data);
            window.localStorage.setItem('jjuser', JSON.stringify(data));
            _this.getCartByUser();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabnav_tabnav__["a" /* TabnavPage */]);
            loading.dismiss();
        }, function (error) {
            console.error(error);
            loading.dismiss();
        });
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.loginFb = function () {
        var _this = this;
        this.fb.login(['public_profile', 'user_friends', 'email'])
            .then(function (res) {
            console.log('Logged into Facebook!', res);
            // this.facebookRes = JSON.stringify(res);
            _this.fb.api('me?fields=id,last_name,first_name,picture,email', null).then(function (user) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */], user);
            })
                .catch(function (e) {
                alert(JSON.stringify(e));
            });
        })
            .catch(function (e) { return alert('Error logging into Facebook ' + JSON.stringify(e)); });
        this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
    };
    LoginPage.prototype.getCartByUser = function () {
        var _this = this;
        var loading = this.loading.create();
        loading.present();
        var user = JSON.parse(window.localStorage.getItem('jjuser'));
        this.cartService.getCartByUser(user._id).then(function (data) {
            _this.cartService.saveCartStorage(data);
            loading.dismiss();
        }, function (error) {
            loading.dismiss();
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"D:\mosthamapp\thamturakit-ecommerce\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Username</ion-label>\n\n      <ion-input type="text" [(ngModel)]="user.username"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Password</ion-label>\n\n      <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n  <button ion-button block (click)="login(user)">Login</button>\n\n  <button ion-button block (click)="register()">Register</button>\n\n  <button ion-button block (click)="loginFb()">Login with Facebook</button>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\mosthamapp\thamturakit-ecommerce\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ngcommerce_core__["b" /* AuthenService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */],
        __WEBPACK_IMPORTED_MODULE_2__ngcommerce_core__["c" /* CartService */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 128:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 128;

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cart/cart.module": [
		338,
		13
	],
	"../pages/checkout/checkout.module": [
		337,
		12
	],
	"../pages/complete/complete.module": [
		336,
		11
	],
	"../pages/favorite/favorite.module": [
		340,
		10
	],
	"../pages/form-address/form-address.module": [
		335,
		9
	],
	"../pages/home/home.module": [
		333,
		8
	],
	"../pages/login/login.module": [
		332,
		7
	],
	"../pages/notification/notification.module": [
		342,
		6
	],
	"../pages/product-detail/product-detail.module": [
		339,
		5
	],
	"../pages/profile/profile.module": [
		343,
		4
	],
	"../pages/register/register.module": [
		331,
		3
	],
	"../pages/search/search.module": [
		341,
		2
	],
	"../pages/tabnav/tabnav.module": [
		344,
		1
	],
	"../pages/writereview/writereview.module": [
		334,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 170;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(249);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngcommerce_core__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_facebook__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabnav_tabnav__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_favorite_favorite__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_cart_cart__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_search_search__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_login__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ionic2_rating__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_product_detail_product_detail__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_register_register__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_checkout_checkout__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_form_address_form_address__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_complete_complete__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_writereview_writereview__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_notification_notification__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_favorite_favorite__["a" /* FavoritePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_cart_cart__["a" /* CartPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_tabnav_tabnav__["a" /* TabnavPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_checkout_checkout__["a" /* CheckoutPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_form_address_form_address__["a" /* FormAddressPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_complete_complete__["a" /* CompletePage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_writereview_writereview__["a" /* WritereviewPage */],
            __WEBPACK_IMPORTED_MODULE_5__ngcommerce_core__["q" /* IonFormWizardComponent */],
            __WEBPACK_IMPORTED_MODULE_5__ngcommerce_core__["r" /* IonFormWizardStepComponent */],
            __WEBPACK_IMPORTED_MODULE_5__ngcommerce_core__["p" /* IonFormShippingComponent */],
            __WEBPACK_IMPORTED_MODULE_5__ngcommerce_core__["l" /* IonFormPaymentComponent */],
            __WEBPACK_IMPORTED_MODULE_5__ngcommerce_core__["h" /* IonFormConfirmComponent */],
            __WEBPACK_IMPORTED_MODULE_5__ngcommerce_core__["m" /* IonFormPaymentOptionComponent */],
            __WEBPACK_IMPORTED_MODULE_5__ngcommerce_core__["j" /* IonFormCreditComponent */],
            __WEBPACK_IMPORTED_MODULE_5__ngcommerce_core__["k" /* IonFormDeliveryComponent */],
            __WEBPACK_IMPORTED_MODULE_5__ngcommerce_core__["i" /* IonFormCounterserviceComponent */],
            __WEBPACK_IMPORTED_MODULE_5__ngcommerce_core__["s" /* IonIconSearchbarComponent */],
            __WEBPACK_IMPORTED_MODULE_5__ngcommerce_core__["u" /* IonListGridComponent */],
            __WEBPACK_IMPORTED_MODULE_5__ngcommerce_core__["n" /* IonFormProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_5__ngcommerce_core__["t" /* IonListCartComponent */],
            __WEBPACK_IMPORTED_MODULE_5__ngcommerce_core__["v" /* IonListProductComponent */],
            __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_product_detail_product_detail__["a" /* ProductDetailPage */],
            __WEBPACK_IMPORTED_MODULE_5__ngcommerce_core__["g" /* IonDetailProductComponent */],
            __WEBPACK_IMPORTED_MODULE_5__ngcommerce_core__["o" /* IonFormReviewComponent */],
            __WEBPACK_IMPORTED_MODULE_24__pages_notification_notification__["a" /* NotificationPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_17_ionic2_rating__["a" /* Ionic2RatingModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/writereview/writereview.module#WritereviewPageModule', name: 'WritereviewPage', segment: 'writereview', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/form-address/form-address.module#FormAddressPageModule', name: 'FormAddressPage', segment: 'form-address', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/complete/complete.module#CompletePageModule', name: 'CompletePage', segment: 'complete', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/checkout/checkout.module#CheckoutPageModule', name: 'CheckoutPage', segment: 'checkout', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/product-detail/product-detail.module#ProductDetailPageModule', name: 'ProductDetailPage', segment: 'product-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/favorite/favorite.module#FavoritePageModule', name: 'FavoritePage', segment: 'favorite', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabnav/tabnav.module#TabnavPageModule', name: 'TabnavPage', segment: 'tabnav', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_5__ngcommerce_core__["d" /* EcommerceCoreModule */].forRoot('https://thamturakit.herokuapp.com/api/')
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_favorite_favorite__["a" /* FavoritePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_cart_cart__["a" /* CartPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_tabnav_tabnav__["a" /* TabnavPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_product_detail_product_detail__["a" /* ProductDetailPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_checkout_checkout__["a" /* CheckoutPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_form_address_form_address__["a" /* FormAddressPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_complete_complete__["a" /* CompletePage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_writereview_writereview__["a" /* WritereviewPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_notification_notification__["a" /* NotificationPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_facebook__["a" /* Facebook */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabnav_tabnav__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngcommerce_core__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, oneSignal, cartService) {
        var _this = this;
        this.oneSignal = oneSignal;
        this.cartService = cartService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabnav_tabnav__["a" /* TabnavPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.onSignalSetup();
        });
        this.getUser();
    }
    MyApp.prototype.getUser = function () {
        var user = window.localStorage.getItem('jjuser');
        if (!user) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        }
        else {
            this.getCartByUser();
        }
    };
    MyApp.prototype.getCartByUser = function () {
        var _this = this;
        var user = JSON.parse(window.localStorage.getItem('jjuser'));
        this.cartService.getCartByUser(user._id).then(function (data) {
            _this.cartService.saveCartStorage(data);
        }, function (error) {
        });
    };
    MyApp.prototype.onSignalSetup = function () {
        this.oneSignal.startInit('d5d9533c-3ac8-42e6-bc16-a5984bef02ff', '687344947918');
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
        this.oneSignal.handleNotificationReceived().subscribe(function (onReceived) {
            // do something when notification is received
            var notifications = window.localStorage.getItem('onNotifications') ? JSON.parse(window.localStorage.getItem('onNotifications')) : [];
            notifications.unshift({
                date: new Date(),
                message: onReceived.payload.body
            });
            window.localStorage.setItem('onNotifications', JSON.stringify(notifications));
        });
        this.oneSignal.handleNotificationOpened().subscribe(function () {
            // do something when a notification is opened
        });
        this.oneSignal.endInit();
    };
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\mosthamapp\thamturakit-ecommerce\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\mosthamapp\thamturakit-ecommerce\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__["a" /* OneSignal */],
        __WEBPACK_IMPORTED_MODULE_7__ngcommerce_core__["c" /* CartService */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabnavPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__favorite_favorite__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the TabnavPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabnavPage = (function () {
    function TabnavPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.homeRoot = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.favoriteRoot = __WEBPACK_IMPORTED_MODULE_3__favorite_favorite__["a" /* FavoritePage */];
        this.cartRoot = __WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */];
        this.searchRoot = __WEBPACK_IMPORTED_MODULE_5__search_search__["a" /* SearchPage */];
        this.profileRoot = __WEBPACK_IMPORTED_MODULE_6__profile_profile__["a" /* ProfilePage */];
    }
    TabnavPage.prototype.countBadgeCart = function () {
        var cart = JSON.parse(window.localStorage.getItem('gCart'));
        var length = 0;
        if (cart && cart.items) {
            var cartLength = cart.items ? cart.items.length : 0;
            for (var i = 0; i < cartLength; i++) {
                length += cart.items[i].qty;
            }
        }
        return length > 0 ? length.toString() : '';
    };
    return TabnavPage;
}());
TabnavPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tabnav',template:/*ion-inline-start:"D:\mosthamapp\thamturakit-ecommerce\src\pages\tabnav\tabnav.html"*/'<ion-tabs>\n\n    <ion-tab [root]="homeRoot" tabTitle="Home" tabIcon="home"></ion-tab>\n\n    <ion-tab [root]="favoriteRoot" tabTitle="Favorite" tabIcon="heart"></ion-tab>\n\n    <ion-tab [root]="cartRoot" tabTitle="Cart" tabIcon="cart" tabBadge="{{countBadgeCart()}}" tabBadgeStyle="danger"></ion-tab>\n\n    <ion-tab [root]="searchRoot" tabTitle="Search" tabIcon="search"></ion-tab>\n\n    <ion-tab [root]="profileRoot" tabTitle="Profile" tabIcon="contact"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"D:\mosthamapp\thamturakit-ecommerce\src\pages\tabnav\tabnav.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], TabnavPage);

//# sourceMappingURL=tabnav.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngcommerce_core__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__writereview_writereview__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProductDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductDetailPage = (function () {
    function ProductDetailPage(navCtrl, navParams, productService, favoriteService, modalCtrl, cartService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productService = productService;
        this.favoriteService = favoriteService;
        this.modalCtrl = modalCtrl;
        this.cartService = cartService;
        this.loadingCtrl = loadingCtrl;
        this.product = {};
        // this.product = this.navParams.data;
        this.init();
    }
    ProductDetailPage.prototype.init = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.productService.getProductByID(this.navParams.data._id)
            .then(function (data) {
            _this.product = data;
            console.log(_this.product);
            loading.dismiss();
        }, function (err) {
            loading.dismiss();
        });
    };
    ProductDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductDetailPage');
    };
    ProductDetailPage.prototype.selectedFavorite = function (product) {
        product.image = product.images[0];
        this.favoriteService.addFavorite(product);
    };
    ProductDetailPage.prototype.reviewModal = function (e) {
        var _this = this;
        var reviewModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__writereview_writereview__["a" /* WritereviewPage */]);
        reviewModal.onDidDismiss(function (data) {
            if (data && data.topic !== '' && data.comment !== '' && data.rate !== '') {
                var loading_1 = _this.loadingCtrl.create();
                loading_1.present();
                _this.productService.reviewProduct(_this.product._id, data)
                    .then(function (resp) {
                    loading_1.dismiss();
                    _this.init();
                }, function (err) {
                    loading_1.dismiss();
                    console.error(err);
                });
            }
        });
        reviewModal.present();
    };
    ProductDetailPage.prototype.addToCart = function (product) {
        var loading = this.loadingCtrl.create();
        loading.present();
        this.cartService.addToCart(product);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */]);
        loading.dismiss();
    };
    return ProductDetailPage;
}());
ProductDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-product-detail',template:/*ion-inline-start:"D:\mosthamapp\thamturakit-ecommerce\src\pages\product-detail\product-detail.html"*/'<!--\n\n  Generated template for the ProductDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>productDetail</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-detail-product *ngIf="product && product.promotionprice && product.promotionprice !== undefind" [item]="product" (selectedFavorite)="selectedFavorite($event)" (review)="reviewModal($event)" [isReview]="true"></ion-detail-product>\n\n</ion-content>\n\n<ion-footer>\n\n  <button ion-button block color="danger" (click)="addToCart(product)">Add Cart</button>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\mosthamapp\thamturakit-ecommerce\src\pages\product-detail\product-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ngcommerce_core__["y" /* ProductService */],
        __WEBPACK_IMPORTED_MODULE_2__ngcommerce_core__["e" /* FavoriteService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2__ngcommerce_core__["c" /* CartService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], ProductDetailPage);

//# sourceMappingURL=product-detail.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngcommerce_core__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkout_checkout__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CartPage = (function () {
    function CartPage(navCtrl, navParams, cartService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cartService = cartService;
        this.loadingCtrl = loadingCtrl;
        this.cart = {};
    }
    CartPage.prototype.ionViewWillEnter = function () {
        var loading = this.loadingCtrl.create();
        loading.present();
        var cartStorage = this.cartService.getCartStorage();
        if (cartStorage) {
            if (cartStorage.items && cartStorage.items.length > 0) {
                this.cart = cartStorage;
                this.onCalculate();
            }
        }
        else {
            this.cart.items = [];
        }
        loading.dismiss();
    };
    CartPage.prototype.ionViewWillLeave = function () {
        this.cart = this.cartService.getCartStorage();
        var user = JSON.parse(window.localStorage.getItem('jjuser'));
        console.log(this.cart);
        if (user) {
            this.onCalculate();
            if (this.cart && this.cart._id) {
                this.updateCart(this.cart);
            }
            else {
                this.createCart(this.cart);
            }
        }
    };
    CartPage.prototype.createCart = function (cart) {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.cartService.createCart(cart).then(function (data) {
            console.log('create success.');
            _this.cartService.saveCartStorage(data);
            loading.dismiss();
        }, function (error) {
            loading.dismiss();
            alert(JSON.parse(error._body).message);
        });
    };
    CartPage.prototype.updateCart = function (cart) {
        var _this = this;
        this.cartService.updateCart(cart).then(function (data) {
            console.log('update success.');
            _this.cartService.saveCartStorage(data);
        }, function (error) {
            alert(JSON.parse(error._body).message);
        });
    };
    CartPage.prototype.returnItems = function (event) {
        this.onCalculate();
        this.cartService.saveCartStorage(this.cart);
    };
    CartPage.prototype.onCalculate = function () {
        this.cart = this.cartService.onCalculate(this.cart);
    };
    CartPage.prototype.gotocheckout = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__checkout_checkout__["a" /* CheckoutPage */]);
    };
    return CartPage;
}());
CartPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cart',template:/*ion-inline-start:"D:\mosthamapp\thamturakit-ecommerce\src\pages\cart\cart.html"*/'<!--\n\n  Generated template for the CartPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>cart</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list-cart *ngIf="cart && cart.items" [items]="cart.items" (returnItems)="returnItems($event)"></ion-list-cart>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <div *ngIf="cart && cart.items && cart.items.length > 0">\n\n      <ion-row class="categories-title">\n\n        <ion-col col-7>\n\n          <p class="color-black-custom font-bold">ราคารวมโดยประมาณ</p>\n\n          <p class="color-black-custom font-bold">ส่วนลดโดยประมาณ</p>\n\n          <p class="color-black-custom font-bold">รวมสุทธิโดยประมาณ</p>\n\n        </ion-col>\n\n        <ion-col col-5 text-right>\n\n          <p class="color-black-custom font-bold">{{cart.amount}}</p>\n\n          <p class="color-black-custom font-bold">{{cart.discount}}</p>\n\n          <p class="color-black-custom font-bold">{{cart.totalamount}}</p>\n\n        </ion-col>\n\n      </ion-row>\n\n      <button class="button-md-2" id="btnCart" ion-button full color="danger" (click)="gotocheckout()">ดำเนินการต่อ</button>\n\n    </div>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\mosthamapp\thamturakit-ecommerce\src\pages\cart\cart.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ngcommerce_core__["c" /* CartService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], CartPage);

//# sourceMappingURL=cart.js.map

/***/ })

},[230]);
//# sourceMappingURL=main.js.map