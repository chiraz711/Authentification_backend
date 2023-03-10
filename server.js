const express=require('express')
const dbconnect = require('./config/config')
const userrouter = require('./router/router')
require("dotenv").config()
const port=4555

const app=express()
app.use(express.json())


app.listen(port,console.log('server connected'))
dbconnect()
app.use("/api/user",userrouter)
