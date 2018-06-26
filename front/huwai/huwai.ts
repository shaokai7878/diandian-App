import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HuwaiDetailPage} from'../huwai-detail/huwai-detail';

@IonicPage()
@Component({
  selector: 'page-huwai',
  templateUrl: 'huwai.html',
})
export class HuwaiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goHuwaiDetail(){
    this.navCtrl.push(HuwaiDetailPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HuwaiPage');
  }

}
