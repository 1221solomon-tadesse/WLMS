const express = require("express")
const bookRoute =require('./routes/booksRoutes')
const signupRoute=require('./routes/signup')
const bodyParser=require('body-parser')
const borrowRequestRoute = require('./routes/borrowRequestRoute');
const userRoutes=require('./routes/userRout')
const createAdminAccount=require('./scripts/admin')
const loginRoute=require('./routes/login')
const notificationRoute=require('./routes/notificationRoute')
const app= express()
const cors=require("cors")
require("./connection/conn")
app.use(cors())
createAdminAccount()
app.use(bodyParser.json())
app.use("/api/users", userRoutes);
app.use('/user',signupRoute)
app.use('/auth',loginRoute)
app.use(express.json())
app.use("/api/v1",bookRoute)
app.use("/api", borrowRequestRoute); 
app.use('/api',notificationRoute);
app.listen(1000,()=>{
    console.log('SERVER STARTED SUCCESSFULY ')
})