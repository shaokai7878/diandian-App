import { Component } from '@angular/core';
import { Http,Jsonp } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage}from'../register/register';
import { TabsPage } from '../tabs/tabs';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http:Http,public jsonp:Jsonp) {}
  goRegister(){
    this.navCtrl.push(RegisterPage);
  }
  username='';
  password='';
  goTabs(){
    if(this.username.length!=0&&this.password.length!=0){
      this.http.get('http://127.0.0.1:8080/c-login?username='+this.username+'&password='+this.password).subscribe(data=>{
          console.log(data);
          if(data['_body']==0){alert('用户名不存在');}
          if(data['_body']==1){this.navCtrl.setRoot(TabsPage);}
          if(data['_body']==3){alert("用户名与密码不匹配");}
          if(data['_body']==2){alert("用户名为空");}
          if(data['_body']==4){alert("数据库错误");}
      });
    }else{
      alert('用户名密码不能为空！');
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
