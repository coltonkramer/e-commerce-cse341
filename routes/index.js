const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/frontend/index.html'));
});
router.use('/swagger', require('./swagger'));

router.use('/routes', require('./routes'));
module.exports = router;
