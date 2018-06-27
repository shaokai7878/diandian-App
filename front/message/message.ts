import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl:ModalController) {
  }

  // Messagelist(){
  //   // let profileModal = this.modalCtrl.create(MessagelistPage);
  //   // profileModal.present();

  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
  }

}
