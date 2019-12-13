const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PropertySchema = new Schema({
    name: String,
    address: String,
    price: String,
    description: String,
    // img: { data: Buffer, contentType: String }
    user: [{type:mongoose.Schema.ObjectId,
        ref: 'User'}]
});

module.exports = mongoose.model('Property', PropertySchema);