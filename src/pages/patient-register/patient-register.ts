import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,ToastController } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AngularFireDatabase } from '@angular/fire/database';

/**
 * Generated class for the PatientRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-patient-register',
  templateUrl: 'patient-register.html',
})
export class PatientRegisterPage {

  PatientForm: FormGroup;
  
  public event = {
    month: new Date().toISOString(),

  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController, 
    public toastCtrl: ToastController, 
    private formBuilder: FormBuilder,
    public db: AngularFireDatabase) {

     this.PatientForm = this.formBuilder.group({
      name: [null,[Validators.required, Validators.minLength(5)]],
      email: [null],
      phone: [null,[Validators.required]],
      cpf: [null,[Validators.required]],
      value_payment: [null,[Validators.required]],
      begin: [null,[Validators.required]],
      payment:[false],

     })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PatientRegisterPage');
  }

  save(){
    this.db.database.ref('/patients').push(this.PatientForm.value)
    .then(() => {
      console.log("salvou");
      this.PatientForm.reset();
      this.navCtrl.setRoot('PatientPage');
      const toast = this.toastCtrl.create({
        message: 'Paciente Cadastrado',
        duration: 3000
      });
      toast.present();
      
    })
    }
  
}
