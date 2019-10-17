import { HomePage } from './../home/home';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Http } from '@angular/http';


/**
 * Generated class for the EditClassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-class',
  templateUrl: 'edit-class.html',
})
export class EditClassPage {
  Patients;
  Class;
  ClassForm : FormGroup;
  oneClass = {
    _i: '',
    day: '',
    hour: '',
    p1: '',
    p2: '',
    p3: '',
    p4: '',
    
  }

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController, 
    public toastCtrl: ToastController, 
    private formBuilder: FormBuilder,
    public db: AngularFireDatabase,
    public http: Http,) {

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
    
     })
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditClassPage');
    console.log("passou",this.oneClass._i,this.oneClass.day,this.oneClass.hour ,this.oneClass.p1,this.oneClass.p2,this.oneClass.p3,this.oneClass.p4);
    
    this.getPatients();
  }
  getPatients(){
    this.http.get('https://agendapp-6daf1.firebaseio.com/patients.json')
    .map(res => res.json())
    .subscribe(data => {
      if(data !== null && data !== undefined){
        this.ShowPatients(data);
      }
    })
  }
  ShowPatients(data){
    this.Patients = Object.keys(data).map(i => {
      data[i]._i = i;
      //console.log(data[i]);
      return data[i];
    
    });
  }
  
  cancel(){
    this.navCtrl.pop();
  }

  updateClass(_i){
    this.db.database.ref('class/'+ _i).update(this.ClassForm.value)
    .then(() => {
      console.log("salvou");
      this.navCtrl.setRoot(HomePage);
      const toast = this.toastCtrl.create({
        message: 'Turma Editada',
        duration: 3000
      });
      toast.present();
      
    })
  }

}
