/**
 * Created by Nealyang on 17/2/25.
 */
const express = require('express');
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    port: 3306,
    database: 'myserver'
});

module.exports = function () {
    var router = express.Router();
    router.all('*', function(req, res, next) {
    //设置跨域访问
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'content-type');
    next();
});
    router.get('/', function (req, res) {
        var title = req.query.title;
        var author = req.query.author;
        var summary = req.query.summary;
        var href = req.query.href;
        console.log('title:',title);
        console.log('author:',author);
        console.log('summary:',summary);
        console.log('href:',href);
        if (title && author && summary && href) 
        {
            db.query('INSERT INTO blog_list_table (title,author,summary,href) VALUE("' + title + '","' + author + '","' + summary + '","' + href + '")', function (err, data) {
                if (err) {
                    console.error(err);
                    res.send('0');
                } else {
                   res.send('1');
                }
            });
        } else {
            res.send('2')//标题为空;
        }

    });
    return router;
};
