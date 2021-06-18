const express = require('express');
const router = express.Router();
const newsFeedsController = require('../controllers/newsFeedsController');

router
    .route('/news-feeds')
    .get(newsFeedsController.getNewsFeeds);

module.exports = router;