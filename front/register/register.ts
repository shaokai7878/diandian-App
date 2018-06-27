import { Component } from '@angular/core';
import { Http,Jsonp } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public http: Http,public jsonp:Jsonp) {
  }
username = ''
password = ''
mes = ''
  goLogin(){
    if(this.username.length!=0&&this.password.length!=0){
      this.http.get('http://127.0.0.1:8080/c-register?username='+this.username+'&password='+this.password).subscribe(data=>{
        console.log(data);
        if(data['_body']==1)alert('恭喜您注册成功！');this.navCtrl.pop();
        if(data['_body']==0)alert("用户名已存在");
        if(data['_body']==2)alert("密码已存在");
        if(data['_body']==3)alert("数据库错误");
      });
    }else{
      alert('用户名或密码不能为空');
    }  
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
