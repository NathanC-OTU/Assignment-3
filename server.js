const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path')
const router = express();

//view engine
router.set("view engine", "ejs")

//asset load
router.use('/css', express.static(path.resolve(__dirname, "assets/css")))
router.use('/js', express.static(path.resolve(__dirname, "assets/js")))
router.use('/images', express.static(path.resolve(__dirname, "assets/images")))
router.use('/', require('./server/routes/routes'))


router.listen(3000, () => {console.log(`Server is running on http://localhost:${3000}`)});
module.exports = router;
