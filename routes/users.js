var express = require('express');
var router = express.Router();
let usersController = require('../controllers/usersController');

router.get('/', usersController.index)

module.exports = router;
