const express = require('express')
const router = express.Router()
const Product = require('../models/products')

//Get all products
router.get('/', async (req, res) => {
    try{
        const products = await Product.find()
        res.json(products)
    }catch(err){
        res.send(`Error ${err}`)
    }
})

//Get certain products
router.get('/:id', async (req, res) => {
    try{
        const product = await Product.findById(req.params.id)
        res.json(product)
    }catch(err){
        res.send(`Error ${err}`)
    }
})

//Create Products
router.post('/', async(req, res) => {
    const product = new Product({
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        quantity: req.body.quantity
    })

    try{
        const newProd = await product.save()
        res.json(newProd)
    }catch{
        res.send('Error')
    }
})

//Update Products
router.patch('/:id', async(req, res) => {
    try{
        const product = await Product.findById(req.params.id)
        if(req.body.name){
            product.name = req.body.name
        }
        if(req.body.category){
            product.category = req.body.category
        }
        if(req.body.price){
            product.price = req.body.price
        }
        if(req.body.quantity){
            product.quantity = req.body.quantity
        }
        
        const newProd = await product.save()
        res.json(newProd)
    }
    catch(err){
        res.send(err)
    }
})

//Delete products
router.delete('/:id', async(req, res) => {
    try{
        const product = await Product.findById(req.params.id)
        const newProd = await product.remove()
        res.json(newProd)
    }
    catch(err){
        res.send(err)
    }
})


module.exports = router
