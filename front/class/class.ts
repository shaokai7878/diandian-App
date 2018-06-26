import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AboutPage } from '../about/about';
/**
 * Generated class for the MinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-class',
  templateUrl: 'class.html',
})
export class ClassPage {

  constructor(public navCtrl: NavController,public modalCtrl:ModalController, public navParams: NavParams) {
  }

  appType = 'message';
  apps: any = {
    'message': [
      {
        name: '帮宝适',
        path: 'assets/imgs/pinpai1.png'
      },
      {
        name: '债权转让',
        path: 'assets/imgs/pinpai1.png'
      },
      {
        name: '固产转让',
        path: 'assets/imgs/pinpai1.png'
      },
      {
        name: '商业保理',
        path: 'assets/imgs/pinpai1.png'
      },
      {
        name: '典当担保',
        path: 'assets/imgs/pinpai1.png'
      },
      {
        name: '融资借贷',
        path: 'assets/imgs/pinpai1.png'
      }, {
        name: '悬赏信息',
        path: 'assets/imgs/pinpai1.png'
      },
      {
        name: '尽职调查',
        path: 'assets/imgs/pinpai1.png'
      },
      {
        name: '帮宝适',
        path: 'assets/imgs/pinpai1.png'
      },
    ],
    'serve': [
      
      {
        name: '资产包转让',
        path: 'assets/imgs/xuanshang2.png'
      },
      {
        name: '债权转让',
        path: 'assets/imgs/zhuanrang1.png'
      },
      {
        name: '资产包转让',
        path: 'assets/imgs/xuanshang2.png'
      },
      {
        name: '债权转让',
        path: 'assets/imgs/zhaiquan1.png'
      }
      
    ],

  };

  getItems(type:any){
    return this.apps[type];
   
  }

  about(){
    // let profileModal = this.modalCtrl.create(AboutPage);
    // profileModal.present();
    this.navCtrl.push(AboutPage);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassPage');
  }

}
