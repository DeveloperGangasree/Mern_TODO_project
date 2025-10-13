import express from 'express'
import connectDb from './config/db.js';
import dotenv from "dotenv";

dotenv.config()

const app=express()

   connectDb ()

let PORT =process.env.PORT

app.use(express.json)
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    console.log(req)
    res.send("hellooo hiiii how are youuu")
})

app.post("/create", async (req,res) =>{
console.log(req.body);
})
 app.listen(PORT,()=>console.log("server started"))

 //dvx63T5u9hg3UkFP  //gangalekshmiv_db_user
 //json -javascript object notation