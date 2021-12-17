const mongoose = require('mongoose')

const {Schema, model} = mongoose

const goalSchema = new Schema({
    username: {type: String, required: true},
    wordGoal: Number,
    goalMet: Boolean,
    text: String
}, {timestamps: true})

const Goal = model('Goal', goalSchema)

module.exports = Goal