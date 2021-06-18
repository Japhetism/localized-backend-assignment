const mongoose = require('mongoose');
const validator = require('validator');

const commentSchema = new mongoose.Schema({
    request_id: {
        type: Number,
        required: true
    },
    user_id: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;