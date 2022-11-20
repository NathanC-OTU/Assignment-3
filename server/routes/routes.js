var express = require('express');
var control = require('../control/control.js');
var router = express.Router();
var axios = require('axios');


//splash page
router.get('/', (req,res)=>{
    res.render('index.ejs', {});
});

router.get('/index', (req,res)=>{
    res.render('index.ejs', {});
});

//routing for main tracking page, also ensures the information being displayed is up to date
router.get('/tracking', (req,res)=>{
    axios.get('http://localhost:3000/api/exercise_instance')
    .then(function(response){
        res.render('tracking.ejs', { exercise_instance : response.data });
    })
    .catch(err =>{
        res.send(err);
    })
});

//add entry / exercise page
router.get('/add-exercise', (req,res)=>{
    res.render('add_exercise.ejs', {});
})

//routing for main update page, also passes information and data
router.get('/update-exercise', (req,res)=>{
    axios.get('http://localhost:3000/api/exercise_instance',  {params:{id : req.query.id}})
        .then(function(exerdata){
            res.render('update_exercise.ejs', {exercise_instance : exerdata.data})
        })})

//mongodb api
router.post('/api/exercise_instance', control.create)
router.get('/api/exercise_instance', control.find)
router.put('/api/exercise_instance/:id', control.update)
router.delete('/api/exercise_instance/:id', control.delete)

module.exports = router;