var express = require('express');
var router = express.Router();
let productController = require('../controllers/productController');


router.get('/:id', productController.show)
router.get('/:id', productController.id)
router.get('/product-add', productController.add)
router.post('/product-add', productController.store)






module.exports = router;