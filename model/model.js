const mongoose=require('mongoose')

const Schemauser=new mongoose.Schema({
    email:String,
    password:String
})

module.exports=mongoose.model('user',Schemauser)