const express = require("express")
const bookRoute =require('./routes/booksRoutes')
const app= express()
require("./connection/conn")
app.use(express.json())
app.use("/api/v1",bookRoute
)
app.listen(1000,()=>{
    console.log('SERVER STARTED SUCCESSFULY ')
})