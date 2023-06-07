const express = require("express")
const router= express.Router()
const {getAllTaks,createTask,getTask,updateTask,deleteTask}= require("../controllers/taskController")

router.get("/",getAllTaks)
router.post("/",createTask)
router.get("/:id",getTask)
router.patch("/:id",updateTask)
router.delete("/:id",deleteTask)


module.exports=router