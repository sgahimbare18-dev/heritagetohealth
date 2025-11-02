const express = require('express');
const { chatWithClara } = require('../controllers/chatbotController');

const router = express.Router();

router.post('/chat', chatWithClara);

module.exports = router;
