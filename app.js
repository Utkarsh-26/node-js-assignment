const express = require('express')
const data = require('./data')
const app = express()

app.use(express.json())

app.get('/absentDays', async(req,res)=>{
    try{
        res.send(data.absentDays)
    }
    catch(e){
        res.status(400).send()
    }
})

app.get('/absentDetails', async(req,res)=>{
    try{
        res.send(data.absentDetails)
    }
    catch(e){
        res.status(400).send()
    }
})

app.get('/leaveBalance', async(req,res)=>{
    try{
        res.send(data.leaveBalance)
    }
    catch(e){
        res.status(400).send()
    }
})

app.get('/holidayCalender', async(req,res)=>{
    try{
        res.send(data.holidayCalender)
    }
    catch(e){
        res.status(400).send()
    }
})

app.listen(3000, ()=>{
    console.log('Up and running')
})