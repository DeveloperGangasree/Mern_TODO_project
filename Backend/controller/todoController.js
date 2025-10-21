import Todos from "../Model/toDo_Model.js";


const addTodo=async (req,res) =>{
console.log(req.body);
let { title, description }=req.body;
let todo= await Todos.create({
    title,
    description,
})
res.send(todo);
}

const getTodo=async (req,res)=>{
    console.log(req)
   let todo= await Todos.find()
    //res.send("hellooo hiiii how are youuu");
    res.send(todo);
};

const deleteTodo=async(req,res)=>{
    
       try {
        let deleted=await Todos.findByIdAndDelete(req.params.id)
        if(!deleted){
            return res.status(404).json({message:'Todo not found'})
        }
        res.json({message:'Todo deleted Successfullly'})
       } catch (error) {
        res.status(500).json(error)
       }
        
    
};

const getTodoById=async(req,res)=>{
    try {
        console.log(req.query)
        let todo=await Todos.findById(req.query.id)
       if(!todo){
            return res.status(404).json({message:'Todo not found'})
        }
        res.json(todo);
    } catch (error) {
        
    }
};

export {addTodo,getTodo,deleteTodo,getTodoById}