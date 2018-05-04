import { Component,Directive,ViewChild } from '@angular/core';
import { NavController,Slides,ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
@Directive({ selector: '[ngSwitch]' })
export class HomePage {

  @ViewChild(Slides) slides: Slides;
  ngSwitch:any;
  constructor(public modalCtrl:ModalController,public navCtrl: NavController) {

  }
 
  ngAfterViewInit() {
    this.slides.freeMode = true;
    this.slides.loop=true;
    this.slides.autoplay=1000;
  }

  messagelist(){
    let profileModal = this.modalCtrl.create('MessagelistPage');
    profileModal.present();
  }
  classify(){
    let profileModal = this.modalCtrl.create('ClassifyPage');
    profileModal.present();
  }
}
