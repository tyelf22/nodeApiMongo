const mongoose = require('mongoose')

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
    }

})

module.exports = mongoose.model('Manufacturer', manufacturerSchema)