webpackJsonp([0],{

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegisterPageModule", function() { return UserRegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_register__ = __webpack_require__(757);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserRegisterPageModule = /** @class */ (function () {
    function UserRegisterPageModule() {
    }
    UserRegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_register__["a" /* UserRegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_register__["a" /* UserRegisterPage */]),
            ],
        })
    ], UserRegisterPageModule);
    return UserRegisterPageModule;
}());

//# sourceMappingURL=user-register.module.js.map

/***/ }),

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
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
 * Generated class for the UserRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserRegisterPage = /** @class */ (function () {
    function UserRegisterPage(navCtrl, navParams, alertCtrl, fire, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.fire = fire;
        this.toastCtrl = toastCtrl;
    }
    UserRegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserRegisterPage');
    };
    //----------------------------------------------Register
    UserRegisterPage.prototype.registrar = function () {
        var _this = this;
        this.fire.auth.createUserWithEmailAndPassword(this.user.value, this.password.value)
            .then(function (data) {
            var user = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().currentUser;
            user.sendEmailVerification().then(function () {
                // Email sent.
            }).catch(function (error) {
                // An error happened.
            });
            console.log('data', data);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            var toast = _this.toastCtrl.create({
                message: 'Registrado com sucesso!',
                duration: 3000
            });
            toast.present();
        })
            .catch(function (error) {
            if (error.code == 'auth/email-already-in-use') {
                _this.alert("E-mail já cadastrado");
            }
            else if (error.code == 'auth/invalid-email') {
                _this.alert("E-mail inválido");
            }
            else if (error.code == 'auth/operation-not-allowed') {
                _this.alert("A conta precisa ser ativada.");
            }
            else if (error.code == 'auth/weak-password') {
                _this.alert("A senha é muito fraca");
            }
        });
    };
    //----------------------------------------------Alert
    UserRegisterPage.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: 'Aviso',
            subTitle: message,
            buttons: ['OK']
        }).present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('username'),
        __metadata("design:type", Object)
    ], UserRegisterPage.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], UserRegisterPage.prototype, "password", void 0);
    UserRegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-user-register',template:/*ion-inline-start:"/home/aleraymann/Documentos/ionic-workspace/Agenda-emailComposer/src/pages/user-register/user-register.html"*/'<!--\n  Generated template for the UserRegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Cadastro de Usuário</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <img src="assets/imgs/agendapp.png"/>\n    <ion-list>\n          <ion-item>\n            <ion-label floating>Email</ion-label>\n            <ion-input type="text" #username></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label floating>Senha</ion-label>\n              <ion-input type="password" #password></ion-input>\n            </ion-item>\n            <div padding>\n                <button block ion-button (click)="registrar()" item-left>Registrar</button>\n            </div>\n              </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/aleraymann/Documentos/ionic-workspace/Agenda-emailComposer/src/pages/user-register/user-register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], UserRegisterPage);
    return UserRegisterPage;
}());

//# sourceMappingURL=user-register.js.map

/***/ })

});
//# sourceMappingURL=0.js.map