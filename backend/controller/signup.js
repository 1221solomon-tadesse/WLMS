//const router=require("express").Router()
const userModel=require("../models/userModel")
const bcrypt =require('bcrypt')
 async function creatUser(req,res){
        const {name ,email ,password }=req.body
        const hashedPassword=await bcrypt.hash (password,10)
        const newUser=new userModel({
            name,
            email,
            password:hashedPassword,
            role:'user'
        })
        const savedUser=await newUser.save()
        res.status(201).json({message: 'user created succesfully',user:savedUser})
        
    }
    

module.exports={creatUser}