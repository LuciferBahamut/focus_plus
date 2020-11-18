const mongoose = require('mongoose');

const forumSchema = mongoose.Schema( {
    username: {
        type: String,
        required: true,
        trim: true
    },
    video: {
        type: String,
        required: false,
        trim: true
    }
});

const Video = mongoose.model('File', forumSchema);

module.exports = Video;