import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder} from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { Http } from '@angular/http';
import { HomePage } from '../home/home';

/**
 * Generated class for the ClassRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-class-register',
  templateUrl: 'class-register.html',
})
export class ClassRegisterPage {

  ClassForm: FormGroup;
  Patients;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController, 
    public toastCtrl: ToastController, 
    private formBuilder: FormBuilder,
    public db: AngularFireDatabase,
    public http: Http,
    ) {
      this.ClassForm = this.formBuilder.group({
        day: [false],
        hour: [],
        p1: [null],
        p2: [null],
        p3: [null],
        p4: [null],
       })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassRegisterPage');
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
  save(){
    //console.log(this.PatientForm.value);
    this.db.database.ref('/class').push(this.ClassForm.value)
    .then(() => {
      console.log("salvou");
      this.ClassForm.reset();
      this.navCtrl.setRoot(HomePage);
      const toast = this.toastCtrl.create({
        message: 'Turma Cadastrada',
        duration: 3000
      });
      toast.present();
      
    })
  }

}
