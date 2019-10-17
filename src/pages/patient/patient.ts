import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { HomePage } from '../home/home';
import { PatientRegisterPage } from '../patient-register/patient-register';



/**
 * Generated class for the PatientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-patient',
  templateUrl: 'patient.html',
})

export class PatientPage {
 
  Patients;
  
  shownGroup = null;
  
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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController, 
    public toastCtrl: ToastController, 
    public http: Http,
    public db: AngularFireDatabase,
    ) {
    this.Patients = [];
    

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

    ionViewDidLoad() {
      console.log('ionViewDidLoad PatientPage');
      this.getPatients();
    }

    //---------------------------------------------PAGES
    goFinantial(){
      this.navCtrl.push('FinantialPage');
    }
    goHome(){
      this.navCtrl.push(HomePage);
    }
    goPaymentSlip(){
      this.navCtrl.push('PaymentSlipPage');
    }
    goPatientRegister(){
      this.navCtrl.push(PatientRegisterPage);
    }
    
    //-----------------------------------------GET_PATIENTS
    getPatients(){
      this.http.get('https://agendapp-6daf1.firebaseio.com/patients.json')
      .map(res => res.json())
      .subscribe(data => {
        if(data !== null && data !== undefined){
          this.ShowPatients(data); 
        }
      })
    }
    //--------------------------------------------------SHOW_PATIENTS
    ShowPatients(data){
      this.Patients = Object.keys(data).map(i => {
        data[i]._i = i;
        console.log(data[i].name,"-",data[i].payment);
        return data[i];
        
      });
      this.Patients.sort((a, b) => (a.name < b.name) ? -1 : 1);

    }
    //---------------------------------------------------PAYMENT_ALERT
   payment(_i,name,cpf,email,phone, begin,value_payment,payment) {
      //console.log(_i,name,cpf ,email,phone,begin,value_payment,payment);
      const confirm = this.alertCtrl.create({
        title: 'Confirmar Pagamento',
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
              //console.log('Confirmar clicado',_i);
              //console.log(_i,name,cpf ,email,phone,begin,value_payment,payment);
              this.db.database.ref('patients/'+ _i).update({
                _i:_i,
                name:name,
                cpf:cpf ,
                email:email,
                phone:phone,
                begin:begin,
                value_payment:value_payment,
                payment: true
              })
              this.navCtrl.setRoot('PatientPage');
              const toast = this.toastCtrl.create({
                message: 'Pagamento Atualizado!',
                duration: 3000
              });
              toast.present();
            }
          }
        ]
      });
      confirm.present();
    }

    //--------------------------------------------PATIENT_DELETE
    async delPatient(_i:string) {
      console.log(_i)
      const confirm = this.alertCtrl.create({
        title: 'Remover Paciente?',
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
              this.db.database.ref('patients/'+_i).remove();
              console.log(_i);
              const toast = this.toastCtrl.create({
                message: 'Paciente removido!',
                duration: 3000
              });
              toast.present();
              this.navCtrl.push(PatientPage);
            }
          }
        ]
      });
      confirm.present();
    }

    //---------------------------------------------------PATIENT_EDIT
    editPatient(_i,name,cpf,email,phone, begin,value_payment,payment) {
      //console.log(_i,name,cpf ,email,phone,begin,value_payment,payment);
      this.navCtrl.push('EditPatientPage',{
        _i:_i,
        name:name,
        cpf:cpf ,
        email:email,
        phone:phone,
        begin:begin,
        value_payment:value_payment,
        payment:payment
      });
      }
 


    //------------------------------------SEARCH_PATIENT
    searchPatients(ev) {
      // Reset items back to all of the items
      this.Patients;
  
      // set val to the value of the ev target
      var val = ev.target.value;
  
      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        this.Patients = this.Patients.filter((patient) => {
          return (patient.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
    }

     

}
