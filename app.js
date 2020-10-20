const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://tyelf22:Nike2299@products.pu7kk.mongodb.net/products-db?retryWrites=true&w=majority'
const PORT = process.env.PORT || 9000

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