const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const manufacturerSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        reuqired: true
    },
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]

})

module.exports = mongoose.model('Manufacturer', manufacturerSchema)