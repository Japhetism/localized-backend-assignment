const Status = require('../models/statusModel');
const base = require('./baseController');

exports.createStatus = base.createOne(Status);
exports.getAllStatuses = base.getAll(Status);
exports.getStatus = base.getOne(Status);

// Don't update password on this 
exports.updateStatus = base.updateOne(Status);
exports.deleteStatus = base.deleteOne(Status);