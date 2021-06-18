//const NewsFeeds = require('../models/newsFeedsModel');
const base = require('./baseController');
const NewsFeeds = require('../utils/helper/newsFeeds');

//exports.getNewsFeeds = base.getAll(NewsFeeds);

exports.getNewsFeeds = async (req, res, next) => {
    console.log("get all news feeds")
    console.log(req)
    try {
        const doc = NewsFeeds.find();
        // const features = new APIFeatures(Model.find(), req.query)
        //     .sort()
        //     .paginate();

        // const doc = await features.query;

        res.status(200).json({
            status: process.env.SUCCESS_STATUS,
            count: doc.length,
            data: doc
        });

    } catch (error) {
        next(error);
    }

};
