import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WritingdetailPage} from '../writingdetail/writingdetail';
import { WritingPage } from '../writing/writing';
import { CollectingPage } from '../collecting/collecting';
import { Http,Jsonp } from '@angular/http';
import { ChangeDetectorRef } from '@angular/core'; 
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

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public jsonp:Jsonp,public cd: ChangeDetectorRef) {
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
 blog_list:Array<any>;
  ionViewDidLoad() {
    console.log('ionViewDidLoad MomSayPage');
    
  }
  
  ionViewWillEnter(){
    this.cd.detectChanges();
    this.jsonp.get('http://127.0.0.1:8080/c-article?callback=JSONP_CALLBACK').subscribe(data=>{
      console.log(data['_body']);
      //console.log(data['_body']);
      this.blog_list=data['_body'];
    },err=>{
      console.log(err);
    });
  }

}
