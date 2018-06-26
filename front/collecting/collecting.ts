import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { MomSayPage} from '../mom-say/mom-say'

/**
 * Generated class for the CollectingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-collecting',
  templateUrl: 'collecting.html',
})
export class CollectingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl:ModalController) {
  }
  backHome(){
    let profileModal=this.modalCtrl.create('MomSayPage');
    profileModal.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CollectingPage');
  }

}
