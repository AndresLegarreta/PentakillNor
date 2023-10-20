var express = require('express');
var router = express.Router();

const { firmarjwt, verifyjwt } = require('../controllers/auth.controller');

/* GET home page. */
router.post('/get-jwt', firmarjwt );
router.post('/verify-jwt', verifyjwt);



module.exports = router;

