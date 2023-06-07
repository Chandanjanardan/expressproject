

const getAllTaks=(req,res)=>{
    res.send("All items visible")
}

const createTask=(req,res)=>{
    res.send("Task create")
}
const getTask=(req,res)=>{
    res.send("get single task")
}
const updateTask=(req,res)=>{
    res.send("update task")
}
const deleteTask=(req,res)=>{
    res.send("delete task")
}


module.exports={getAllTaks,createTask,getTask,updateTask,deleteTask}