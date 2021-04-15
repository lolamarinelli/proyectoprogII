var express = require('express');
var router = express.Router();
let profileController = require('../controllers/profileController');

router.get('/', profileController.index)
// router.get('/profileEdit', profileController.show)
/* router.get('/id/:id', bandasControllers.id)
router.get('/genero/:genero', bandasControllers.genero) */



module.exports = router;