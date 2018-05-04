import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';

/**
 * Generated class for the MessagelistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-messagelist',
  templateUrl: 'messagelist.html',
})
export class MessagelistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  message(){
    let profileModal = this.modalCtrl.create('MessagePage');
    profileModal.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagelistPage');
  }

}
