var express = require('express');
var router = express.Router();
const {
    crearLiga, 
    leerLigas, 
    leerLigaPorId, 
    actualizarLiga, 
    eliminarLiga
} = require('../controllers/ligas.controller.js');

router.post('/crear', crearLiga);
router.get('/', leerLigas);
router.get('/:id', leerLigaPorId);
router.patch('/:id', actualizarLiga);
router.delete('/:id', eliminarLiga);

module.exports = router;
