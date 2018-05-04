import { Component,Directive,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,Slides } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Directive({ selector: '[ngSwitch]' })
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  @ViewChild(Slides) slides: Slides;
  ngSwitch:any;
  constructor(public modalCtrl:ModalController,public navCtrl: NavController) {

  }
 
  ngAfterViewInit() {
    this.slides.freeMode = true;
    this.slides.loop=true;
    this.slides.autoplay=1000;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
