const express=require('express')
const { Register, Login } = require('../controller/controller')

const userrouter=express.Router()

userrouter.post('/adduser',Register)
userrouter.post("/login",Login)

module.exports=userrouter