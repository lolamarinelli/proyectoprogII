var express = require('express');
var router = express.Router();
let productController = require('../controllers/productController');
let multer = require("multer")
let path = require("path")

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/products') // en donde vamos a guardar nuestras imagenes
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage })

router.get('/products/:id', productController.show)
router.get('/product-add', productController.add)
router.post('/product-add', upload.single("image"),productController.store); // guardar el usuarios
router.post('/products/:id', productController.comentarios) 
router.get('/product-edit/:id', productController.edit)
router.post('/product-edit/:id', upload.single("image"),productController.update); 
router.post('/borrar/:id', productController.borrar)
router.post('/:id', productController.destroy)



module.exports = router;