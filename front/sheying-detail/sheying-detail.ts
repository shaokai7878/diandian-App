import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { SheyingPopPage} from '../sheying-pop/sheying-pop';
/**
 * Generated class for the SheyingDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sheying-detail',
  templateUrl: 'sheying-detail.html',
})
export class SheyingDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl:PopoverController) {
  }

   //pop弹框
   presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(SheyingPopPage);
    popover.present({
      ev: myEvent
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SheyingDetailPage');
  }

}
