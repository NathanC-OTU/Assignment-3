var express = require('express');
var control = require('../control/control.js')
var router = express.Router();

router.get('/', (req,res)=>{
    res.render('index.ejs', {});
});

router.get('/index', (req,res)=>{
    res.render('index.ejs', {
    });
});

router.get('/tracking', (req,res)=>{
    res.render('tracking.ejs', {
    });
});

router.get('/add-exercise', (req,res)=>{
    res.render('add_exercise.ejs', {
    });
})

//mongo

module.exports = router;