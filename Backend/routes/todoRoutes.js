import express from "express"
import { addTodo,getTodo,deleteTodo, getTodoById } from "../controller/todoController.js";
//import { todo } from "node:test";

const todoRoute=express.Router()

//const app=express();
//console.log("serverssss started")
todoRoute.get('/',getTodo);
todoRoute.post('/create',addTodo);
todoRoute.delete('/delete/:id',deleteTodo);
todoRoute.get('/getTododelete',getTodoById);



export default todoRoute