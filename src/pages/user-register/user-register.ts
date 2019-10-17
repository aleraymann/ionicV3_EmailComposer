import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';


import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import firebase from 'firebase';


/**
 * Generated class for the UserRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-register',
  templateUrl: 'user-register.html',
})
export class UserRegisterPage {
  @ViewChild('username') user;
  @ViewChild('password') password;


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,private fire: AngularFireAuth,public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserRegisterPage');
  }
  //----------------------------------------------Register
  registrar(){
    this.fire.auth.createUserWithEmailAndPassword(this.user.value, this.password.value)
    .then(data => {
      var user = firebase.auth().currentUser;
      user.sendEmailVerification().then(function() {//-------------Email
      // Email sent.
      }).catch(function(error) {
        // An error happened.
      });
      console.log('data', data);
      this.navCtrl.setRoot(LoginPage);
      const toast = this.toastCtrl.create({
        message: 'Registrado com sucesso!',
        duration: 3000
      });
      toast.present();
    })
    .catch((error : any) => {
      if(error.code == 'auth/email-already-in-use') {this.alert("E-mail já cadastrado");}
      else if(error.code == 'auth/invalid-email'){ this.alert("E-mail inválido");}
      else if(error.code == 'auth/operation-not-allowed') {this.alert("A conta precisa ser ativada.");}
      else if(error.code == 'auth/weak-password') {this.alert("A senha é muito fraca");}
    })
   
  }
  //----------------------------------------------Alert
  alert(message : string){
    this.alertCtrl.create({
      title: 'Aviso',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

}
