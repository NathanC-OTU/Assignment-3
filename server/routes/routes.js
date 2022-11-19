var express = require('express');
var router = express.Router();

router.get('/', (req,res)=>{
    res.render('index.ejs', {
        title: 'Home'
    });
});

router.get('/index', (req,res)=>{
    res.render('index.ejs', {
        title: 'Home'
    });
});

module.exports = router;