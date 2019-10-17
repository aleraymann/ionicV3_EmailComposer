webpackJsonp([8],{

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientPageModule", function() { return PatientPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patient__ = __webpack_require__(750);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PatientPageModule = /** @class */ (function () {
    function PatientPageModule() {
    }
    PatientPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__patient__["a" /* PatientPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__patient__["a" /* PatientPage */]),
            ],
        })
    ], PatientPageModule);
    return PatientPageModule;
}());

//# sourceMappingURL=patient.module.js.map

/***/ }),

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__patient_register_patient_register__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







/**
 * Generated class for the PatientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PatientPage = /** @class */ (function () {
    function PatientPage(navCtrl, navParams, alertCtrl, toastCtrl, http, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.db = db;
        this.shownGroup = null;
        this.patient = {
            _i: '',
            name: '',
            cpf: '',
            email: '',
            phone: '',
            begin: '',
            value_payment: '',
            payment: ''
        };
        this.Patients = [];
    }
    PatientPage_1 = PatientPage;
    //-----------------------------------------------TOGGLE
    PatientPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    ;
    PatientPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    ;
    PatientPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PatientPage');
        this.getPatients();
    };
    //---------------------------------------------PAGES
    PatientPage.prototype.goFinantial = function () {
        this.navCtrl.push('FinantialPage');
    };
    PatientPage.prototype.goHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    PatientPage.prototype.goPaymentSlip = function () {
        this.navCtrl.push('PaymentSlipPage');
    };
    PatientPage.prototype.goPatientRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__patient_register_patient_register__["a" /* PatientRegisterPage */]);
    };
    //-----------------------------------------GET_PATIENTS
    PatientPage.prototype.getPatients = function () {
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
    PatientPage.prototype.ShowPatients = function (data) {
        this.Patients = Object.keys(data).map(function (i) {
            data[i]._i = i;
            console.log(data[i].name, "-", data[i].payment);
            return data[i];
        });
        this.Patients.sort(function (a, b) { return (a.name < b.name) ? -1 : 1; });
    };
    //---------------------------------------------------PAYMENT_ALERT
    PatientPage.prototype.payment = function (_i, name, cpf, email, phone, begin, value_payment, payment) {
        var _this = this;
        //console.log(_i,name,cpf ,email,phone,begin,value_payment,payment);
        var confirm = this.alertCtrl.create({
            title: 'Confirmar Pagamento',
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
                        //console.log('Confirmar clicado',_i);
                        //console.log(_i,name,cpf ,email,phone,begin,value_payment,payment);
                        _this.db.database.ref('patients/' + _i).update({
                            _i: _i,
                            name: name,
                            cpf: cpf,
                            email: email,
                            phone: phone,
                            begin: begin,
                            value_payment: value_payment,
                            payment: true
                        });
                        _this.navCtrl.setRoot('PatientPage');
                        var toast = _this.toastCtrl.create({
                            message: 'Pagamento Atualizado!',
                            duration: 3000
                        });
                        toast.present();
                    }
                }
            ]
        });
        confirm.present();
    };
    //--------------------------------------------PATIENT_DELETE
    PatientPage.prototype.delPatient = function (_i) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var confirm;
            return __generator(this, function (_a) {
                console.log(_i);
                confirm = this.alertCtrl.create({
                    title: 'Remover Paciente?',
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
                                _this.db.database.ref('patients/' + _i).remove();
                                console.log(_i);
                                var toast = _this.toastCtrl.create({
                                    message: 'Paciente removido!',
                                    duration: 3000
                                });
                                toast.present();
                                _this.navCtrl.push(PatientPage_1);
                            }
                        }
                    ]
                });
                confirm.present();
                return [2 /*return*/];
            });
        });
    };
    //---------------------------------------------------PATIENT_EDIT
    PatientPage.prototype.editPatient = function (_i, name, cpf, email, phone, begin, value_payment, payment) {
        //console.log(_i,name,cpf ,email,phone,begin,value_payment,payment);
        this.navCtrl.push('EditPatientPage', {
            _i: _i,
            name: name,
            cpf: cpf,
            email: email,
            phone: phone,
            begin: begin,
            value_payment: value_payment,
            payment: payment
        });
    };
    //------------------------------------SEARCH_PATIENT
    PatientPage.prototype.searchPatients = function (ev) {
        // Reset items back to all of the items
        this.Patients;
        // set val to the value of the ev target
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.Patients = this.Patients.filter(function (patient) {
                return (patient.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    PatientPage = PatientPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-patient',template:/*ion-inline-start:"/home/aleraymann/Documentos/ionic-workspace/Agenda-emailComposer/src/pages/patient/patient.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Pacientes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-fab top right edge>\n    <button ion-fab mini (click)="goPatientRegister()" color="secondary">\n      <ion-icon name="person-add"></ion-icon>\n    </button>\n  </ion-fab>\n  <ion-searchbar (ionInput)="searchPatients($event)"></ion-searchbar>\n  <hr>\n  <div *ngIf="Patients.length > 0; else empty">\n    <ion-list>\n      <ion-item-sliding *ngFor="let p of Patients; let i=index" text-wrap (click)="toggleGroup(i)"\n        [ngClass]="{active: isGroupShown(i)}">\n        <ion-item>\n          <h3>\n            {{ p.name }}\n            <ion-icon item-right [name]="isGroupShown(i) ? \'arrow-dropdown\' : \'arrow-dropright\'">\n            </ion-icon>\n            <ion-icon item-end name="done-all" icon-end [color]="p.payment ==true? \'secondary\' : \'light\'"> Pago\n            </ion-icon>\n          </h3>\n          <div *ngIf="isGroupShown(i)">Telefone: {{p.phone}}</div>\n          <div *ngIf="isGroupShown(i)">R$: {{p.value_payment}}</div>\n          <div *ngIf="isGroupShown(i)">\n            <ion-grid>\n              <ion-row>\n                <ion-col>\n                  <div>\n                    <button ion-button icon-start small color="secondary" (click)="payment(p._i,p.name,p.cpf,p.email,p.phone, p.begin,p.value_payment,p.payment)"\n                      [disabled]="p.payment == true">\n                      <ion-icon name="logo-usd"></ion-icon>\n                      Pagar\n                    </button>\n                  </div>\n                </ion-col>\n                <ion-col>\n                  <div>\n                    <button ion-button icon-end small (click)="goPaymentSlip()">\n                      Boleto\n                      <ion-icon name="barcode"></ion-icon>\n                    </button>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n        </ion-item>\n        <ion-item-options side="right">\n          <button ion-button color="light"\n            (click)=" editPatient(p._i,p.name,p.cpf,p.email,p.phone, p.begin,p.value_payment,p.payment)">\n            <ion-icon name="create"></ion-icon>\n          </button>\n          <button ion-button color="danger" (click)="delPatient(p._i)">\n            <ion-icon name="trash"></ion-icon>\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  </div>\n  <ng-template #empty>\n    <h5>Você ainda não Cadastrou Pacientes!! </h5>\n  </ng-template>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div>\n          <button ion-button block outline (click)="goHome()">\n            Início\n          </button>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <button ion-button block outline (click)="goFinantial()">\n            Financeiro\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/home/aleraymann/Documentos/ionic-workspace/Agenda-emailComposer/src/pages/patient/patient.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"]])
    ], PatientPage);
    return PatientPage;
    var PatientPage_1;
}());

//# sourceMappingURL=patient.js.map

/***/ })

});
//# sourceMappingURL=8.js.map