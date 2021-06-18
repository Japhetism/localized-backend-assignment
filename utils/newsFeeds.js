const NewsFeeds = require('../fixtures/news-feeds');
const Helper = require('./helper');

const allNewsFeeds = NewsFeeds.getNewsFeeds();
    
exports.find = () => {
    return Helper.sort(allNewsFeeds);
}