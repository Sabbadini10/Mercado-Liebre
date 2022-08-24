let express = require('express');
let router = express.Router();
const {body} = require('express-validator')
let {uploadAvatar} = require('../middleware/cargarFotoUsuario')
/* GET users listing. */
const {login,profile, crearUsers,editarUsers,removerUsers,usersStore} = require('../controllers/usersControllers');
const validation = [
    body('name').notEmpty().withMessage('Completa el campo'),
    body('usuario').notEmpty().withMessage('Completa el campo'),
    body('ciudad').notEmpty().withMessage('Completa el campo'),
    body('domicilio').notEmpty().withMessage('Completa el campo'),
    body('password').notEmpty().withMessage('Completa el campo'),
    body('email').notEmpty().withMessage('Completa el campo'),
    body('nacimiento').notEmpty().withMessage('Completa el campo'),
    body('vendedor').notEmpty().withMessage('Completa el campo'),
]

/* GET home page. */
router.get('/usersLogin', login);

router.get('/usersRegister', crearUsers);

router.post('/usersRegister', uploadAvatar.single("imagen"), usersStore);

router.get('/usersProfile/:id', profile)


module.exports = router;

