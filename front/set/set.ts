import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { LoginPage} from '../login/login';
@IonicPage()
@Component({
  selector: 'page-set',
  templateUrl: 'set.html',
})
export class SetPage {
  constructor(public navCtrl: NavController,public modalCtrl:ModalController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SetPage');
  }
  // goPersonaldata(){
  //   this.navCtrl.push(PersonaldataPage);
  // }
  // goPersonalAddress(){
  //   this.navCtrl.push(PersonaladdressPage);
  // }
  // goAccountSecurity(){
  //   this.navCtrl.push(AccountsecurityPage)
  // }
  goClearTheCache(){
  }
  goLogin(){
    //this.navCtrl.push(LoginPage);
    let profileModal = this.modalCtrl.create(LoginPage);
    profileModal.present();
  }
}
