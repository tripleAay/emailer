const express = require("express")
const app = express()
const mongoose = require("mongoose")
const userroute = require("./Route/userrouter")
const cors = require('cors')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/user", userroute,)
app.use(cors({origin:"*"}))











app.listen("8000",()=>{
    console.log("app started");
})
const uri = "mongodb+srv://adeshina93:adeshina93@cluster0.tbizi4m.mongodb.net/jawadclass?retryWrites=true&w=majority&appName=Cluster0 `"

const connect = async()=>{
    try{
       const mongoseconnect = await mongoose.connect(uri)
       if (mongoseconnect) {
        console.log("connected to database");
       }
    }catch{
        console.log(error);
    }
} 

connect()
