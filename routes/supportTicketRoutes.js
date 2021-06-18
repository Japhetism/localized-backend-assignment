const express = require('express');
const router = express.Router();
const supportTicketController = require('../controllers/supportTicketController');

router
    .route('/support-tickets')
    .post(supportTicketController.createSupportTicket)
    .get(supportTicketController.getAllSupportTickets);


router
    .route('/support-tickets/:id')
    .get(supportTicketController.getSupportTicket)
    .patch(supportTicketController.updateSupportTicket)
    //.delete(roleController.deleteRole);

module.exports = router;