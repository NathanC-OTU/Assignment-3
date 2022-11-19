var exerciseDB = require('../model/schema.js');

//create and save added log
exports.create = (req,res) => {
    //ensure request isn't empty
    if(!req.body){
        res.status(400).send({message: "error: empty submission"});
        return;
    }

    //new exercise log
    const exercise_instance = new exerciseDB({
    exercise_type: req.body.exercise_type,
    duration: req.body.duration,
    srl: req.body.srl,
    cals: req.body.cals
    })

    //save instance in db
    exercise_instance
        .save(exerciseDB)
        .then(data => {
            res.redirect('/tracking');
        })
}

//get and return all or a single exercise
exports.find = (req, res) => {
    //check if it's a request for all or single
    if(req.query.id){
        const id = req.query.id;

        exerciseDB.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found log with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving log with id " + id})
            })

    }else{
        exerciseDB.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving information" })
            })
    }
}

//update a log by log id
exports.update = (req,res) => {
    //ensure input isn't empty
    if(!req.body){
        res.status(400).send({message: "error: empty submission"});
        return;
    }

    const id = req.params.id;
    exerciseDB.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data => {
            // error handling for log not found
            if(!data){
                res.status(404).send({ message : `Could not find log ${id}.`})
            }
            else{
                res.send(data)
            }
        })
}

//delete specified exercise log
exports.delete = (req,res) => {
    const id = req.params.id;

    exerciseDB.findByIdAndDelete(id)
        .then(data => {
            // error handling for log not found
            if(!data){
                res.status(404).send({ message : `Could not find log ${id}.`})
            }
            else{
                res.send({message: "instance deleted successfully"})
            }
        })

}