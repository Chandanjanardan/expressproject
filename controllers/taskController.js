const Task = require("../model/taskModel")

const getAllTaks=(req,res)=>{
    res.send("All items visible")
}
// after setting model use async
const createTask=async(req,res)=>{
    try {
        const task= await Task.create(req.body)
    console.log(task)
    res.status(200).json({task})
        
    } catch (error) {
        res.status(500).json({msg:error})
        
    }
    
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