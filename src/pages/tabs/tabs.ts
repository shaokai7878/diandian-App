import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MessagelistPage } from '../messagelist/messagelist';
import { MessagePage} from '../message/message';
import { ClassifyPage } from '../classify/classify';
import { DetailPage } from '../detail/detail';
import { GoodsPage } from '../goods/goods';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = MessagelistPage;
  tab5Root = MessagePage;
  tab6Root = ClassifyPage;
  tab7Root = DetailPage;
  tab8Root = GoodsPage;

  constructor() {

  }
}
