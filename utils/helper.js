const { calculateLimitAndOffset, paginate } = require('paginate-info');

exports.paginate = (doc, req) => {
    const { query: { currentPage, pageSize } } = req;
    const { limit, offset } = calculateLimitAndOffset(currentPage, pageSize);
    const count = doc.length;
    const paginatedData = doc.slice(offset, offset + limit);
    const paginationInfo = paginate(currentPage, count, paginatedData, limit);
    return {
        responseData: paginatedData,
        metaData: paginationInfo
    }
}

exports.sort = (doc, sort = 'date') => {
    return doc.sort((a,b) => (a[sort] > b[sort]) ? 1 : ((b[sort] > a[sort]) ? -1 : 0))
}