import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JiaoyuDetailPage } from '../jiaoyu-detail/jiaoyu-detail';

/**
 * Generated class for the JiaoyuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jiaoyu',
  templateUrl: 'jiaoyu.html',
})
export class JiaoyuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goJiaoyuDetail(){
    this.navCtrl.push(JiaoyuDetailPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad JiaoyuPage');
  }

}
