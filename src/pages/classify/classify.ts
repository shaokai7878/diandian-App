import { Component,Directive } from '@angular/core';
import { IonicPage, NavController,ModalController } from 'ionic-angular';

/**
 * Generated class for the ClassifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Directive({ selector: '[ngSwitch]' })
@Component({
  selector: 'page-classify',
  templateUrl: 'classify.html',
})
export class ClassifyPage {

  ngSwitch:any;
  constructor(public modalCtrl:ModalController,public navCtrl: NavController) {

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
  home(){
    let profileModal = this.modalCtrl.create('homePage');
    profileModal.present();
  }
  about(){
    let profileModal = this.modalCtrl.create('AboutPage');
    profileModal.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassifyPage');
  }

}
