const express = require("express")
const { todoModel } = require("../models/todo.model")

const todoRouter = express.Router()

todoRouter.post("/add",async(req,res)=>{
    const {name,city} = req.body;
    try {

        const data = new todoModel({name,city})

        await data.save()
        res.status(200).send({message:"new todo saved successfully"})
        
    } catch (error) {
        res.status(404).send(error.message)
    }
})

todoRouter.get("/get",async(req,res)=>{

    try {
        const data= await todoModel.find()

        res.status(200).send(data)
        
    } catch (error) {
        res.status(404).send(error.message)
    }
})

todoRouter.patch("/edit/:id",async(req,res)=>{
    const payload = req.body
    const {id} = req.params 
    try {
         await todoModel.findByIdAndUpdate({_id:id}, payload)
        res.status(200).send({message:"todo is successfully updated"})
    } catch (error) {
        res.status(404).send(error.message)
    }
})

todoRouter.delete("/delete/:id",async(req,res)=>{
    const {id} = req.params 
    try {
        await todoModel.findByIdAndDelete({_id:id})
        res.status(200).send({message:"todo is successfully Delete"})
    } catch (error) {
        res.status(404).send(error.message)
    }
})

module.exports={todoRouter}