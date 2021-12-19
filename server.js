///////////////////////////
// Dependencies
///////////////////////////

require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const mongoose = require('./db/db')
const cors = require('cors')
const app = express()
const AuthRouter = require('./controllers/user')
const auth = require('./auth/index.js')

const GoalRouter = require('./controllers/goal')

const {PORT} = process.env

module.exports = mongoose

///////////////////////////
// Middleware
///////////////////////////

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

///////////////////////////
// Routes
///////////////////////////

app.get('/', auth, (req,res) => {
    res.json(req.payload)
})

app.use('/auth', AuthRouter)
app.use('/tweet', GoalRouter)

app.listen(PORT, () => {console.log(`listening on port ${PORT}`)})