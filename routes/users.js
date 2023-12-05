var express = require('express');
var router = express.Router();


const {
  registrarUsuario, login, obtenerUsuarios, obtenerUsuario, actualizarUsuario, eliminarUsuario
} = require('../controllers/user.controller.js');

router.post('/registrar', registrarUsuario);
router.post('/login', login );
router.get('/', obtenerUsuarios);
router.get('/:id', obtenerUsuario);
router.put('/:id', actualizarUsuario);
router.delete('/:id', eliminarUsuario);


module.exports = router;
