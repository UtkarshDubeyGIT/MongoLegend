const mongoose = require('mongoose')
require('dotenv').config();
const db = ()=> {
     mongoose.connect(process.env.MONGODB_URI,{

    })
    .then(()=>{
        console.log("connection with db successful");
        process.exit(0)
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    })
}
module.exports = db;