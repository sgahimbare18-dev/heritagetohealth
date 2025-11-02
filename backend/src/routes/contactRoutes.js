const express = require('express');
const { submitContact, submitPartnership } = require('../controllers/contactController');

const router = express.Router();

router.post('/contact', submitContact);
router.post('/partnership', submitPartnership);

module.exports = router;
