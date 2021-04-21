var express = require('express');
var router = express.Router();
let indexController = require('../controllers/indexController');

router.get('/', indexController.index)
// router.get('/id/:id', indexController.id)


module.exports = router;
