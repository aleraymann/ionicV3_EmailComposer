webpackJsonp([17],{

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientRegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(224);
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
 * Generated class for the PatientRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PatientRegisterPage = /** @class */ (function () {
    function PatientRegisterPage(navCtrl, navParams, alertCtrl, toastCtrl, formBuilder, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.db = db;
        this.event = {
            month: new Date().toISOString(),
        };
        this.PatientForm = this.formBuilder.group({
            name: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5)]],
            email: [null],
            phone: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            cpf: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            value_payment: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            begin: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            payment: [false],
        });
    }
    PatientRegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PatientRegisterPage');
    };
    PatientRegisterPage.prototype.save = function () {
        var _this = this;
        this.db.database.ref('/patients').push(this.PatientForm.value)
            .then(function () {
            console.log("salvou");
            _this.PatientForm.reset();
            _this.navCtrl.setRoot('PatientPage');
            var toast = _this.toastCtrl.create({
                message: 'Paciente Cadastrado',
                duration: 3000
            });
            toast.present();
        });
    };
    PatientRegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-patient-register',template:/*ion-inline-start:"/home/aleraymann/Documentos/ionic-workspace/Agenda-emailComposer/src/pages/patient-register/patient-register.html"*/'<!--\n  Generated template for the PatientRegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Novo Paciente</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="PatientForm">\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Nome</ion-label>\n        <ion-input type="text" formControlName="name"></ion-input>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label floating>E-mail</ion-label>\n        <ion-input type="email" formControlName="email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Telefone</ion-label>\n        <ion-input type="text" formControlName="phone"[brmasker]="{mask:\'(00)00000-0000\', len:14}"></ion-input>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label floating>CPF</ion-label>\n        <ion-input type="text" formControlName="cpf" [brmasker]="{mask:\'000.000.000-00\', len:14}"></ion-input>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label floating>Valor Mensalidade</ion-label>\n        <ion-input type="number" formControlName="value_payment" [brmasker]="{mask:\'000.00\', len:6}"></ion-input>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label>Início</ion-label>\n        <ion-datetime displayFormat="DD MMM YYYY" [(ngModel)]="event.month" type="date" formControlName="begin">\n        </ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label>Pagamento</ion-label>\n        <ion-toggle checked="true" formControlName="payment"></ion-toggle>\n      </ion-item>\n    </ion-list>\n    <div padding>\n      <button ion-button block type="submit" [disabled]="!PatientForm.valid" (click)="save()">Cadastrar</button>\n    </div>\n  </form>\n</ion-content>'/*ion-inline-end:"/home/aleraymann/Documentos/ionic-workspace/Agenda-emailComposer/src/pages/patient-register/patient-register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["AngularFireDatabase"]])
    ], PatientRegisterPage);
    return PatientRegisterPage;
}());

//# sourceMappingURL=patient-register.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, fire, toastCtrl, alertCtrl, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fire = fire;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
    }
    //---------------------------------------------- Menu lateral
    LoginPage.prototype.ionViewDidEnter = function () {
        this.menu.enable(false);
    };
    LoginPage.prototype.ionViewWillLeave = function () {
        this.menu.enable(true);
    };
    //----------------------------------------------Alert
    LoginPage.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: 'Aviso',
            subTitle: message,
            buttons: ['OK']
        }).present();
    };
    LoginPage.prototype.goUserRegister = function () {
        this.navCtrl.push('UserRegisterPage');
    };
    //----------------------------------------------Logar com Senha
    LoginPage.prototype.logar = function () {
        var _this = this;
        this.fire.auth.signInWithEmailAndPassword(this.user.value, this.password.value)
            .then(function (data) {
            console.log('data', data);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
            var toast = _this.toastCtrl.create({
                message: 'Bem Vindo!',
                duration: 3000
            });
            toast.present();
        })
            .catch(function (error) {
            if (error.code == 'auth/invalid-email') {
                _this.alert("E-mail inválido");
            }
            else if (error.code == 'auth/user-disabled') {
                _this.alert("Usuário Desativado");
            }
            else if (error.code == 'auth/user-not-found') {
                _this.alert("Usuário Não Encontrado.");
            }
            else if (error.code == 'auth/wrong-password') {
                _this.alert("Senha Incorreta.");
            }
        });
    };
    //---------------------------------------------- Logar Google
    LoginPage.prototype.logarComGoogle = function () {
        var _this = this;
        this.fire.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth.GoogleAuthProvider())
            .then(function (res) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
            var toast = _this.toastCtrl.create({
                message: 'Bem Vindo!',
                duration: 3000
            });
            toast.present();
        });
    };
    //---------------------------------------------- Reset Password
    LoginPage.prototype.resetPassword = function () {
        if (this.user.value != "") {
            var auth = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth();
            var emailAddress = this.user.value;
            var toast = this.toastCtrl.create({
                message: 'Email Enviado!',
                duration: 3000
            });
            toast.present();
            auth.sendPasswordResetEmail(emailAddress).then(function () {
            }).catch(function (error) {
            });
        }
        else {
            this.alert("Informe seu Email para redefinição de senha!");
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('username'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "password", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/aleraymann/Documentos/ionic-workspace/Agenda-emailComposer/src/pages/login/login.html"*/'<ion-header>\n\n</ion-header>\n\n<ion-content padding>\n  <img src="assets/imgs/agendapp.png" />\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input type="text" #username></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Senha</ion-label>\n      <ion-input type="password" #password></ion-input>\n    </ion-item>\n\n  </ion-list>\n  <button ion-button full (click)="logar()">Entrar\n  </button>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div></div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <button ion-button small icon-end (click)="logarComGoogle()">\n            Login com\n            <ion-icon name="logo-google"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div></div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div>\n          <button ion-button small (click)="resetPassword()">Esqueci a senha!</button>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <button ion-button small (click)="goUserRegister()" outline>Não tenho conta</button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"/home/aleraymann/Documentos/ionic-workspace/Agenda-emailComposer/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassRegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(49);
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
 * Generated class for the ClassRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClassRegisterPage = /** @class */ (function () {
    function ClassRegisterPage(navCtrl, navParams, alertCtrl, toastCtrl, formBuilder, db, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.db = db;
        this.http = http;
        this.ClassForm = this.formBuilder.group({
            day: [false],
            hour: [],
            p1: [null],
            p2: [null],
            p3: [null],
            p4: [null],
        });
    }
    ClassRegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClassRegisterPage');
        this.getPatients();
    };
    ClassRegisterPage.prototype.getPatients = function () {
        var _this = this;
        this.http.get('https://agendapp-6daf1.firebaseio.com/patients.json')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            if (data !== null && data !== undefined) {
                _this.ShowPatients(data);
            }
        });
    };
    ClassRegisterPage.prototype.ShowPatients = function (data) {
        this.Patients = Object.keys(data).map(function (i) {
            data[i]._i = i;
            //console.log(data[i]);
            return data[i];
        });
    };
    ClassRegisterPage.prototype.save = function () {
        var _this = this;
        //console.log(this.PatientForm.value);
        this.db.database.ref('/class').push(this.ClassForm.value)
            .then(function () {
            console.log("salvou");
            _this.ClassForm.reset();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
            var toast = _this.toastCtrl.create({
                message: 'Turma Cadastrada',
                duration: 3000
            });
            toast.present();
        });
    };
    ClassRegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-class-register',template:/*ion-inline-start:"/home/aleraymann/Documentos/ionic-workspace/Agenda-emailComposer/src/pages/class-register/class-register.html"*/'<!--\n  Generated template for the ClassRegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Nova Turma</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="ClassForm">\n    <ion-list>\n      <h4>Dia</h4>\n      <ion-select interface="popover" formControlName="day" placeholder="Selecione o dia">\n        <ion-option value="monday">Segunda-Feira</ion-option>\n        <ion-option value="tuesday">Terça-Feira</ion-option>\n        <ion-option value="wednesday">Quarta-Feira</ion-option>\n        <ion-option value="thursday">Quinta-Feira</ion-option>\n        <ion-option value="friday">Sexta-Feira</ion-option>\n      </ion-select>\n      <hr>\n      <ion-item>\n        <ion-label >Horário</ion-label>\n        <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" formControlName="hour"></ion-datetime>">\n      </ion-item>\n\n      <div>\n        <h4>Pacientes</h4>\n        <ion-item>\n          <ion-select interface="popover" formControlName="p1" placeholder="1º Paciente">\n            <ion-option value="">...</ion-option>\n            <ion-option full *ngFor="let p of Patients" value="{{ p.name }}">\n              {{ p.name }}\n            </ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-select interface="popover" formControlName="p2"  placeholder="2º Paciente" >\n            <ion-option value="">...</ion-option>\n            <ion-option full *ngFor="let p of Patients" value="{{ p.name }}">\n              {{ p.name }}\n            </ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-select interface="popover" formControlName="p3" placeholder="3º Paciente" >\n            <ion-option value="">...</ion-option>\n            <ion-option full *ngFor="let p of Patients" value="{{ p.name }}">\n              {{ p.name }}\n            </ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-select interface="popover"  formControlName="p4" placeholder="4º Paciente" >\n            <ion-option value="">...</ion-option>\n            <ion-option full *ngFor="let p of Patients" value="{{ p.name }}">\n              {{ p.name }}\n            </ion-option>\n          </ion-select>\n        </ion-item>\n      </div>\n\n\n    </ion-list>\n    <div padding>\n      <button ion-button block type="submit" (click)="save()">Salvar</button>\n    </div>\n  </form>\n</ion-content>'/*ion-inline-end:"/home/aleraymann/Documentos/ionic-workspace/Agenda-emailComposer/src/pages/class-register/class-register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
    ], ClassRegisterPage);
    return ClassRegisterPage;
}());

