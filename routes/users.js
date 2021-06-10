var express = require('express');
var router = express.Router();
let usersController = require('../controllers/usersController');

router.get('/', usersController.login)
router.post('/', usersController.processLogin)
router.get('/register', usersController.register)
router.post('/register', usersController.store)
// router.post('/logout', usersController.logout) NO FUNCIONA LOGOUT



module.exports = router;
