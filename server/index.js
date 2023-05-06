const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const http = require("http")
const helloRouter = require('./router/auth')

app.use(cors())
app.use(bodyParser.json())
app.use('/auth', helloRouter)

const mongoUrl = 'mongodb+srv://nurzzh:ymEMeTjrnnaWKhR5@cluster0.5qlfzha.mongodb.net/social-network-db'

mongoose.connect(mongoUrl).then(() =>{
    console.log('connected');
})

app.listen(8000,'localhost', ()=>{
    console.log('listening on *:8000');
})

