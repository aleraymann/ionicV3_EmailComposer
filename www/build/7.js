webpackJsonp([7],{

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentSlipPageModule", function() { return PaymentSlipPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_slip__ = __webpack_require__(750);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaymentSlipPageModule = /** @class */ (function () {
    function PaymentSlipPageModule() {
    }
    PaymentSlipPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__payment_slip__["a" /* PaymentSlipPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__payment_slip__["a" /* PaymentSlipPage */]),
            ],
        })
    ], PaymentSlipPageModule);
    return PaymentSlipPageModule;
}());

//# sourceMappingURL=payment-slip.module.js.map

/***/ }),

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentSlipPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(49);
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
 * Generated class for the PaymentSlipPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentSlipPage = /** @class */ (function () {
    function PaymentSlipPage(navCtrl, navParams, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
    }
    PaymentSlipPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentSlipPage');
    };
    PaymentSlipPage.prototype.presentActionSheet = function () {
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Compartilhar',
            buttons: [
                {
                    text: 'Email',
                    role: 'email',
                    handler: function () {
                        console.log('Email clicado');
                    }
                }, {
                    text: 'Whatsapp',
                    role: 'whatsapp',
                    handler: function () {
                        console.log('whatsapp clicado');
                    }
                }, {
                    text: 'Cancelar',
                    role: 'cancelar',
                    handler: function () {
                        console.log('Cancelar clicado');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    PaymentSlipPage.prototype.goHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    PaymentSlipPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-payment-slip',template:/*ion-inline-start:"/home/aleraymann/Documentos/ionic-workspace/Agenda-emailComposer/src/pages/payment-slip/payment-slip.html"*/'<!--\n  Generated template for the PaymentSlipPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Boleto Bancário</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <img src="assets/imgs/boleto.png" />\n  </ion-item>\n  <hr>\n  <button ion-button block>Imprimir Pdf</button>\n  <button ion-button block (click)="presentActionSheet()">Compartilhar em Pdf</button>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n\n      </ion-col>\n      <ion-col>\n        <div>\n          <button ion-button block outline (click)="goHome()">\n            Início\n          </button>\n        </div>\n      </ion-col>\n      <ion-col>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/home/aleraymann/Documentos/ionic-workspace/Agenda-emailComposer/src/pages/payment-slip/payment-slip.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], PaymentSlipPage);
    return PaymentSlipPage;
}());

//# sourceMappingURL=payment-slip.js.map

/***/ })

});
//# sourceMappingURL=7.js.map