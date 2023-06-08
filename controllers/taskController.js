const Task = require("../model/taskModel")

const getAllTaks=(req,res)=>{
    res.send("All items visible")
}

const createTask=(req,res)=>{
    res.json(req.body)
}
const getTask=(req,res)=>{
    res.json({id:req.params.id})
}
const updateTask=(req,res)=>{
    res.send("update task")
}
const deleteTask=(req,res)=>{
    res.send("delete task")
}


module.exports={getAllTaks,createTask,getTask,updateTask,deleteTask}