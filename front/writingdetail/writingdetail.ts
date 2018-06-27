import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http,Jsonp } from '@angular/http';
/**
 * Generated class for the WritingdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-writingdetail',
  templateUrl: 'writingdetail.html',
})
export class WritingdetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public jsonp:Jsonp,public http:Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WritingdetailPage');
  }
  blog_list:Array<any>;
  ngOnInit(){
    this.jsonp.get('http://127.0.0.1:8080/c-article?callback=JSONP_CALLBACK').subscribe(data=>{
      console.log(data['_body']);
      this.blog_list=data['_body'];
    },err=>{
      console.log(err);
    });
  }
}
