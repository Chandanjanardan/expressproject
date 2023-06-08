const mongoose = require ("mongoose")
const Schema= mongoose.Schema

const TaskSchema = new Schema({
    name:{
        type:String,
        required:[true,"all field are mendatory"],
        trim:true,
        maxlength:[20,"Name cannot be more than 20 char"]
    },
    completed:{
        type :Boolean,
        default:false
    }
})
const TaskModel = mongoose.model("Task",TaskSchema)
module.exports=TaskModel