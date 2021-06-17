var express = require('express');
var router = express.Router();
let usersController = require('../controllers/usersController');
let multer = require("multer")
let path = require("path")

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/avatar') // en donde vamos a guardar nuestras imagenes
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage })

router.get('/', usersController.login)
router.post('/', usersController.processLogin)
router.get('/register', usersController.register)
router.post('/register', upload.single("avatar"),usersController.store); // guardar el usuarios
router.post('/logout', usersController.logout) 


module.exports = router;
