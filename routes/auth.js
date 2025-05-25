const express = require('express');
const router = express.Router();
const { signUp, signIn, forgotPassword } = require('../controllers/authController');

router.post('/signup', signUp);
router.post('/signin', signIn);
router.post('/forgot-password', forgotPassword);

module.exports = router;
