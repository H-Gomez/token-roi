const request = require('request');
const fs = require('fs');

const apiBaseUrl = 'https://graphs2.coinmarketcap.com/currencies/';
const tokenName = 'mothership';
var tokenList = {};

fs.readFile('tokens.json', function(error, fileContents) {
    if (error) {
        console.log("There was an error reading the file from system.")
    } else {
        tokenList = JSON.parse(fileContents);
    }
});

request(apiBaseUrl + tokenName, function(error, response, body) {
    if (!error && response.statusCode === 200) {
        console.log(null, body);
    } else {
        // do error handling here
        console.log(error || response.statusCode);
    }
});