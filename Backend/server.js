import express from 'express'
import connectDb from './config/db.js';
import dotenv from "dotenv";
//import Todos from "./Model/toDo_Model.js";
//import todoRoute from './routes/todoRoutes.js';
import todoRoute from './routes/todoRoutes.js';


dotenv.config()

const app=express();

   connectDb();

let PORT =process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/todo',todoRoute)

 app.listen(PORT,()=>console.log("server started"))

 //dvx63T5u9hg3UkFP  //gangalekshmiv_db_user
 //json -javascript object notation