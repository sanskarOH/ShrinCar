const express = require("express")
const mongoose = require("mongoose")

require('dotenv').config()

const app = express()


app.listen(process.env.PORT || 5000 , (error) =>{
    console.log("Server Started on 5000 ")
})

mongoose
 .connect(process.env.DATABASE_URL)
 .then(()=>{console.log("Connect to DataBase")})
 .catch((error)=>{console.log(`${error}`)})