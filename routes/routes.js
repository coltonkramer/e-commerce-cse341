const express = require('express');

const productsControl= require('../controllers/products');
const userControl= require('../controllers/users');

const router = express.Router();

// Products routes
router.get('', productsControl.getDataProducts);

router.post('/', productsControl.createProductEntry);

router.delete('/:id', productsControl.deleteProductEntry);

// Users routes
router.get('/users', userControl.getDataUsers);

module.exports = router;
