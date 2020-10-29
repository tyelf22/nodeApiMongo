const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        reuqired: true
    },
    quantity: {
        type: Number,
        required: true
    },
    manufacturer: {
        type: Schema.Types.ObjectId,
        ref: 'Manufacturer'
    }

})

module.exports = mongoose.model('Product', productSchema)