var express = require('express');
var router = express.Router();

/* GET users listing. */
const {login,register} = require('../controllers/usersControllers')

/* GET home page. */
router
.get('/login', login)
.get('/register', register)

module.exports = router;

