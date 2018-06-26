/**
 * Created by Nealyang on 17/2/24.
 */
const express = require('express');
const mysql = require('mysql');
const common = require('../../lib/common');

const db = mysql.createPool({host:'localhost',port:3306,user:'root',database:'myserver'});

module.exports = function () {
    var router = express.Router();
    router.all('*', function(req, res, next) {
    //res.Header('Content-Type','text/plain');
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'content-type');
    next();
});
    router.get('/',function (req,res) {
       res.render('admin/login.ejs');
    });
    router.post('/',function (req,res) {
        var username = req.body.username;
        //var password = common.md5(req.body.password+common.MD5_SUFFIX);
        var password = req.body.password;
        if(username && password){
            db.query('SELECT * FROM admin_table WHERE username="'+username+'"',function (err,userData) {
                if(err){
                    console.error(err);
                    res.status(500).send({code:500,data:[],msg:'database error'});
                }else if(userData.length == 0){
                    res.status(400).send({code:400,data:[],msg:'parameters error'});
                }else{
                    if(userData[0].password != password){
                        res.status(400).send({code:400,data:[],msg:'username or password error'});
                    }else{
                        req.session['user_id'] = userData[0].ID;//注意这里是在req上面
                        res.status(200).send({code:200,data:[],msg:'success'});
                    }
                }
            })
        }else{
            res.status(400).send({code:400,data:[],msg:'parameters error'});
        }
    });
    return router;
};
