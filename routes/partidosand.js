const express = require('express');
const router = express.Router();
const {
    createMatch,
    readMatches,
    readMatchById,
    updateMatch,
    deleteMatch,
    readMatchesByLeague
} = require('../controllers/partidosand.controller.js');

router.post('/create', createMatch);
router.get('/', readMatches);
router.get('/:id', readMatchById);
router.patch('/:id', updateMatch);
router.delete('/:id', deleteMatch);
router.get('/byLeague', readMatchesByLeague);

module.exports = router;
