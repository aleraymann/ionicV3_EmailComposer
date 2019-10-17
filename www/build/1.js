webpackJsonp([1],{

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleWednesdayPageModule", function() { return ScheduleWednesdayPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule_wednesday__ = __webpack_require__(756);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ScheduleWednesdayPageModule = /** @class */ (function () {
    function ScheduleWednesdayPageModule() {
    }
    ScheduleWednesdayPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__schedule_wednesday__["a" /* ScheduleWednesdayPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__schedule_wednesday__["a" /* ScheduleWednesdayPage */]),
            ],
        })
    ], ScheduleWednesdayPageModule);
    return ScheduleWednesdayPageModule;
}());

//# sourceMappingURL=schedule-wednesday.module.js.map

/***/ }),

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleWednesdayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(94);
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
 * Generated class for the ScheduleWednesdayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ScheduleWednesdayPage = /** @class */ (function () {
    function ScheduleWednesdayPage(navCtrl, navParams, alertCtrl, db, toastCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.shownGroup = null;
        this.Class = [];
    }
    ScheduleWednesdayPage_1 = ScheduleWednesdayPage;
    //-----------------------------------------------TOGGLE
    ScheduleWednesdayPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    ;
    ScheduleWednesdayPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    ;
    //-----------------------------------------------INITIALIZE
    ScheduleWednesdayPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ScheduleWednesdayPage');
        this.getClass();
    };
    ScheduleWednesdayPage.prototype.goReplacementPage = function () {
        this.navCtrl.push('ReplacementPage');
    };
    //-----------------------------------------------GET CLASS
    ScheduleWednesdayPage.prototype.getClass = function () {
        var _this = this;
        this.http.get('https://agendapp-6daf1.firebaseio.com/class.json')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            if (data !== null && data !== undefined) {
                _this.ShowClass(data);
            }
        });
    };
    ScheduleWednesdayPage.prototype.ShowClass = function (data) {
        this.Class = Object.keys(data).map(function (i) {
            data[i]._i = i;
            //console.log(data[i]);
            return data[i];
        });
        this.Class.sort(function (a, b) { return (a.hour < b.hour) ? -1 : 1; });
    };
    //-----------------------------------------------DELETE CLASS
    ScheduleWednesdayPage.prototype.delClass = function (_i) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var confirm;
            return __generator(this, function (_a) {
                console.log(_i);
                confirm = this.alertCtrl.create({
                    title: 'Remover Turma?',
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
                                _this.db.database.ref('class/' + _i).remove();
                                console.log(_i);
                                var toast = _this.toastCtrl.create({
                                    message: 'Turma removida!',
                                    duration: 3000
                                });
                                toast.present();
                                _this.navCtrl.push(ScheduleWednesdayPage_1);
                            }
                        }
                    ]
                });
                confirm.present();
                return [2 /*return*/];
            });
        });
    };
    //-----------------------------------------------EDIT CLASS
    ScheduleWednesdayPage.prototype.editClass = function (_i, day, hour, p1, p2, p3, p4) {
        this.navCtrl.push("EditClassPage", {
            _i: _i,
            day: day,
            hour: hour,
            p1: p1,
            p2: p2,
            p3: p3,
            p4: p4,
        });
        console.log(_i, day, hour, p1, p2, p3, p4);
    };
    ScheduleWednesdayPage = ScheduleWednesdayPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-schedule-wednesday',template:/*ion-inline-start:"/home/aleraymann/Documentos/ionic-workspace/Agenda-emailComposer/src/pages/schedule-wednesday/schedule-wednesday.html"*/'<!--\n  Generated template for the ScheduleWednesdayPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Quarta_feira</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n            <ion-list>\n              <ion-item-sliding *ngFor="let c of Class; let i=index " text-wrap (click)="toggleGroup(i)"\n              [ngClass]="{active: isGroupShown(i)}">\n                <ion-item *ngIf="c.day == \'wednesday\'">\n                  <h3>\n                    {{ c.hour }}\n                    <ion-icon color="success" item-right [name]="isGroupShown(i) ? \'arrow-dropdown\' : \'arrow-dropright\'">\n                    </ion-icon>\n                  </h3>\n                  <div *ngIf="isGroupShown(i)">1: {{c.p1}}</div>\n                  <div *ngIf="isGroupShown(i)">2: {{c.p2}}</div>\n                  <div *ngIf="isGroupShown(i)">3: {{c.p3}}</div>\n                  <div *ngIf="isGroupShown(i)">4: {{c.p4}}</div>\n                </ion-item>\n                <ion-item-options side="right">\n                  <button ion-button color="light" (click)="editClass(c._i,c.day,c.hour,c.p1,c.p2,c.p3,c.p4)">\n                    <ion-icon name="create"></ion-icon>\n                  </button>\n                  <button ion-button color="danger" (click)="delClass(c._i)">\n                    <ion-icon name="trash"></ion-icon>\n                  </button>\n                </ion-item-options>\n              </ion-item-sliding>\n            </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/aleraymann/Documentos/ionic-workspace/Agenda-emailComposer/src/pages/schedule-wednesday/schedule-wednesday.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], ScheduleWednesdayPage);
    return ScheduleWednesdayPage;
    var ScheduleWednesdayPage_1;
}());

//# sourceMappingURL=schedule-wednesday.js.map

/***/ })

});
//# sourceMappingURL=1.js.map