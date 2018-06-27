import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { JiaoyuPopPage} from '../jiaoyu-pop/jiaoyu-pop';
/**
 * Generated class for the JiaoyuDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jiaoyu-detail',
  templateUrl: 'jiaoyu-detail.html',
})
export class JiaoyuDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
  }

    //pop弹框
    presentPopover(myEvent) {
      let popover = this.popoverCtrl.create(JiaoyuPopPage);
      popover.present({
        ev: myEvent
      });
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JiaoyuDetailPage');
  }

}
