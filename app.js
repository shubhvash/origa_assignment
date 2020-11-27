const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://shubhvash:mongo1234@cluster0.m3aeq.mongodb.net/node-tuts?retryWrites=true&w=majority'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const userRouter = require('./routes/users')
app.use('/users',userRouter)

app.listen(9000, () => {
    console.log('Server started')
})