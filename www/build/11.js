webpackJsonp([11],{

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPatientPageModule", function() { return EditPatientPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_patient__ = __webpack_require__(747);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditPatientPageModule = /** @class */ (function () {
    function EditPatientPageModule() {
    }
    EditPatientPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_patient__["a" /* EditPatientPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_patient__["a" /* EditPatientPage */]),
            ],
        })
    ], EditPatientPageModule);
    return EditPatientPageModule;
}());

//# sourceMappingURL=edit-patient.module.js.map

/***/ }),

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPatientPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
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
 * Generated class for the EditPatientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditPatientPage = /** @class */ (function () {
    function EditPatientPage(navCtrl, navParams, alertCtrl, toastCtrl, formBuilder, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.db = db;
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
        this.event = {
            month: new Date().toISOString(),
        };
        this.Patients = db.list('/patients');
        this.patient._i = this.navParams.get('_i');
        this.patient.name = this.navParams.get('name');
        this.patient.cpf = this.navParams.get('cpf');
        this.patient.email = this.navParams.get('email');
        this.patient.phone = this.navParams.get('phone');
        this.patient.begin = this.navParams.get('begin');
        this.patient.value_payment = this.navParams.get('value_payment');
        this.patient.payment = this.navParams.get('payment');
        this.PatientForm = this.formBuilder.group({
            name: [this.navParams.get('name')],
            email: [this.navParams.get('email')],
            phone: [this.navParams.get('phone')],
            cpf: [this.navParams.get('cpf')],
            value_payment: [this.navParams.get('value_payment')],
            begin: [this.navParams.get('begin')],
            payment: [this.navParams.get('payment')]
        });
    }
    EditPatientPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditPatientPage');
    };
    EditPatientPage.prototype.cancel = function () {
        this.navCtrl.setRoot('PatientPage');
    };
    EditPatientPage.prototype.updatePatient = function (_i) {
        var _this = this;
        this.db.database.ref('patients/' + _i).update(this.PatientForm.value)
            .then(function () {
            console.log("salvou");
            _this.navCtrl.setRoot('PatientPage');
            var toast = _this.toastCtrl.create({
                message: 'Paciente Editado',
                duration: 3000
            });
            toast.present();
        });
    };
    EditPatientPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-edit-patient',template:/*ion-inline-start:"/home/aleraymann/Documentos/ionic-workspace/Agenda-emailComposer/src/pages/edit-patient/edit-patient.html"*/'<!--\n  Generated template for the EditPatientPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Editar Paciente</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <form [formGroup]="PatientForm">\n        <ion-list>\n          <ion-item>\n            <ion-label floating>Nome</ion-label>\n            <ion-input type="text" formControlName="name"></ion-input>\n          </ion-item>\n    \n    \n          <ion-item>\n            <ion-label floating>E-mail</ion-label>\n            <ion-input type="email" formControlName="email"></ion-input>\n          </ion-item>\n    \n          <ion-item>\n            <ion-label floating>Telefone</ion-label>\n            <ion-input type="tel" formControlName="phone"></ion-input>\n          </ion-item>\n    \n    \n          <ion-item>\n            <ion-label floating>CPF</ion-label>\n            <ion-input type="text" formControlName="cpf" ></ion-input>\n          </ion-item>\n    \n    \n          <ion-item>\n            <ion-label floating>Valor Mensalidade</ion-label>\n            <ion-input type="text" formControlName="value_payment" ></ion-input>\n          </ion-item>\n    \n    \n          <ion-item>\n            <ion-label>Início</ion-label>\n            <ion-datetime displayFormat="DD MMM YYYY" [(ngModel)]="event.month" type="date" formControlName="begin">\n            </ion-datetime>\n          </ion-item>\n          <ion-item>\n            <ion-label>Pagamento</ion-label>\n            <ion-toggle checked="true" formControlName="payment"></ion-toggle>\n          </ion-item>\n        </ion-list>\n        <div padding>\n          <button ion-button block type="submit" [disabled]="!PatientForm.valid" \n          (click)="updatePatient(patient._i,patient.name,patient.cpf,patient.email,patient.phone, patient.begin,patient.value_payment,patient.payment)">Salvar  \n          </button>\n\n          <button ion-button block color="danger" (click)="cancel()">Cancelar</button>\n        </div>\n      </form>\n\n</ion-content>\n'/*ion-inline-end:"/home/aleraymann/Documentos/ionic-workspace/Agenda-emailComposer/src/pages/edit-patient/edit-patient.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"]])
    ], EditPatientPage);
    return EditPatientPage;
}());

//# sourceMappingURL=edit-patient.js.map

/***/ })

});
//# sourceMappingURL=11.js.map