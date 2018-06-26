const express = require('express');
const mysql = require('mysql');
const db = mysql.createPool({
	host:'localhost',
	port:3306,
	user:'root',
	database:'myserver'
});
module.exports = function () 
{
	//设置跨域访问
    var router = express.Router();
    router.all('*', function(req, res, next) {
	    res.header("Access-Control-Allow-Origin","*");
	    res.header('Access-Control-Allow-Methods','PUT, GET, POST, DELETE, OPTIONS');
	    res.header('Access-Control-Allow-Headers', 'content-type');
	    next();
	});
	//设置路由操作
    router.get('/',function (req,res) {
        var username = req.query.username;
        var password = req.query.password;
        if(username && password){
            db.query('SELECT * FROM admin_table WHERE username="'+username+'"',function (err,userData) {
                if(err){
                    console.error(err);
                    res.status(500).send('0');//用户名不存在
                }else if(userData.length == 0){
                    res.status(400).send('2');//用户名为空
                }else{
                    if(userData[0].password != password){
                        res.status(400).send('3');//用户名密码不匹配
                    }else{
                        res.status(200).send('1');
                    }
                }
            })
        }else{
            res.send('4');
        }
    });
	return router;
};