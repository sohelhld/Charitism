const express = require('express');
var cookieParser = require('cookie-parser')

const { userRouter } = require('./routes/user.route');
const { connected } = require('./db');
const { Auth } = require('./middleware/Auth.middleware');
const { todoRouter } = require('./routes/todo.route');

require('dotenv').config();

const app = express();
app.use(cookieParser())
app.use(express.json());

app.use("/users",userRouter)
app.use(Auth)
app.use("/todo",todoRouter)




app.listen(process.env.port,async()=>{

    try {
        await connected
        console.log("Connect to mongodb server")
        
    } catch (error) {
        console.log(error)
    }
    console.log(`server is runing at ${process.env.port}`)
})