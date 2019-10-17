import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
/**
 * Generated class for the ReplacementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-replacement',
  templateUrl: 'replacement.html',
})
export class ReplacementPage {
  Patients;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController, 
    public http: Http) {

    this.Patients = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReplacementPage');
    this.getPatients();
  }
  showAlert(){
    const alert = this.alertCtrl.create({
      subTitle: 'Limpeza de tabela concluida',
      buttons: ['OK']
    });
    alert.present();
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
      console.log(data[i]);
      return data[i];
    
    });
    

  }

  addPatient(){
    const toast = this.toastCtrl.create({
      message: 'Paciente adicionado',
      duration: 3000
    });
    toast.present();
  }

}
