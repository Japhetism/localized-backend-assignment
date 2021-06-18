const base = require('./baseController');
const NewsFeed = require('../utils/newsFeeds');
const AppError = require('../utils/appError');
const APIFeatures = require('../utils/apiFeatures');
const Helper = require('../utils/helper');

exports.getNewsFeeds = async (req, res, next) => {
    try {
        const doc = Helper.paginate(NewsFeed.find(), req);
        res.status(200).json({
            status: process.env.SUCCESS_STATUS,
            data: doc
        });
    } catch (error) {
        next(error);
    }

};
