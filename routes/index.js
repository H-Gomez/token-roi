const express = require('express');
const router = express.Router();
const tokenData = require('../public/data/tokens');

/* GET home page */
router.get('/', function(reg, res) {
   res.render('index', { tokenData });
});

module.exports = router;