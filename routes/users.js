var express = require('express');
var router = express.Router();


const {
  registrarUsuario, login
} = require('../controllers/user.controller.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/registrar', registrarUsuario);

router.post('/login', login )


module.exports = router;
