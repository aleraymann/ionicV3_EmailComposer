import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReminderPage } from '../reminder/reminder';
import firebase from 'firebase';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usuario:any;

  constructor(public navCtrl: NavController) {
    this.usuario = firebase.auth().currentUser;

  }
  goPatients(){
    this.navCtrl.push('PatientPage');
  }
  goFinantial(){
    this.navCtrl.push('FinantialPage');
  }
  goReminder(){
    this.navCtrl.push(ReminderPage);
  }
  goMonday(){
    this.navCtrl.push('ScheduleMondayPage');
  }
  goTuesday(){
    this.navCtrl.push('ScheduleTuesdayPage');
  }
  goWed(){
    this.navCtrl.push('ScheduleWednesdayPage');
  }
  goThursday(){
    this.navCtrl.push('ScheduleThursdayPage');
  }
  goFriday(){
    this.navCtrl.push('ScheduleFridayPage');
  }

}
