import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WritingdetailPage} from '../writingdetail/writingdetail';
import { WritingPage } from '../writing/writing';
import { CollectingPage } from '../collecting/collecting';
/**
 * Generated class for the MomSayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mom-say',
  templateUrl: 'mom-say.html',
})
export class MomSayPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  GoWritingDetail(){
    this.navCtrl.push(WritingdetailPage);
  }
  writing(){
    this.navCtrl.push(WritingPage);
  }
  collecting(){
    this.navCtrl.push(CollectingPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MomSayPage');
  }

}
