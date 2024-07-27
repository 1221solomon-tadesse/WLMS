const express =require('express')
const signuControler=require('../controller/signup')
 const router=express.Router()
 
 router.post('/register',signuControler.creatUser)
 module.exports=router;