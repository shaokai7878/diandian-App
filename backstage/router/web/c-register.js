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
        console.log(username,password);
        db.query('SELECT * FROM admin_table',function (err,selectData){
            if(err){
                console.error(err);
                res.send('3');
            }else
            {
                if(selectData.username===username){res.send('0')}//用户名已存在
                    else if(selectData.password===password){res.send('2')}//密码已存在
                        else{
                            db.query('INSERT INTO admin_table (username,password) VALUE("' + username + '","' +
                                password + '")', function (err, data) {
                                {
                                    res.send('1');
                                }
                            }); 
                        }    
            }
        });    
    });
    return router;
};