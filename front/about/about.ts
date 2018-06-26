import { Component,ViewChild  } from '@angular/core';
import { NavController,ModalController,Slides } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Http } from '@angular/http';
import { PopoverController } from 'ionic-angular';
import { ViewController} from 'ionic-angular';
import { PopPage} from '../pop/pop';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})

export class AboutPage {
  @ViewChild(Slides) slides: Slides;
  ngSwitch:any;
  constructor(public modalCtrl:ModalController,public navCtrl: NavController,
      public http:Http,public popoverCtrl: PopoverController,public viewCtrl: ViewController) {
  }
  ngAfterViewInit() {
    this.slides.freeMode = true;
    this.slides.loop=true;
    this.slides.autoplay=1000;
  }

  //pop弹框
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopPage);
    popover.present({
      ev: myEvent
    });
  }
 //

}
