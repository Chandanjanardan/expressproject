const Task = require("../model/taskModel")

const getAllTaks=async(req,res)=>{
    try {
        // output is a object with all the task in it
        const tasks = await Task.find({})
        res.status(200).json({tasks})
        
    } catch (error) {
        res.status(500).json({msg:error})
        
    }
    
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

const getTask=async(req,res)=>{
    try {
        const {id:taskID}=req.params
        const task = await Task.findOne({_id:taskID})
    if(!task){
        return res.status(404).json({msg:`No task with id ${taskID}`})
    }
    res.status(200).json({task})


        
    } catch (error) {
        
    }
}
const updateTask=(req,res)=>{
    res.send("update task")
}
const deleteTask=(req,res)=>{
    res.send("delete task")
}


module.exports={getAllTaks,createTask,getTask,updateTask,deleteTask}