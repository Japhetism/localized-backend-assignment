const NewsFeeds = require('../fixtures/news-feeds');

const allNewsFeeds = NewsFeeds.getNewsFeeds();
    
exports.find = () => {
    return allNewsFeeds;
}