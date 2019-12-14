const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullname: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: String,
    password: String,
    properties: [{type:mongoose.Schema.ObjectId,
                    ref: 'Property'}]
});

module.exports = mongoose.model('PropAgent', UserSchema);
