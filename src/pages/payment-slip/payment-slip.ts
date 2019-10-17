import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the PaymentSlipPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment-slip',
  templateUrl: 'payment-slip.html',
})
export class PaymentSlipPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentSlipPage');
  }
  presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Compartilhar',
      buttons: [
        {
          text: 'Email',
          role: 'email',
          handler: () => {
            console.log('Email clicado');
          }
        },{
          text: 'Whatsapp',
          role: 'whatsapp',
          handler: () => {
            console.log('whatsapp clicado');
          }
        },{
          text: 'Cancelar',
          role: 'cancelar',
          handler: () => {
            console.log('Cancelar clicado');
          }
        }
      ]
    });
    actionSheet.present();
  }
  goHome(){
    this.navCtrl.push(HomePage);
  }

}
