const mongoose = require ("mongoose")
const Schema= mongoose.Schema

const TaskSchema = new Schema({
    name:String,
    completed:Boolean
})
const TaskModel = mongoose.model("Task",TaskSchema)
module.exports=TaskModel