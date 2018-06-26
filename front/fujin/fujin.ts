import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HuwaiPage} from '../huwai/huwai';
import { JiaoyuPage} from '../jiaoyu/jiaoyu';
import { SheyingPage} from '../sheying/sheying';

@IonicPage()
@Component({
  selector: 'page-fujin',
  templateUrl: 'fujin.html',
})
export class FujinPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goHuwai(){
    this.navCtrl.push(HuwaiPage);
  }
  goJiaoyu(){
    this.navCtrl.push(JiaoyuPage);
  }
  goSheying(){
    this.navCtrl.push(SheyingPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad FujinPage');
  }

}