//# sourceMappingURL=class-register.js.map

/***/ }),

/***/ 179:
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
webpackEmptyAsyncContext.id = 179;

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/class-register/class-register.module": [
		728,
		16
	],
	"../pages/edit-class/edit-class.module": [
		729,
		12
	],
	"../pages/edit-patient/edit-patient.module": [
		730,
		11
	],
	"../pages/email-send/email-send.module": [
		731,
		10
	],
	"../pages/finantial/finantial.module": [
		732,
		9
	],
	"../pages/login/login.module": [
		734,
		15
	],
	"../pages/patient-register/patient-register.module": [
		733,
		14
	],
	"../pages/patient/patient.module": [
		736,
		8
	],
	"../pages/payment-slip/payment-slip.module": [
		735,
		7
	],
	"../pages/reminder/reminder.module": [
		737,
		13
	],
	"../pages/replacement/replacement.module": [
		738,
		6
	],
	"../pages/schedule-friday/schedule-friday.module": [
		739,
		5
	],
	"../pages/schedule-monday/schedule-monday.module": [
		740,
		4
	],
	"../pages/schedule-thursday/schedule-thursday.module": [
		741,
		3
	],
	"../pages/schedule-tuesday/schedule-tuesday.module": [
		742,
		2
	],
	"../pages/schedule-wednesday/schedule-wednesday.module": [
		743,
		1
	],
	"../pages/user-register/user-register.module": [
		744,
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
webpackAsyncContext.id = 223;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(378);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_class_register_class_register__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_patient_register_patient_register__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_brmasker_ionic_3__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_patient_patient__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_reminder_reminder__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_email_composer__ = __webpack_require__(372);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var firebaseAuth = {
    apiKey: "AIzaSyCutDVxtMP2VZJFzelrOTHtTseUPbn8sGg",
    authDomain: "agendapp-6daf1.firebaseapp.com",
    databaseURL: "https://agendapp-6daf1.firebaseio.com",
    projectId: "agendapp-6daf1",
    storageBucket: "agendapp-6daf1.appspot.com",
    messagingSenderId: "1064696034622",
    appId: "1:1064696034622:web:ecfa43c0965f0006"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_patient_register_patient_register__["a" /* PatientRegisterPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_reminder_reminder__["a" /* ReminderPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_class_register_class_register__["a" /* ClassRegisterPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/class-register/class-register.module#ClassRegisterPageModule', name: 'ClassRegisterPage', segment: 'class-register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-class/edit-class.module#EditClassPageModule', name: 'EditClassPage', segment: 'edit-class', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-patient/edit-patient.module#EditPatientPageModule', name: 'EditPatientPage', segment: 'edit-patient', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/email-send/email-send.module#EmailSendPageModule', name: 'EmailSendPage', segment: 'email-send', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/finantial/finantial.module#FinantialPageModule', name: 'FinantialPage', segment: 'finantial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/patient-register/patient-register.module#PatientRegisterPageModule', name: 'PatientRegisterPage', segment: 'patient-register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment-slip/payment-slip.module#PaymentSlipPageModule', name: 'PaymentSlipPage', segment: 'payment-slip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/patient/patient.module#PatientPageModule', name: 'PatientPage', segment: 'patient', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reminder/reminder.module#ReminderPageModule', name: 'ReminderPage', segment: 'reminder', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/replacement/replacement.module#ReplacementPageModule', name: 'ReplacementPage', segment: 'replacement', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/schedule-friday/schedule-friday.module#ScheduleFridayPageModule', name: 'ScheduleFridayPage', segment: 'schedule-friday', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/schedule-monday/schedule-monday.module#ScheduleMondayPageModule', name: 'ScheduleMondayPage', segment: 'schedule-monday', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/schedule-thursday/schedule-thursday.module#ScheduleThursdayPageModule', name: 'ScheduleThursdayPage', segment: 'schedule-thursday', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/schedule-tuesday/schedule-tuesday.module#ScheduleTuesdayPageModule', name: 'ScheduleTuesdayPage', segment: 'schedule-tuesday', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/schedule-wednesday/schedule-wednesday.module#ScheduleWednesdayPageModule', name: 'ScheduleWednesdayPage', segment: 'schedule-wednesday', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-register/user-register.module#UserRegisterPageModule', name: 'UserRegisterPage', segment: 'user-register', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10_angularfire2__["AngularFireModule"].initializeApp(firebaseAuth),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_14_brmasker_ionic_3__["a" /* BrMaskerModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_patient_register_patient_register__["a" /* PatientRegisterPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_reminder_reminder__["a" /* ReminderPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_class_register_class_register__["a" /* ClassRegisterPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__["AngularFireDatabase"],
                __WEBPACK_IMPORTED_MODULE_15__providers_patient_patient__["a" /* PatientProvider */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_email_composer__["a" /* EmailComposer */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reminder_reminder__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.usuario = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser;
    }
    HomePage.prototype.goPatients = function () {
        this.navCtrl.push('PatientPage');
    };
    HomePage.prototype.goFinantial = function () {
        this.navCtrl.push('FinantialPage');
    };
    HomePage.prototype.goReminder = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__reminder_reminder__["a" /* ReminderPage */]);
    };
    HomePage.prototype.goMonday = function () {
        this.navCtrl.push('ScheduleMondayPage');
    };
    HomePage.prototype.goTuesday = function () {
        this.navCtrl.push('ScheduleTuesdayPage');
    };
    HomePage.prototype.goWed = function () {
        this.navCtrl.push('ScheduleWednesdayPage');
    };
    HomePage.prototype.goThursday = function () {
        this.navCtrl.push('ScheduleThursdayPage');
    };
    HomePage.prototype.goFriday = function () {
        this.navCtrl.push('ScheduleFridayPage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/aleraymann/Documentos/ionic-workspace/Agenda-emailComposer/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h6>Login: {{usuario.email}}\n    <img class="foto" *ngIf="usuario.photoURL !=null" [src]="usuario.photoURL" /></h6>\n  <h2>Agenda Semanal</h2>\n  <br>\n  <button ion-button block (click)="goMonday()">Segunda-Feira</button>\n  <hr>\n  <button ion-button block (click)="goTuesday()">Terça-Feira</button>\n  <hr>\n  <button ion-button block (click)="goWed()">Quarta-Feira</button>\n  <hr>\n  <button ion-button block (click)="goThursday()">Quinta-Feira</button>\n  <hr>\n  <button ion-button block (click)="goFriday()">Sexta-Feira</button>\n  <hr>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div></div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <button ion-button (click)="goReminder()" color="secondary" outline>Lembretes</button>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div></div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div>\n          <button ion-button block outline (click)="goPatients()">\n            Pacientes\n          </button>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <button ion-button block outline (click)="goFinantial()">\n            Financeiro\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/home/aleraymann/Documentos/ionic-workspace/Agenda-emailComposer/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_class_register_class_register__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_patient_register_patient_register__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_reminder_reminder__ = __webpack_require__(95);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.goPatientRegisterPage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_patient_register_patient_register__["a" /* PatientRegisterPage */]);
    };
    MyApp.prototype.goReminderPage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_reminder_reminder__["a" /* ReminderPage */]);
    };
    MyApp.prototype.goFinantialPage = function () {
        this.nav.push('FinantialPage');
    };
    MyApp.prototype.goReplacementPage = function () {
        this.nav.push('ReplacementPage');
    };
    MyApp.prototype.goClassRegisterPage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_0__pages_class_register_class_register__["a" /* ClassRegisterPage */]);
    };
    MyApp.prototype.logout = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/aleraymann/Documentos/ionic-workspace/Agenda-emailComposer/src/app/app.html"*/'<ion-menu [content]="content" type="overlay" class="menu">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      \n      <button menuClose ion-item (click)="goPatientRegisterPage()">\n        Cadastro de Pacientes\n      </button>\n      <button menuClose ion-item (click)="goClassRegisterPage()">\n        Cadastrar Turmas\n      </button>\n      <button menuClose ion-item (click)="goReminderPage()">\n         Verificar Lembretes\n      </button>\n      <button menuClose ion-item (click)="goFinantialPage()">\n        Financeiro\n      </button>\n      <button menuClose ion-item (click)="goReplacementPage()">\n        Reposições\n      </button>\n      \n    </ion-list>\n   <!-- <ion-item>\n      <ion-label>Ativar Notificações</ion-label>\n      <ion-checkbox checked="true"></ion-checkbox>\n    </ion-item>\n    <hr>-->\n    <ion-label >Desenvolvedor:</ion-label><br>\n    <hr>\n    <button menuClose ion-item (click)="logout()">\n        Logout\n      </button>\n    <button menuClose ion-item>\n      Sair\n    </button>\n\n  </ion-content>\n  \n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/aleraymann/Documentos/ionic-workspace/Agenda-emailComposer/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the PatientProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PatientProvider = /** @class */ (function () {
    function PatientProvider(http) {
        this.http = http;
        this.patients = [];
        console.log('Hello PatientProvider Provider');
    }
    PatientProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], PatientProvider);
    return PatientProvider;
}());

