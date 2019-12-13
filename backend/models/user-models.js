const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullname: String,
    email: String,
    password: String,
    properties: [{type:mongoose.Schema.ObjectId,
                    ref: 'Property'}]
});

module.exports = mongoose.model('PropAgent', UserSchema);
