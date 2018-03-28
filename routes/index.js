const express = require('express');
const router = express.Router();
const path = require('path');
const tokenData = require('../public/data/tokens');
const request = require('request');

/* GET home page */
router.get('/', function(reg, res) {
   res.render('index', { tokenData });
});

/* Returns local json file */
router.get('/api/tokens', function(req, res) {
   console.log("Requesting JSON...");
   res.sendFile(path.join(__dirname, '../public/data', 'tokens.json'));
});

/* Returns price data from CMC api */
router.get('/api/getPricesForToken', function(req, res) {
   console.log("Prices requested....");
   var token = req.query.tokenN;

    request('https://graphs2.coinmarketcap.com/currencies/' + token, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            res.send(JSON.parse(body));
        } else {
           res.send(error);
        }
    });
});

module.exports = router;
