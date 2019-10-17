webpackJsonp([12],{

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditClassPageModule", function() { return EditClassPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_class__ = __webpack_require__(745);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditClassPageModule = /** @class */ (function () {
    function EditClassPageModule() {
    }
    EditClassPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_class__["a" /* EditClassPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_class__["a" /* EditClassPage */]),
            ],
        })
    ], EditClassPageModule);
    return EditClassPageModule;
}());

//# sourceMappingURL=edit-class.module.js.map

/***/ }),

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditClassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(94);
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
 * Generated class for the EditClassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditClassPage = /** @class */ (function () {
    function EditClassPage(navCtrl, navParams, alertCtrl, toastCtrl, formBuilder, db, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.db = db;
        this.http = http;
        this.oneClass = {
            _i: '',
            day: '',
            hour: '',
            p1: '',
            p2: '',
            p3: '',
            p4: '',
        };
        this.Class = db.list('/class');
        this.oneClass._i = this.navParams.get('_i');
        this.oneClass.day = this.navParams.get('day');
        this.oneClass.hour = this.navParams.get('hour');
        this.oneClass.p1 = this.navParams.get('p1');
        this.oneClass.p2 = this.navParams.get('p2');
        this.oneClass.p3 = this.navParams.get('p3');
        this.oneClass.p4 = this.navParams.get('p4');
        this.ClassForm = this.formBuilder.group({
            day: [this.navParams.get('day')],
            hour: [this.navParams.get('hour')],
            p1: [this.navParams.get('p1')],
            p2: [this.navParams.get('p2')],
            p3: [this.navParams.get('p3')],
            p4: [this.navParams.get('p4')],
        });
    }
    EditClassPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditClassPage');
        console.log("passou", this.oneClass._i, this.oneClass.day, this.oneClass.hour, this.oneClass.p1, this.oneClass.p2, this.oneClass.p3, this.oneClass.p4);
        this.getPatients();
    };
    EditClassPage.prototype.getPatients = function () {
        var _this = this;
        this.http.get('https://agendapp-6daf1.firebaseio.com/patients.json')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            if (data !== null && data !== undefined) {
                _this.ShowPatients(data);
            }
        });
    };
    EditClassPage.prototype.ShowPatients = function (data) {
        this.Patients = Object.keys(data).map(function (i) {
            data[i]._i = i;
            //console.log(data[i]);
            return data[i];
        });
    };
    EditClassPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    EditClassPage.prototype.updateClass = function (_i) {
        var _this = this;
        this.db.database.ref('class/' + _i).update(this.ClassForm.value)
            .then(function () {
            console.log("salvou");
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
            var toast = _this.toastCtrl.create({
                message: 'Turma Editada',
                duration: 3000
            });
            toast.present();
        });
    };
    EditClassPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-edit-class',template:/*ion-inline-start:"/home/aleraymann/Documentos/ionic-workspace/Agenda-emailComposer/src/pages/edit-class/edit-class.html"*/'<!--\n  Generated template for the EditClassPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Editar Turma</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="ClassForm">\n    <ion-list>\n      <h4>Dia</h4>\n      <ion-select interface="popover" formControlName="day" placeholder="Selecione o dia">\n        <ion-option value="monday">Segunda-Feira</ion-option>\n        <ion-option value="tuesday">Terça-Feira</ion-option>\n        <ion-option value="wednesday">Quarta-Feira</ion-option>\n        <ion-option value="thursday">Quinta-Feira</ion-option>\n        <ion-option value="friday">Sexta-Feira</ion-option>\n      </ion-select>\n      <hr>\n      <ion-item>\n        <ion-label >Horário</ion-label>\n        <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" formControlName="hour"></ion-datetime>">\n      </ion-item>\n\n      <div>\n        <h4>Pacientes</h4>\n        <ion-item>\n          <ion-select interface="popover" formControlName="p1" placeholder="1º Paciente">\n            <ion-option value="">...</ion-option>\n            <ion-option full *ngFor="let p of Patients" value="{{ p.name }}">\n              {{ p.name }}\n            </ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-select interface="popover" formControlName="p2"  placeholder="2º Paciente" >\n            <ion-option value="">...</ion-option>\n            <ion-option full *ngFor="let p of Patients" value="{{ p.name }}">\n              {{ p.name }}\n            </ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-select interface="popover" formControlName="p3" placeholder="3º Paciente" >\n            <ion-option value="">...</ion-option>\n            <ion-option full *ngFor="let p of Patients" value="{{ p.name }}">\n              {{ p.name }}\n            </ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-select interface="popover"  formControlName="p4" placeholder="4º Paciente" >\n            <ion-option value="">...</ion-option>\n            <ion-option full *ngFor="let p of Patients" value="{{ p.name }}">\n              {{ p.name }}\n            </ion-option>\n          </ion-select>\n        </ion-item>\n      </div>\n\n\n    </ion-list>\n    <div padding>\n      <button ion-button block type="submit" (click)="updateClass(oneClass._i,oneClass.day,oneClass.hour,oneClass.p1,oneClass.p2,oneClass.p3,oneClass.p4)">Salvar</button>\n      <button ion-button block color="danger" (click)="cancel()">Cancelar</button>\n    </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/aleraymann/Documentos/ionic-workspace/Agenda-emailComposer/src/pages/edit-class/edit-class.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]])
    ], EditClassPage);
    return EditClassPage;
}());

//# sourceMappingURL=edit-class.js.map

/***/ })

});
//# sourceMappingURL=12.js.map