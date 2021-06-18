const express = require('express');
const router = express.Router();
const statusController = require('../controllers/statusController');

router
    .route('/statuses')
    .post(statusController.createStatus)
    .get(statusController.getAllStatuses);


router
    .route('/statuses/:id')
    .get(statusController.getStatus)
    .patch(statusController.updateStatus)
    .delete(statusController.deleteStatus);

module.exports = router;