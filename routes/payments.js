const express = require('express');
const router = express.Router();
const { getPayments } = require('../controllers/paymentController');

router.get('/', getPayments);

module.exports = router;
