import { Component,Directive,ViewChild  } from '@angular/core';
import { NavController,ModalController,Slides } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  @ViewChild(Slides) slides: Slides;
  ngSwitch:any;
  constructor(public modalCtrl:ModalController,public navCtrl: NavController) {

  }
 
  ngAfterViewInit() {
    this.slides.freeMode = true;
    this.slides.loop=true;
    this.slides.autoplay=1000;
  }
  back(){
    let profileModal = this.modalCtrl.create('ClassifyPage');
    profileModal.present();
  }
}
