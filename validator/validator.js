const { check } = require('express-validator');
 
exports.validateProductResponse = [
    check('sku', "SKU is a required field").not().isEmpty(),
    check('name',"Name is a required field").not().isEmpty(),
    check('color', "Color is a required field").not().isEmpty(),
    check('price', "Price is a required field").not().isEmpty(),
    check('img', "Image URL is a required field").not().isEmpty(),
    check('manufacturer', "Manufacturer is a required field").not().isEmpty(),
    check('size', "Size is a required field").not().isEmpty()
]
