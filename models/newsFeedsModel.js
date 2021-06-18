const mongoose = require('mongoose');
const validator = require('validator');

const newsFeedsSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    message: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    countryCode: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const NewsFeeds = mongoose.model('newsFeeds', newsFeedsSchema);
module.exports = NewsFeeds;