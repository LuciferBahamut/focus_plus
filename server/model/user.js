/* Example of schema for MongoDB (example is an idea for user for forum's part)
const mongoose = require('mongoose');

const userSchema = mongoose.Schema( {
    username: {
        type: String,
        required: true,
        trim: true
    },
    message: {
        type: String,
        required: true,
        trim: true
    }
    },
    {
        timestamps: true
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
*/