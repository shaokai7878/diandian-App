import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http,Jsonp } from '@angular/http';
/**
 * Generated class for the WritingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-writing',
  templateUrl: 'writing.html',
})
export class WritingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public http: Http,public jsonp:Jsonp) {
  }
  title = ''
  summary = ''
  href = ''
  author = ''
  write(){
    this.http.get('http://127.0.0.1:8080/c-write?title='+this.title+'&summary='+this.summary+'&href='+this.href+'&author='+this.author).subscribe(data=>{
      console.log(data);
      if(data['_body']==1){
        alert('文章发布成功，请返回列表页查看');
        this.navCtrl.pop();
    
    };
      if(data['_body']==0){alert('文章发布异常')};
      if(data['_body']==2){alert('请填写所有选项后再发布')}
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad WritingPage');
  }

}
