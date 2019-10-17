
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder} from '@angular/forms';
import { AngularFireDatabase} from 'angularfire2/database';


/**
 * Generated class for the EditPatientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-patient',
  templateUrl: 'edit-patient.html',
})
export class EditPatientPage {
  Patients;
  PatientForm: FormGroup;
  patient = {
        _i:'',
        name:'',
        cpf:'' ,
        email:'',
        phone:'',
        begin:'',
        value_payment:'',
        payment:''
  }
 

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
       payment:[this.navParams.get('payment')]
 
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPatientPage');
    
    
  }

  cancel(){
    this.navCtrl.setRoot('PatientPage');
  }

  updatePatient(_i){
    this.db.database.ref('patients/'+ _i).update(this.PatientForm.value)
    .then(() => {
      console.log("salvou");
      this.navCtrl.setRoot('PatientPage');
      const toast = this.toastCtrl.create({
        message: 'Paciente Editado',
        duration: 3000
      });
      toast.present();
      
    })
    }

}
