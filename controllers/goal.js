const Goal = require('../models/goal')
const User = require('../models/user')

const {Router} = require('express')
const router = Router()

router.get('/', async (req,res) => {
    try{
        res.status(200).json(await Goal.find({}))
    } catch (error){
        res.status(400).json({error})
    }
})

router.post('/', async (req,res) => {
    try {
        res.status(200).json(await Goal.create(req.body))
    } catch (error){
        res.status(400).json({error})
    }
})

router.put('/:id', async (req,res) => {
    try {
        res.status(200).json(await Goal.findByIdAndUpdate(req.params.id, req.body, {new:true}))
    } catch (error){
        res.status(400).json({error})
    }
})

router.delete('/:id', async (req,res) => {
    try {
        res.status(200).json(await Goal.findByIdAndRemove(req.params.id))
    } catch (error){
        res.status(400).json({error})
    }
})