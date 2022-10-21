const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = express.Router();


router.use('/', require('./swagger'));
router.use('/routes', require('./routes'));
module.exports = router;
