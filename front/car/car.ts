
import { Component,Directive } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform,ViewController } from 'ionic-angular';

/**
 * Generated class for the CarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@Directive({ selector: '[ngSwitch]' })
@IonicPage()
@Component({
  selector: 'page-car',
  templateUrl: 'car.html',
  template: `
    <ion-list>
      <ion-list-header>Ionic</ion-list-header>
      <button ion-item (click)="close()">Learn Ionic</button>
      <button ion-item (click)="close()">Documentation</button>
      <button ion-item (click)="close()">Showcase</button>
      <button ion-item (click)="close()">GitHub Repo</button>
    </ion-list>
  `
})
export class CarPage {


  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {

  }
  close() {
    this.viewCtrl.dismiss();
  }
  // appType = 'message';

  // apps: any = {
  //   'message': [
  //     {
  //       name: '资产包转让',
  //       path: 'assets/imgs/search.png'
  //     },
  //     {
  //       name: '债权转让',
  //       path: 'assets/imgs/search.png'
  //     },
  //     {
  //       name: '固产转让',
  //       path: 'assets/imgs/search.png'
  //     },
  //     {
  //       name: '商业保理',
  //       path: 'assets/imgs/search.png'
  //     },
  //     {
  //       name: '典当担保',
  //       path: 'assets/imgs/search.png'
  //     },
  //     {
  //       name: '融资借贷',
  //       path: 'assets/imgs/search.png'
  //     }, {
  //       name: '悬赏信息',
  //       path: 'assets/imgs/search.png'
  //     },
  //     {
  //       name: '尽职调查',
  //       path: 'assets/imgs/search.png'
  //     }
  //   ],
  //   'serve': [
      
  //     {
  //       name: '资产包转让',
  //       path: 'assets/imgs/search.png'
  //     },
  //     {
  //       name: '债权转让',
  //       path: 'assets/imgs/search.png'
  //     },
  //     {
  //       name: '资产包转让',
  //       path: 'assets/imgs/search.png'
  //     },
  //     {
  //       name: '债权转让',
  //       path: 'assets/imgs/search.png'
  //     }
      
  //   ],

  // };
  // getItems(type:any){
  //   return this.apps[type];
   
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarPage');
  }

}