//# sourceMappingURL=patient.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReminderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(21);
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
 * Generated class for the ReminderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReminderPage = /** @class */ (function () {
    function ReminderPage(navCtrl, navParams, alertCtrl, formBuilder, db, toastCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.ReminderForm = this.formBuilder.group({
            reminder: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(5)]],
        });
        this.Reminders = [];
    }
    //-----------------------------------------------SAVE
    ReminderPage.prototype.save = function () {
        var _this = this;
        //console.log(this.PatientForm.value);
        this.db.database.ref('/reminders').push(this.ReminderForm.value)
            .then(function () {
            console.log("salvou");
            _this.ReminderForm.reset();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
            var toast = _this.toastCtrl.create({
                message: 'Lembrete Adicionado!',
                duration: 3000
            });
            toast.present();
        });
    };
    ReminderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReminderPage');
        this.getReminders();
    };
    //-----------------------------------------------GET REMINDERS
    ReminderPage.prototype.getReminders = function () {
        var _this = this;
        this.http.get('https://agendapp-6daf1.firebaseio.com/reminders.json')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            if (data !== null && data !== undefined) {
                _this.ShowReminders(data);
            }
        });
    };
    ReminderPage.prototype.ShowReminders = function (data) {
        this.Reminders = Object.keys(data).map(function (i) {
            data[i]._i = i;
            //console.log(data[i]);
            return data[i];
        });
    };
    //-----------------------------------------------DELETE REMINDER
    ReminderPage.prototype.delReminder = function (_i) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var confirm;
            return __generator(this, function (_a) {
                console.log(_i);
                confirm = this.alertCtrl.create({
                    title: 'Remover Lembrete?',
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
                                _this.db.database.ref('reminders/' + _i).remove();
                                console.log(_i);
                                var toast = _this.toastCtrl.create({
                                    message: 'Lembrete removido!',
                                    duration: 3000
                                });
                                toast.present();
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
                            }
                        }
                    ]
                });
                confirm.present();
                return [2 /*return*/];
            });
        });
    };
    ReminderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-reminder',template:/*ion-inline-start:"/home/aleraymann/Documentos/ionic-workspace/Agenda-emailComposer/src/pages/reminder/reminder.html"*/'<!--\n  Generated template for the ReminderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Lembretes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="ReminderForm" novalidate>\n    <br>\n    <ion-item>\n      <ion-input type="text" formControlName="reminder" placeholder="..."></ion-input>\n    </ion-item>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <div></div>\n        </ion-col>\n        <ion-col>\n          <div></div>\n        </ion-col>\n        <ion-col>\n          <div>\n            <button ion-button icon-start color="secondary" type="submit" (click)="save()" small\n              [disabled]="!ReminderForm.valid">\n              <ion-icon name="add"></ion-icon>\n              Lembrete\n            </button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n  <hr><br>\n  <ion-list>\n    <ion-card *ngFor="let r of Reminders">\n      <ion-icon name="close-circle" icon-end color="danger" (click)="delReminder(r._i)"></ion-icon>\n      <ion-card-content>\n        {{ r.reminder}}\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n\n  <br><br>\n  <hr>\n\n</ion-content>'/*ion-inline-end:"/home/aleraymann/Documentos/ionic-workspace/Agenda-emailComposer/src/pages/reminder/reminder.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]])
    ], ReminderPage);
    return ReminderPage;
}());

//# sourceMappingURL=reminder.js.map

/***/ })

},[373]);
//# sourceMappingURL=main.js.map