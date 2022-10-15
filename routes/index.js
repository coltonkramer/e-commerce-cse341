const express = require('express');
const router = express.Router();

// GET /feed/posts
router.use('/', require('./swagger'));
router.use('/routes', require('./routes'));
// localhost:8080/professional/
module.exports = router;
