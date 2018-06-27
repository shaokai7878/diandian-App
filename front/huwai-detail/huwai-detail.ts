import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import {HuwaiPopPage} from'../huwai-pop/huwai-pop';
/**
 * Generated class for the HuwaiDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-huwai-detail',
  templateUrl: 'huwai-detail.html',
})
export class HuwaiDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl : PopoverController) {
  }

    //pop弹框
    presentPopover(myEvent) {
      let popover = this.popoverCtrl.create(HuwaiPopPage);
      popover.present({
        ev: myEvent
      });
    }
   //

  ionViewDidLoad() {
    console.log('ionViewDidLoad HuwaiDetailPage');
  }

}
