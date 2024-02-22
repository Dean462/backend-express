const demo = require('express')
const dotenv = require('dotenv').config()

const app = demo()

port = process.env.PORT || 4000

app.get("/api/contact",(req,res)=>{
    res.status(200).json({message: 'this is contact data'})
})

app.post("/api/login",(req,res)=>{
    res.status(200).json({message: `this is login`})
})

app.put('/api/update/:id',(req,res)=>{
    const id = req.params.id
    res.status(200).json({message: `username is updated ${id}`})
})

app.delete("/api/delete/:id",(req,res)=>{
    const id =req.params.id
    res.status(200).json({message: `username is deleted ${id}`})
})

app.listen(port,()=>{
    console.log(`this is port number ${port}`)
})

