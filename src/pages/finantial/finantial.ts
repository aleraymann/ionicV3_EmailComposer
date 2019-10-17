import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import { HomePage } from '../home/home';
import { AngularFireDatabase } from 'angularfire2/database';
import { EmailComposer } from '@ionic-native/email-composer';
import firebase from 'firebase';

/**
 * Generated class for the FinantialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-finantial',
  templateUrl: 'finantial.html',
})
export class FinantialPage {
  Patients;
  totalReceive = 0;
  received = 0;
  toReceive = 0;

  usuario:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public alertCtrl: AlertController,
    public db: AngularFireDatabase,
    public toastCtrl: ToastController,
    private emailComposer: EmailComposer
  ) {
    this.Patients = [];
    this.usuario = firebase.auth().currentUser;
    console.log(this.usuario.email);
    this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available) {
        //Now we know we can send
      }
     });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinantialPage');
    this.getPatients();
  }
  goPatient() {
    this.navCtrl.push('PatientPage');
  }
  goHome() {
    this.navCtrl.push(HomePage);
  }
  getPatients() {
    this.http.get('https://agendapp-6daf1.firebaseio.com/patients.json')
      .map(res => res.json())
      .subscribe(data => {
        if (data !== null && data !== undefined) {
          this.ShowPatients(data);
        }
      })
  }
  //--------------------------------------------------SHOW_PATIENTS
  ShowPatients(data) {
    this.Patients = Object.keys(data).map(i => {
      data[i]._i = i;
      this.totalReceive = this.totalReceive += parseFloat(data[i].value_payment);
      //console.log(this.totalReceive);
      if (data[i].payment != false) {
        this.received = this.received += parseFloat(data[i].value_payment);
        //console.log(this.received);
      } else {
        this.toReceive = this.totalReceive - this.received;
      }
      //console.log(this.toReceive);
      return data[i];
    });
  }
  //--------------------------------------------------Restart Finantial
  restartFinancial(payment) {
    const confirm = this.alertCtrl.create({
      title: 'Zerar Financeiro',
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

            this.http.get('https://agendapp-6daf1.firebaseio.com/patients.json')
              .map(res => res.json())
              .subscribe(data => {
                this.Patients = Object.keys(data).map(i => {
                  data[i]._i = i;
                  if (data !== null && data !== undefined) {
                    this.db.database.ref('patients/' + i).update({
                      payment: false
                    })
                  }
                })
              })
            this.navCtrl.push('HomePage');
            const toast = this.toastCtrl.create({
              message: 'Financeiro Zerado',
              duration: 3000
            });
            toast.present();
          }
        }
      ]
    });
    confirm.present();
  }
  send(){
    this.navCtrl.push("EmailSendPage");
  }

  /*send(){
    let email = {
      to: this.usuario.email,
      cc: '',
      bcc: [],
      attachments: [],
      subject: 'Relatório Mensal',
      body:  '',
      isHtml: true,
      app: 'gmail'
    };
    // Send a text message using default options
    this.emailComposer.open(email);
  }*/
  
}
