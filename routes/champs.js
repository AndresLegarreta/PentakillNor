var express = require('express');
var router = express.Router();
const {
  createChamp,
  getAllChamps,
  getChampById,
  updateChamp,
  deleteChamp
} = require('../controllers/Champs.controller');

router.post('/', createChamp);
router.get('/', getAllChamps);
router.get('/:id', getChampById);
router.put('/:id', updateChamp);
router.delete('/:id', deleteChamp);

module.exports = router;
