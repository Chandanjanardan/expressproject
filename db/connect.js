const mongoose = require("mongoose")

const connectionString='mongodb+srv://00chandan95:1234@cluster0.rpxmwai.mongodb.net/task-manager?retryWrites=true&w=majority'

const connectDB=(url)=>{
   return mongoose.connect(connectionString,{

        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
}
module.exports=connectDB 