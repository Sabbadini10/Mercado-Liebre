var express = require('express');
var router = express.Router();

/* GET home page. */
const indexController = require('../controllers/indexControllers')

/* GET home page. */
router.get('/', indexController.index);

module.exports = router;
