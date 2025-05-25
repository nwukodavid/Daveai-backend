const express = require('express');
const router = express.Router();
const { handleWhatsApp } = require('../controllers/twilioController');

router.post('/message', handleWhatsApp);

module.exports = router;
