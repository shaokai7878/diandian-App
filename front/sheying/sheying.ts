import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SheyingDetailPage} from '../sheying-detail/sheying-detail';
/**
 * Generated class for the SheyingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sheying',
  templateUrl: 'sheying.html',
})
export class SheyingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goSheyingDetail(){
    this.navCtrl.push(SheyingDetailPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SheyingPage');
  }

}
