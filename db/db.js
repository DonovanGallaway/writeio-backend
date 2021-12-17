require('dotenv').config()
const mongoose = require('mongoose')
const config = {useUnifiedTopology: true, useNewUrlParser: true}
const {DATABASE_URL} = process.env

mongoose.connect(DATABASE_URL, config)

mongoose.connection
.on('open', () => console.log('connected to Mongo'))
.on('close', () => console.log('disconnected from Mongo'))
.on('error', () => console.log(error))