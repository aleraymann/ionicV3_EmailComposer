import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fire: AngularFireAuth,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public menu: MenuController) {
  }
  //---------------------------------------------- Menu lateral
  ionViewDidEnter() {
    this.menu.enable(false);
  }
  ionViewWillLeave() {
    this.menu.enable(true);
  }
  //----------------------------------------------Alert
  alert(message: string) {
    this.alertCtrl.create({
      title: 'Aviso',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  goUserRegister() {
    this.navCtrl.push('UserRegisterPage');
  }
  //----------------------------------------------Logar com Senha
  logar() {
    this.fire.auth.signInWithEmailAndPassword(this.user.value, this.password.value)
      .then(data => {
        console.log('data', data);
        this.navCtrl.setRoot(HomePage);
        const toast = this.toastCtrl.create({
          message: 'Bem Vindo!',
          duration: 3000
        });
        toast.present();
      })
      .catch((error: any) => {
        if (error.code == 'auth/invalid-email') { this.alert("E-mail inválido"); }
        else if (error.code == 'auth/user-disabled') { this.alert("Usuário Desativado"); }
        else if (error.code == 'auth/user-not-found') { this.alert("Usuário Não Encontrado."); }
        else if (error.code == 'auth/wrong-password') { this.alert("Senha Incorreta."); }
      })
  }

  //---------------------------------------------- Logar Google
  logarComGoogle() {
    this.fire.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(res => {
        this.navCtrl.setRoot(HomePage);
        const toast = this.toastCtrl.create({
          message: 'Bem Vindo!',
          duration: 3000
        });
        toast.present();
      })
  }

  //---------------------------------------------- Reset Password
  resetPassword() {
    if (this.user.value != "") {
      var auth = firebase.auth();
      var emailAddress = this.user.value;
      const toast = this.toastCtrl.create({
        message: 'Email Enviado!',
        duration: 3000
      });
      toast.present();
      auth.sendPasswordResetEmail(emailAddress).then(function () {

      }).catch(function (error) {

      });
    } else {
      this.alert("Informe seu Email para redefinição de senha!");
    }
  }
}
