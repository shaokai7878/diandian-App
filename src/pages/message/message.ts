import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';

/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  ngSwitch:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl:ModalController) {
  }
  back(){
    let profileModal = this.modalCtrl.create('MessagelistPage');
    profileModal.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
  }

}
