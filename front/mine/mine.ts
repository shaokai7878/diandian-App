import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SetPage} from '../set/set';
/**
 * Generated class for the MinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html',
})
export class MinePage {
  items = [
    { title: "邀请好友", link: "https://h5.m.taobao.com/mlapp/mytaobao.html#mlapp-mytaobao" },
    { title: "联系我们", link: "https://h5.m.taobao.com/mlapp/cart.html" },
    { title: "用户协议", link: "https://h5.m.taobao.com/mlapp/olist.html" },
    { title: "关于", link: "https://h5.m.taobao.com/mlapp/olist.html?spm=a2141.7756461.2.1&tabCode=waitPay" }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goSet(){
    this.navCtrl.push(SetPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MinePage');
  }

}
