webpackJsonp([6],{

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplacementPageModule", function() { return ReplacementPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__replacement__ = __webpack_require__(751);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReplacementPageModule = /** @class */ (function () {
    function ReplacementPageModule() {
    }
    ReplacementPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__replacement__["a" /* ReplacementPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__replacement__["a" /* ReplacementPage */]),
            ],
        })
    ], ReplacementPageModule);
    return ReplacementPageModule;
}());

//# sourceMappingURL=replacement.module.js.map

/***/ }),

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReplacementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(94);
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
 * Generated class for the ReplacementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReplacementPage = /** @class */ (function () {
    function ReplacementPage(navCtrl, navParams, alertCtrl, toastCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.Patients = [];
    }
    ReplacementPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReplacementPage');
        this.getPatients();
    };
    ReplacementPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            subTitle: 'Limpeza de tabela concluida',
            buttons: ['OK']
        });
        alert.present();
    };
    ReplacementPage.prototype.getPatients = function () {
        var _this = this;
        this.http.get('https://agendapp-6daf1.firebaseio.com/patients.json')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            if (data !== null && data !== undefined) {
                _this.ShowPatients(data);
            }
        });
    };
    ReplacementPage.prototype.ShowPatients = function (data) {
        this.Patients = Object.keys(data).map(function (i) {
            data[i]._i = i;
            console.log(data[i]);
            return data[i];
        });
    };
    ReplacementPage.prototype.addPatient = function () {
        var toast = this.toastCtrl.create({
            message: 'Paciente adicionado',
            duration: 3000
        });
        toast.present();
    };
    ReplacementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-replacement',template:/*ion-inline-start:"/home/aleraymann/Documentos/ionic-workspace/Agenda-emailComposer/src/pages/replacement/replacement.html"*/'<!--\n  Generated template for the ReplacementPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Reposições</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-grid no-padding>\n    <ion-row>\n      <ion-col>Paciente</ion-col>\n    </ion-row>\n        <ion-item *ngFor="let p of Patients;" >\n            <ion-label>{{ p.name }}</ion-label>\n            <ion-checkbox (click)="addPatient()"></ion-checkbox>\n          </ion-item>\n      <ion-row>\n        <ion-col></ion-col>\n      </ion-row>\n    <hr>\n  </ion-grid>\n<hr><br>\n<button ion-button block (click)="showAlert()" outline>Limpar Reposições\n  </button>\n</ion-content>\n'/*ion-inline-end:"/home/aleraymann/Documentos/ionic-workspace/Agenda-emailComposer/src/pages/replacement/replacement.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], ReplacementPage);
    return ReplacementPage;
}());

//# sourceMappingURL=replacement.js.map

/***/ })

});
//# sourceMappingURL=6.js.map