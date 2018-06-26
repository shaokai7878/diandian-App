import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';

import { HomePage} from '../home/home';
import { MomSayPage } from '../mom-say/mom-say';
import { FujinPage } from '../fujin/fujin';
import { CarPage } from '../car/car';
import { MinePage} from '../mine/mine';
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = MomSayPage;
  tab3Root = FujinPage;
  tab4Root = CarPage;
  tab5Root = MinePage;
  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
