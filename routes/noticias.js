var express = require('express');
var router = express.Router();

const {
    listarNoticias,
    crearNoticia,
    obtenerNoticia,
    actualizarNoticia,
    eliminarNoticia
} = require('../controllers/noticias.controller');

router.get('/', listarNoticias);
router.post('/crear', crearNoticia);
router.get('/:id', obtenerNoticia);
router.put('/:id', actualizarNoticia);
router.delete('/:id', eliminarNoticia);

module.exports = router;
