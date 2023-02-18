const express = require('express');
const { OpenAiController } = require('../controllers/index.js');
const router = express.Router();

router.post('/generateimage', OpenAiController.generateImage);

module.exports = router;