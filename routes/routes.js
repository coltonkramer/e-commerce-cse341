const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const productsControl= require('../controllers/products');
const userControl= require('../controllers/users');
const { validateProductResponse } = require('../validator/validator')

const router = express.Router();
router.use(express.json());
 
router.use(bodyParser.json());
 
router.use(bodyParser.urlencoded({
    extended: true
}));
 
router.use(cors());

// Products routes
router.get('', productsControl.getDataProducts);

router.post('/', validateProductResponse, productsControl.createProductEntry);

router.put('/:id', validateProductResponse, productsControl.updateProductEntry);

router.delete('/:id', productsControl.deleteProductEntry);

// Users routes
router.get('/users', userControl.getDataUsers);

router.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode.json({
        message: err.message,
    }));
});
module.exports = router;
