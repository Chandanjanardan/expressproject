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
    if(!taskID){
        return res.status(404).json({msg:`No task with id ${taskID}`})
    }
    res.status(200).json({task})
    } catch (error) {
       res.status(500).json({msg:error}) 
    }
}

const deleteTask=async(req,res)=>{
    try {
        const {id:taskID}= req.params
        const task= await Task.findOneAndDelete({_id:taskID})
        console.log(`Task with id:${taskID} deleted`)
        // res.status(200).json({msg:`${taskID} deleted`})
        if(!task){
            // rerturn is imp here
            return res.status(404).json({msg:`No task with id ${taskID}`})
        }
        
    } catch (error) {
        res.status(500).json({msg:error}) 
    }
}

const updateTask=async(req,res)=>{
    try {
        const {id:taskID}=req.params
        // res.status(200).json({id:taskID,data:req.body})
        const task = await Task.findByIdAndUpdate({_id:taskID},req.body,{
            new:true,runvalidator:true
            // when updating it will show old data above code is to change it to new one

        })
        return res.status(404).json({msg:`No task with id ${taskID}`})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}


module.exports={getAllTaks,createTask,getTask,updateTask,deleteTask}