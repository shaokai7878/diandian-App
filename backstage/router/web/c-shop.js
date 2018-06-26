const express = require('express');
const mysql = require('mysql');
const fs = require('fs');
const pathLib = require('path');
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    port:3306,
    database: 'myserver'
});
module.exports = function () 
{
    var router = express.Router();
    router.all('*', function(req, res, next) {
        //res.Header('Content-Type','text/plain');
        res.header("Access-Control-Allow-Origin","*");
        res.header('Access-Control-Allow-Methods','PUT, GET, POST, DELETE, OPTIONS');
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header('Access-Control-Allow-Headers', 'content-type');
        next();
    });
    
    router.get('/', function (req, res) 
    {
        var name = req.query.name;
        var count = req.query.count;
        var pic_header = req.query.pic_header;
        console.log('name:',name);
        console.log('count:',count);
        console.log('pic_header:',pic_header);
        if(count==null){
            res.send('0');
        }else{
            db.query('INSERT INTO shop_table (username,count,pic_header) VALUE("' + name + '","' +
                count + '","' + pic_header + '")', function (err, resultData) {
                if (err) {
                    console.error(err);
                    res.status(500).send({code: 500, msg: 'database error'});
                } else {
                    res.send('1');
                }
            });          
        }    
    });  
    return router;
};