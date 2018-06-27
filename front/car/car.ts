import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Checkbox } from 'ionic-angular';
import { Http,Jsonp} from'@angular/http';
/**
 * Generated class for the CarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-car',
  templateUrl: 'car.html',
})
export class CarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public jsonp:Jsonp) {
  }
  allPrice;
  shop_list:Array<any>;
  ionViewWillEnter(){
    this.jsonp.get('http://127.0.0.1:8080/c-car?callback=JSONP_CALLBACK').subscribe(data=>{
      console.log(data['_body']);
      this.shop_list=data['_body'];
    },err=>{
      console.log(err);
    });
  }

  //商品添加
  addNum(index){
      ++this.shop_list[index].count; 
      let finalPrice = 0;
      let ll = document.getElementsByClassName("check");
      for(let i =0;i<this.shop_list.length;i++){
        if(ll[i].checked===true)
        { 
          finalPrice+=(this.shop_list[i].count*this.shop_list[i].ID);
        }
      }
    this.allPrice = finalPrice;
  }
 //商品减少
 reduceNum(index){
   if(this.shop_list[index].count===0)return 
    --this.shop_list[index].count;
    let finalPrice = 0;
      let ll = document.getElementsByClassName("check");
      for(let i =0;i<this.shop_list.length;i++){
        if(ll[i].checked===true)
        { 
          finalPrice+=(this.shop_list[i].count*this.shop_list[i].ID);
        }
      }
    this.allPrice = finalPrice;
 }
//计算商品总价格
numAllPrice(e){
  let ll = document.getElementsByClassName("check");
  let finalPrice = 0;
  if(e.target.checked===false){
    for(let i =0;i<this.shop_list.length;i++){
      ll[i].checked=e.target.checked;
    }
    this.allPrice=0;
  }else{
    for(let i =0;i<this.shop_list.length;i++){
      ll[i].checked=e.target.checked;
      finalPrice+=(this.shop_list[i].count*this.shop_list[i].ID);
    }
    this.allPrice = finalPrice;
  }  
}
//计算单个商品价格
calculate(){
  let finalPrice = 0;
  let ll = document.getElementsByClassName("check");
  for(let i =0;i<this.shop_list.length;i++){
    if(ll[i].checked===true)
    { 
      finalPrice+=(this.shop_list[i].count*this.shop_list[i].ID);
    }
  }
  this.allPrice = finalPrice;
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad CarPage');
  }

}
