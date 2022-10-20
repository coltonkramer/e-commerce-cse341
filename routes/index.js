const express = require('express');
const router = express.Router();

// GET /feed/posts
router.use('/', require('./swagger'));
router.use('/routes', require('./routes'));
module.exports = router;
