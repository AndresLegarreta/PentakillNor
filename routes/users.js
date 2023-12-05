var express = require('express');
var router = express.Router();


const {
  registrarUsuario, login, obtenerUsuarios, obtenerUsuario, actualizarUsuario, eliminarUsuario
} = require('../controllers/user.controller.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/registrar', registrarUsuario);
router.post('/login', login );
router.get('/', obtenerUsuarios);
router.get('/:id', obtenerUsuario);
router.put('/:id', actualizarUsuario);
router.delete('/:id', eliminarUsuario);


module.exports = router;
