import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage}from'../register/register';
import { TabsPage } from '../tabs/tabs';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goRegister(){
    this.navCtrl.push(RegisterPage);
  }
  goTabs(){
    this.navCtrl.push(TabsPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
