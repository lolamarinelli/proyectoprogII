var express = require('express');
var router = express.Router();
let profileController = require('../controllers/profileController');

router.get('/', profileController.product)
router.get('/', profileController.user)
/* router.get('/profile-edit', profileController.show) */





module.exports = router;