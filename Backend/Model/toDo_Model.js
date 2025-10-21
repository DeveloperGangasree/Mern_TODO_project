import mongoose from 'mongoose';


let todoschema= mongoose.Schema({
    title:{
        type:String,
        required:true

    },

    description:{
        type:String,
        required:true

    },
    isCompleted:{
        type:Boolean,
        default:false
    }
});
let Todos=mongoose.model('todo',todoschema)
export default Todos