import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the HuwaiPopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-huwai-pop',
  templateUrl: 'huwai-pop.html',
})
export class HuwaiPopPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
  }

  name='户外游乐园门票'
  count=''
  pic_header='/files/upload/0dfb1461b64c14661a76102d42b1e7a0.jpeg'

  goCar(){
    this.http.get('http://127.0.0.1:8080/c-shop?name='+this.name+'&count='+this.count+'&pic_header='+this.pic_header).subscribe(data=>{
    console.log(data);  
    if(data['_body']==0){alert('请选择商品数量')}
    if(data['_body']==1){
        alert('添加成功，请在购物车页面查看');
        this.navCtrl.pop();
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HuwaiPopPage');
  }

}
