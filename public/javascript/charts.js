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

function loadCharts(tokenName, prices, volume, icoPrice) {
    chart = new Highcharts.stockChart('chart-container', {
        rangeSelector: {
            selected: 1
        },
        chart: {
            zoomType: 'x',
            spacingRight: 20
        },
        title: {
            text: tokenName + ' - USD'
        },
        yAxis: [
        {
            title: {
                text: 'USD Price'
            },
            height: '100%',
            min: 0,
            plotLines: [{
                value: icoPrice,
                color: 'darkblue',
                dashStyle: 'shortdash',
                width: 2,
                zIndex: 5,
                label: {
                    text: 'ICO Price'
                }
            }]
        }
        // ,
        // {
        //     title: {
        //         text: 'Volume'
        //     },
        //     top: '85%',
        //     height: '15%',
        //     offset: 0
        // }
        ],

        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                    stops: [
                        [0, '#ffc149'],
                        [1, '#fbfbfb']
                    ]
                },
                lineWidth: 1,
                marker: {
                    enabled: false
                },
                shadow: false,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null,
                min: 0
            }
        },

        series: [{
            type: 'area',
            color: '#ffa800',
            name: tokenName,
            data: prices,
            tooltip: {
                valueDecimals: 2
            }
        }
        // , {
        //     type: 'column',
        //     color: 'grey',
        //     name: 'Volume',
        //     data: volume,
        //     pointWidth: 1,
        //     yAxis: 1,
        //     turboThreshold: 0
        // }
        ]
    });
}

/* Event listener for charts */
/* Move this to abstract function */
jQuery('.token-item-link').on('click', function(event) {

    event.preventDefault();
    var tokenName = event.target.innerText.toLowerCase();
    var tokenPrice;
    var tokenData;

    jQuery.getJSON('/api/tokens', function(data) {
        tokenData = data;

        for (var i = 0; i < tokenData.length; i++) {
            if (tokenData[i].identifier === tokenName) {
                console.log('Found token in dataset');
                tokenPrice = tokenData[i].icoPrice;

                // Update views
                jQuery('#token-title').text(tokenData[i].name);
                jQuery('#token-sale-price').text("ICO Price: $" + tokenPrice);
                jQuery('#token-desc').text(tokenData[i].description);
                jQuery('#token-tag').text(tokenData[i].tokenType);

                jQuery.get('/api/getPricesForToken', { tokenN: tokenName }, function(data) {
                    console.log("Getting chart data for..." + tokenName);
                    loadCharts(tokenName, data['price_usd'], data['volume_usd'], tokenPrice);
                });
            }
        }
    });
});
