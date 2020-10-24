const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000

require('dotenv').config();
let user = process.env.DB_USER
let pass = process.env.DB_PASS
const url = `mongodb+srv://${user}:${pass}@products.pu7kk.mongodb.net/products-db?retryWrites=true&w=majority`



const app = express()

mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology: true, useFindAndModify: true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected')
})

app.use(express.json())


const productRouter = require('./routes/products')
app.use('/products', productRouter)

const manufacturerRouter = require('./routes/manufacturer')
app.use('/manufacturer', manufacturerRouter)

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})