const NewsFeeds = require('../models/newsFeedsModel');
const base = require('./baseController');

exports.getNewsFeeds = base.getAll(NewsFeeds);
