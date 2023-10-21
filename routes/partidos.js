var express = require('express');
var router = express.Router();
const {
    crearPartido, 
    leerPartidos, 
    leerPartidoPorId, 
    actualizarPartido, 
    eliminarPartido
} = require('../controllers/partidos.controller.js');

router.post('/crear', crearPartido);
router.get('/', leerPartidos);
router.get('/:id', leerPartidoPorId);
router.patch('/:id', actualizarPartido);
router.delete('/:id', eliminarPartido);

module.exports = router;
