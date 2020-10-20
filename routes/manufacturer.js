const express = require('express')
const router = express.Router()
const Manufacturer = require('../models/manufacturer')

//Get all Manufacturers
router.get('/', async (req, res) => {
    try{
        const manu = await Manufacturer.find()
        res.json(manu)
    }catch(err){
        res.send(`Error ${err}`)
    }
})

//Get certain Manufacturers
router.get('/:id', async (req, res) => {
    try{
        const manu = await Manufacturer.findById(req.params.id)
        res.json(manu)
    }catch(err){
        res.send(`Error ${err}`)
    }
})

//Create Manufacturers
router.post('/', async(req, res) => {
    const manu = new Manufacturer({
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone
    })

    try{
        const newManu = await manu.save()
        res.json(newManu)
    }catch{
        res.send('Error')
    }
})

//Update Manufacturers
router.patch('/:id', async(req, res) => {
    try{
        const manu = await Manufacturer.findById(req.params.id)
        if(req.body.name){
            manu.name = req.body.name
        }
        if(req.body.address){
            manu.address = req.body.address
        }
        if(req.body.phone){
            manu.phone = req.body.phone
        }
        
        const newManu = await manu.save()
        res.json(newManu)
    }
    catch(err){
        res.send(err)
    }
})

//Delete Manufacturers
router.delete('/:id', async(req, res) => {
    try{
        const manu = await Manufacturer.findById(req.params.id)
        const newManu = await manu.remove()
        res.json(newManu)
    }
    catch(err){
        res.send(err)
    }
})


module.exports = router
