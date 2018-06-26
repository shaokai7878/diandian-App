/**
 * Created by Nealyang on 17/2/25.
 */
const express = require('express');

module.exports = function () {
    var router = express.Router();
    router.all('*', function(req, res, next) {
    //res.Header('Content-Type','text/plain');
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'content-type');
    next();
});
    //session
    router.use(function (req,res,next) {
        if(!req.session['user_id'] && req.url != '/login'){
            res.redirect('/admin/login');
        }else{
            next();
        }
    });
    
    router.use('/login',require('./login')());
    router.use('/blog',require('./blog')());
    router.use('/users',require('./users')());
    router.use('/shop',require('./shop')());
    router.get('/',function (req,res) {
        res.render('admin/index.ejs'); 
    });
    //router.use('/web/c-login',require('./web/c-login'));
    return router;
};