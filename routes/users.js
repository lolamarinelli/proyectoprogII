var express = require('express');
var router = express.Router();
let usersController = require('../controllers/usersController');

router.get('/', usersController.login)
router.get('/register', usersController.register)
router.post('/register', usersController.store) // CHEQUEAR SI ES /REGISTER O SOLO /


module.exports = router;
