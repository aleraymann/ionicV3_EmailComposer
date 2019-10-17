import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { EmailComposer } from '@ionic-native/email-composer';
import firebase from 'firebase';

/**
 * Generated class for the EmailSendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-email-send',
  templateUrl: 'email-send.html',
})
export class EmailSendPage {
  Patients;
  totalReceive = 0;
  received = 0;
  toReceive = 0;

  usuario:any;

  subject:"";
  body:"";
  
  dataName;
  dataPay;
  

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
    console.log('ionViewDidLoad EmailSendPage');
    this.getPatients();
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
      console.log(data[i].name,"-",data[i].payment);
      this.dataName = data[i].name;
      this.dataPay = data[i].payment;
      return data[i];
    });
  }

  send(){
    let email = {
      to: this.usuario.email,
      cc: '',
      bcc: [],
      attachments: [],
      subject: 'Relatório do mês de '+ this.subject,
      body:  this.body,
      isHtml: true,
      app: 'gmail'
    };
    // Send a text message using default options
    this.emailComposer.open(email);
  }

}
