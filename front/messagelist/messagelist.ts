import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MessagePage} from '../message/message';


@IonicPage()
@Component({
  selector: 'page-messagelist',
  templateUrl: 'messagelist.html',
})
export class MessagelistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  message(){
    // let profileModal = this.modalCtrl.create(MessagePage);
    // profileModal.present();
    this.navCtrl.push(MessagePage);
  }
  // backHome(){
  //   // let profileModal = this.modalCtrl.create(HomePage);
  //   // profileModal.present();
  //   this.navCtrl.push(HomePage);
  // }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagelistPage');
  }

}
