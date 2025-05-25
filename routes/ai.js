const express = require('express');
const router = express.Router();
const { handleMessage, handleVoice, handleImage } = require('../controllers/aiController');

router.post('/message', handleMessage);
router.post('/voice', handleVoice);
router.post('/image', handleImage);

module.exports = router;
