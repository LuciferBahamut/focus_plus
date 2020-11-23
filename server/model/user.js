const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema( {
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    message: {
        type: String,
        required: false,
        trim: true
    },
    video: {
        type: String,
        required: false,
        trim: true
    }
},
    {
        timestamps: true
    }
);

userSchema.plugin(uniqueValidator);

const User = mongoose.model('User', userSchema);

module.exports = User;