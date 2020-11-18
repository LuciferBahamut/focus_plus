const mongoose = require('mongoose');

const forumSchema = mongoose.Schema( {
    username: {
        type: String,
        required: true,
        trim: true
    },
    message: {
        type: String,
        required: false,
        trim: true
    }
});

const Message = mongoose.model('File', forumSchema);

module.exports = Message;