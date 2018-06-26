/**
 * Created by Nealyang on 17/2/25.
 */
const express = require('express');

module.exports = function () {
	//设置跨域访问
    var router = express.Router();
    router.all('*', function(req, res, next) {
	    //res.Header('Content-Type','text/plain');
	    res.header("Access-Control-Allow-Origin","*");
	    res.header('Access-Control-Allow-Methods','PUT, GET, POST, DELETE, OPTIONS');
	    res.header('Access-Control-Allow-Headers', 'content-type');
	    next();
	});
	//设置路由
	router.use('/c-login',require('./c-login')());
	router.use('/c-shop',require('./c-shop')());
	router.use('/c-article',require('./c-article')());
	router.use('/c-register',require('./c-register')());
	router.use('/c-write',require('./c-write')());
	router.use('/c-car',require('./c-car')());
	//在get中设置路由操作
    router.get('/',function (req,res) {
       res.send('这是前端页面');
    });
    return router;
};