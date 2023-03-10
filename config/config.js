const mongoose = require("mongoose")
const connectdb = ()=>{
    try {
       mongoose.connect(process.env.database)
       console.log('database is connect')
    } catch (error) {
    console.log("error")
    }
}
module.exports=connectdb