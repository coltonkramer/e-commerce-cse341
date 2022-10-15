const express = require('express');

const productsControl= require('../controllers/products');
const userControl= require('../controllers/users');

const router = express.Router();

// Products routes
router.get('/', productsControl.getDataProducts);

router.get('/:id', productsControl.getDataProductsById);

router.post('/', productsControl.createProductEntry);

router.delete('/:id', productsControl.deleteProductEntry);

// Users routes
router.get('/users', userControl.getDataUsers);

// router.get('/:id', contactsControl.getDataById);


// router.put('/:id', contactsControl.updateContact);

// router.delete('/:id', contactsControl.deleteContact);

module.exports = router;
