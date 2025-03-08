const express = require("express")
const cors = require("cors")
const {addUser} = require("./dbManager")
const app = express()

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).json({message:"Server is running"});
})

app.post("/api/user",async (req,res)=>{
   const response =  await addUser(req.body.email,req.body.password);
    if(!response){
        res.status(409).json({message:"User already exists"})
    }
    res.status(201).json({message:response})
})
app.listen(3000,()=>console.log("server is running"))