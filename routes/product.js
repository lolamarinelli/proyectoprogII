var express = require('express');
var router = express.Router();
let productController = require('../controllers/productController');

/* router.get('/', productController.product)
router.get('/product-add', productController.add)
router.get('/search-results', productController.results) */
router.get('/', productController.index)
router.get('/:id', productController.id)



module.exports = router;