
const express = require ("express")
const app = express()
const tasks=require("./routes/task")
const connectDB = require("./db/connect")
require('dotenv').config()

// middleware
app.use(express.json())

const PORT =3500
// Routes
app.get("/hello",(req,res)=>{
    res.status(200).send("Task manager app")
})
app.use("/api/v1/tasks",tasks)

const start=async()=>{
    try {
        // inside connectDb we are passing env file and at top we require it and config it aso
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT,()=>{
            console.log(`server is listning at port ${PORT}...`)
        })
    } catch (error) {
        console.log(error)
        
    }
}


start()


// app.get("/api/v1/tasks")--- get all the tasks
// app.post("api/v1/tasks")--- create a new task
// app.get("api/vi/tasks/:id")--- to get single task
// app.patch("api/vi/tasks/:id")--- update task
// app.delete("api/vi/tasks/:id")--- delete task