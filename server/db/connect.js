const mongoose = require('mongoose');
require('dotenv').config({ path: 'config.env' });

//connect to mognoDB
const conDB = async () => {
    try{
        const con = await mongoose.connect(process.env.MONGO_URI, {})

        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = conDB