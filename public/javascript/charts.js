const baseUrl = 'https://graphs2.coinmarketcap.com/currencies/';
var chart;

// Create the chart
if (Highcharts) {
    loadCharts();
} else {
    setTimeout(function () {
        loadCharts();
    }, 5000);
}

function loadCharts(tokenName, prices, icoPrice) {
    console.log(tokenName, icoPrice);
    chart = new Highcharts.stockChart('container', {
        rangeSelector: {
            selected: 1
        },

        title: {
            text: tokenName + ' - USD'
        },

        yAxis: {
            title: {
                text: 'ICO Price'
            },
            plotLines: [{
                value: icoPrice,
                color: 'red',
                dashStyle: 'shortdash',
                width: 2,
                label: {
                    text: 'ICO Price'
                }
            }]
        },

        series: [{
            name: tokenName,
            data: prices,
            color: 'darkblue',
            tooltip: {
                valueDecimals: 2
            }
        }]
    });
}

/* Event listener for charts */
jQuery('.token-item-link').on('click', function(event) {
    event.preventDefault();
    var tokenName = event.target.innerText;
    var tokenPrice;
    var tokenData;

    jQuery.getJSON('/api/tokens', function(data) {
        tokenData = data;
        console.log("TokenName = " + tokenName);

        for (var i = 0; i < tokenData.length; i++) {
            if (tokenData[i].ticker === tokenName) {
                console.log('Found token in dataset');
                tokenPrice = tokenData[i].icoPrice;
                console.log("Token price was: " + tokenPrice);

                jQuery.get('/api/getPricesForToken', { tokenN: tokenName}, function(data) {
                    console.log("Getting chart data...");
                    loadCharts(tokenName, data['price_usd'], tokenPrice)
                });
            }
        }
    });
});