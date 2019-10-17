import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { Http } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the ScheduleMondayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedule-monday',
  templateUrl: 'schedule-monday.html',
})
export class ScheduleMondayPage {

  Class;

  shownGroup = null;
 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController,
    public db: AngularFireDatabase,
    public toastCtrl: ToastController,
    public http: Http
    ) {
      this.Class = [];
  }

  //-----------------------------------------------TOGGLE
  toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
};
isGroupShown(group) {
    return this.shownGroup === group;
};
//-----------------------------------------------INITIALIZE
  ionViewDidLoad() {
    console.log('ionViewDidLoad ScheduleMondayPage');
    this.getClass();
  }
  goReplacementPage(){
    this.navCtrl.push('ReplacementPage');
  }
  
  //-----------------------------------------------GET CLASS
  getClass(){
    this.http.get('https://agendapp-6daf1.firebaseio.com/class.json')
    .map(res => res.json())
    .subscribe(data => {
      if(data !== null && data !== undefined){
        this.ShowClass(data);
      }
    })
  }

  ShowClass(data){
    this.Class = Object.keys(data).map(i => {
      data[i]._i = i;
      //console.log(data[i]);
      return data[i];
    });
    this.Class.sort((a, b) => (a.hour < b.hour) ? -1 : 1);
  }

  //-----------------------------------------------DELETE CLASS
  async delClass(_i:string) {
    console.log(_i)
    const confirm = this.alertCtrl.create({
      title: 'Remover Turma?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Cancelar Clicado');
          }
        },
        {
          text: 'Confirmar',
          handler: () => {
            this.db.database.ref('class/'+_i).remove();
            console.log(_i);
            const toast = this.toastCtrl.create({
              message: 'Turma removida!',
              duration: 3000
            });
            toast.present();
            this.navCtrl.push(ScheduleMondayPage);
          }
        }
      ]
    });
    confirm.present();
  }
  //-----------------------------------------------EDIT CLASS
  editClass(_i,day,hour,p1,p2,p3,p4){
    this.navCtrl.push("EditClassPage",{
      _i:_i,
      day:day,
      hour:hour,
      p1:p1,
      p2:p2,
      p3:p3,
      p4:p4,
    });
     console.log(_i,day,hour ,p1,p2,p3,p4);
  }
}
