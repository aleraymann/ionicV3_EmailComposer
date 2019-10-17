webpackJsonp([9],{

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinantialPageModule", function() { return FinantialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__finantial__ = __webpack_require__(748);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FinantialPageModule = /** @class */ (function () {
    function FinantialPageModule() {
    }
    FinantialPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__finantial__["a" /* FinantialPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__finantial__["a" /* FinantialPage */]),
            ],
        })
    ], FinantialPageModule);
    return FinantialPageModule;
}());

//# sourceMappingURL=finantial.module.js.map

/***/ }),

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinantialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
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
 * Generated class for the FinantialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FinantialPage = /** @class */ (function () {
    function FinantialPage(navCtrl, navParams, http, alertCtrl, db, toastCtrl, emailComposer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.emailComposer = emailComposer;
        this.totalReceive = 0;
        this.received = 0;
        this.toReceive = 0;
        this.Patients = [];
        this.usuario = __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth().currentUser;
        console.log(this.usuario.email);
        this.emailComposer.isAvailable().then(function (available) {
            if (available) {
                //Now we know we can send
            }
        });
    }
    FinantialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FinantialPage');
        this.getPatients();
    };
    FinantialPage.prototype.goPatient = function () {
        this.navCtrl.push('PatientPage');
    };
    FinantialPage.prototype.goHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    FinantialPage.prototype.getPatients = function () {
        var _this = this;
        this.http.get('https://agendapp-6daf1.firebaseio.com/patients.json')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            if (data !== null && data !== undefined) {
                _this.ShowPatients(data);
            }
        });
    };
    //--------------------------------------------------SHOW_PATIENTS
    FinantialPage.prototype.ShowPatients = function (data) {
        var _this = this;
        this.Patients = Object.keys(data).map(function (i) {
            data[i]._i = i;
            _this.totalReceive = _this.totalReceive += parseFloat(data[i].value_payment);
            //console.log(this.totalReceive);
            if (data[i].payment != false) {
                _this.received = _this.received += parseFloat(data[i].value_payment);
                //console.log(this.received);
            }
            else {
                _this.toReceive = _this.totalReceive - _this.received;
            }
            //console.log(this.toReceive);
            return data[i];
        });
    };
    //--------------------------------------------------Restart Finantial
    FinantialPage.prototype.restartFinancial = function (payment) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Zerar Financeiro',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function () {
                        console.log('Cancelar Clicado');
                    }
                },
                {
                    text: 'Confirmar',
                    handler: function () {
                        _this.http.get('https://agendapp-6daf1.firebaseio.com/patients.json')
                            .map(function (res) { return res.json(); })
                            .subscribe(function (data) {
                            _this.Patients = Object.keys(data).map(function (i) {
                                data[i]._i = i;
                                if (data !== null && data !== undefined) {
                                    _this.db.database.ref('patients/' + i).update({
                                        payment: false
                                    });
                                }
                            });
                        });
                        _this.navCtrl.push('HomePage');
                        var toast = _this.toastCtrl.create({
                            message: 'Financeiro Zerado',
                            duration: 3000
                        });
                        toast.present();
                    }
                }
            ]
        });
        confirm.present();
    };
    FinantialPage.prototype.send = function () {
        this.navCtrl.push("EmailSendPage");
    };
    FinantialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-finantial',template:/*ion-inline-start:"/home/aleraymann/Documentos/ionic-workspace/Agenda-emailComposer/src/pages/finantial/finantial.html"*/'<!--\n  Generated template for the FinantialPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Financeiro</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <h3>Recebido</h3>\n  <hr>\n  <ion-list>\n    <div *ngFor="let p of Patients">\n      <ion-item *ngIf="p.payment !=false">\n        <ion-label>{{ p.name }}</ion-label>\n        <ion-label>R$:{{p.value_payment}}</ion-label>\n      </ion-item>\n    </div>\n  </ion-list>\n  <ion-item>\n    <ion-label>Total Recebido: R$ {{this.received}}</ion-label>\n  </ion-item>\n\n  <hr><br>\n\n  <h3>Em Aberto</h3>\n  <hr>\n  <ion-list>\n    <div *ngFor="let p of Patients">\n      <ion-item *ngIf="p.payment !=true">\n        <ion-label>{{ p.name }}</ion-label>\n        <ion-label>R$:{{p.value_payment}}</ion-label>\n      </ion-item>\n     \n    </div>\n  </ion-list>\n      <ion-item>\n        <ion-label>Total em aberto: R$ {{this.toReceive}}</ion-label>\n      </ion-item>\n      <hr><br>\n  \n      <h3>Total a Receber: R$ {{totalReceive}}</h3>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div>\n          <button ion-button block outline (click)="goHome()">\n            Início\n          </button>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <button ion-button block outline (click)="goPatient()">\n            Pacientes\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div>\n    <button ion-button block outline color="danger" (click)=" restartFinancial(payment)">\n      Zerar financeiro\n    </button>\n    <button ion-button block outline (click)="send()">\n      Email\n    </button>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/aleraymann/Documentos/ionic-workspace/Agenda-emailComposer/src/pages/finantial/finantial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__["a" /* EmailComposer */]])
    ], FinantialPage);
    return FinantialPage;
}());

//# sourceMappingURL=finantial.js.map

/***/ })

});
//# sourceMappingURL=9.js.map