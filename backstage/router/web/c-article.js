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
    router.get('/',function (req,res) 
    {
        db.query('SELECT * FROM blog_list_table', function (err, resultData) 
        {
            if (err) {
                console.error(err);
                res.status(500).send('0');
            } else 
            {
                res.jsonp(resultData);
            }
    	});
    });	
	return router;
};