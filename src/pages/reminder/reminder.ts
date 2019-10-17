import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { Http } from '@angular/http';

/**
 * Generated class for the ReminderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reminder',
  templateUrl: 'reminder.html',
})
export class ReminderPage {
  ReminderForm: FormGroup;
  Reminders;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    public alertCtrl: AlertController,
    private formBuilder: FormBuilder,
    public db: AngularFireDatabase,
    public toastCtrl: ToastController,
    public http: Http) 
    {
      this.ReminderForm = this.formBuilder.group({
        reminder: [null,[Validators.required, Validators.minLength(5)]],
       });
       this.Reminders = [];
  }

//-----------------------------------------------SAVE
  save(){
    //console.log(this.PatientForm.value);
    this.db.database.ref('/reminders').push(this.ReminderForm.value)
    .then(() => {
      console.log("salvou");
      this.ReminderForm.reset();
      this.navCtrl.setRoot(HomePage);
      const toast = this.toastCtrl.create({
        message: 'Lembrete Adicionado!',
        duration: 3000
      });
      toast.present();
      
    })
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ReminderPage');
    this.getReminders();
  }
//-----------------------------------------------GET REMINDERS
  getReminders(){
    this.http.get('https://agendapp-6daf1.firebaseio.com/reminders.json')
    .map(res => res.json())
    .subscribe(data => {
      if(data !== null && data !== undefined){
        this.ShowReminders(data);
      }
    })
  }

  ShowReminders(data){
    this.Reminders = Object.keys(data).map(i => {
      data[i]._i = i;
      //console.log(data[i]);
      return data[i];
    
    });

  }

  //-----------------------------------------------DELETE REMINDER
  async delReminder(_i:string) {
    console.log(_i)
    const confirm = this.alertCtrl.create({
      title: 'Remover Lembrete?',
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
            this.db.database.ref('reminders/'+_i).remove();
            console.log(_i);
            const toast = this.toastCtrl.create({
              message: 'Lembrete removido!',
              duration: 3000
            });
            toast.present();
            this.navCtrl.setRoot(HomePage);
          }
        }
      ]
    });
    confirm.present();
  }

}
