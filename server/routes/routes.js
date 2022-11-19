var express = require('express');
var control = require('../control/control.js');
var router = express.Router();
var axios = require('axios');

router.get('/', (req,res)=>{
    res.render('index.ejs', {});
});

router.get('/index', (req,res)=>{
    res.render('index.ejs', {});
});

router.get('/tracking', (req,res)=>{
    axios.get('http://localhost:3000/api/exercise_instance')
    .then(function(response){
        res.render('tracking.ejs', { exercise_instance : response.data });
    })
    .catch(err =>{
        res.send(err);
    })
});

router.get('/add-exercise', (req,res)=>{
    res.render('add_exercise.ejs', {});
})

router.get('/update-exercise', (req,res)=>{
    res.render('update_exercise.ejs', {});
})

//mongodb api
route.post('/api/api/exercise_instance', control.create)
route.get('/api/api/exercise_instance', control.find)
route.put('/api/api/exercise_instance/:id', control.update)
route.post('/api/api/exercise_instance', control.delete)

module.exports = router;