const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
var cookieParser = require('cookie-parser')
require("dotenv").config()

const { userModel } = require('../models/user.model');

const userRouter = express.Router();
userRouter.use(cookieParser())


userRouter.post("/signup",async(req,res)=>{
    const {userName,password} = req.body;
    try {
        const isUserPresent = await userModel.findOne({userName})
        if(isUserPresent) return res.status(401).send({message: 'User already exists'});

        const hash = await bcrypt.hash(password,8)

        const data = new userModel({userName,password:hash})

        await data.save()
        res.status(200).send({message: 'User saved successfully'})
        
    } catch (error) {
        res.status(404).send(error.message)
    }
})

userRouter.post("/login",async(req,res)=>{
    const {userName,password} = req.body;
    try {
        const isUserPresent = await userModel.findOne({userName})
        if(!isUserPresent) return res.status(401).send({message: 'User Not exists plz signup first'});

        const isPassWordCorrect = await bcrypt.compare(password,isUserPresent.password)
        if(!isPassWordCorrect) return res.status(401).send({message: 'Passwords is not correct'});

        const token = jwt.sign({userId:isUserPresent._id},process.env.jwtSecret,{expiresIn:"1hr"})

        res.cookie("token",token)

        res.status(200).send({message:"login succesful",token:token})

        
    } catch (error) {
        res.status(404).send(error.message)
    }
})

module.exports={userRouter}