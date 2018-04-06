var path = require('path');
var fs = require('fs');

var newTokens = [];

var tokens1 = [
    {
        "name": "Dragon",
        "ticker": "dragon-coins",
        "icoPrice": 3.0286
    },
    {
        "name": "JET8",
        "ticker": "jet8",
        "icoPrice": 0.097358823529412
    },
    {
        "name": "IP Exchange",
        "ticker": "ip-exchange",
        "icoPrice": 0.012238016667381
    },
    {
        "name": "TomoCoin",
        "ticker": "tomochain",
        "icoPrice": 0.25
    },
    {
        "name": "NaPoleonX",
        "ticker": "napoleonx",
        "icoPrice": 0.86593
    },
    {
        "name": "Lympo",
        "ticker": "lympo",
        "icoPrice": 0.02166825
    },
    {
        "name": "Havven",
        "ticker": "havven",
        "icoPrice": 0.5
    },
    {
        "name": "Huobi token",
        "ticker": "huobi-token",
        "icoPrice": 1.5151515151515
    },
    {
        "name": "Banca",
        "ticker": "banca",
        "icoPrice": 0.003
    },
    {
        "name": "Debitum Network",
        "ticker": "debitum-network",
        "icoPrice": 0.13230756
    },
    {
        "name": "Electrify.Asia",
        "ticker": "electrifyasia",
        "icoPrice": 0.08
    },
    {
        "name": "TE-FOOD",
        "ticker": "te-food",
        "icoPrice": 0.03913784
    },
    {
        "name": "BABB",
        "ticker": "babb",
        "icoPrice": 0.0012
    },
    {
        "name": "Lendroid",
        "ticker": "lendroid-support-token",
        "icoPrice": 0.019791666666667
    },
    {
        "name": "CREDITS",
        "ticker": "credits",
        "icoPrice": 0.188692
    },
    {
        "name": "Gems",
        "ticker": "gems-protocol",
        "icoPrice": 0.075
    },
    {
        "name": "REMME",
        "ticker": "remme",
        "icoPrice": 0.04
    },
    {
        "name": "Fusion",
        "ticker": "fusion",
        "icoPrice": 2.059825
    },
    {
        "name": "COPYTRACK",
        "ticker": "copytrack",
        "icoPrice": 1.189027027027
    },
    {
        "name": "Dether",
        "ticker": "dether",
        "icoPrice": 0.23298934234468
    },
    {
        "name": "Insights Network",
        "ticker": "insights-network",
        "icoPrice": 0.179449376
    },
    {
        "name": "GBX",
        "ticker": "rock",
        "icoPrice": 0.1
    },
    {
        "name": "Refereum",
        "ticker": "refereum",
        "icoPrice": 0.02096406
    },
    {
        "name": "Datawallet",
        "ticker": "datawallet",
        "icoPrice": 0.18
    },
    {
        "name": "ArcBlock",
        "ticker": "arcblock",
        "icoPrice": 0.50157894736842
    },
    {
        "name": "Republic Protocol",
        "ticker": "republic-protocol",
        "icoPrice": 0.057138372093023
    },
    {
        "name": "The Bee Token",
        "ticker": "bee-token",
        "icoPrice": 0.20051011235955
    },
    {
        "name": "MedicalChain",
        "ticker": "medical-chain",
        "icoPrice": 0.25
    },
    {
        "name": "WePower",
        "ticker": "wepower",
        "icoPrice": 0.125
    },
    {
        "name": "iungo",
        "ticker": "iungo",
        "icoPrice": 1.14947
    },
    {
        "name": "AMLT",
        "ticker": "amlt",
        "icoPrice": 0.388839597075
    },
    {
        "name": "dadi",
        "ticker": "dadi",
        "icoPrice": 0.5
    },
    {
        "name": "Storiqa",
        "ticker": "storiqa",
        "icoPrice": 0.007
    },
    {
        "name": "Sharpe Capital",
        "ticker": "sharpe-platform-token",
        "icoPrice": 0.6185
    },
    {
        "name": "Nucleus.Vision",
        "ticker": "nucleus-vision",
        "icoPrice": 0.01
    },
    {
        "name": "Experty",
        "ticker": "experty",
        "icoPrice": 1.052
    },
    {
        "name": "CPChain",
        "ticker": "cpchain",
        "icoPrice": 0.1015
    },
    {
        "name": "Restart Energy",
        "ticker": "restart-energy-mwat",
        "icoPrice": 0.08644125
    },
    {
        "name": "Odyssey",
        "ticker": "odyssey",
        "icoPrice": 0.011890625
    },
    {
        "name": "Elastos",
        "ticker": "elastos",
        "icoPrice": 18.091
    },
    {
        "name": "Ink Protocol",
        "ticker": "ink-protocol",
        "icoPrice": 0.12965066666667
    },
    {
        "name": "Pundi X",
        "ticker": "pundi-x",
        "icoPrice": 0.00213006
    },
    {
        "name": "FORTUNA",
        "ticker": "fortuna",
        "icoPrice": 0.08
    },
    {
        "name": "DATA",
        "ticker": "data",
        "icoPrice": 0.0108538
    },
    {
        "name": "Bluzelle",
        "ticker": "bluzelle",
        "icoPrice": 0.12
    },
    {
        "name": "Devery",
        "ticker": "devery",
        "icoPrice": 0.16666666666667
    },
    {
        "name": "Mobius",
        "ticker": "mobius",
        "icoPrice": 0.16
    },
    {
        "name": "Zeepin",
        "ticker": "zeepin",
        "icoPrice": 0.12591011800151
    },
    {
        "name": "OriginTrail",
        "ticker": "origintrail",
        "icoPrice": 0.1
    },
    {
        "name": "MatrixChain",
        "ticker": "matrix-ai-network",
        "icoPrice": 0.36
    },
    {
        "name": "Envion",
        "ticker": "envion",
        "icoPrice": 0.7
    },
    {
        "name": "InsurePal",
        "ticker": "insurepal",
        "icoPrice": 0.1
    },
    {
        "name": "AidCoin",
        "ticker": "aidcoin",
        "icoPrice": 0.65
    },
    {
        "name": "PARETO",
        "ticker": "pareto-network",
        "icoPrice": 0.0606765
    },
    {
        "name": "carVertical",
        "ticker": "carvertical",
        "icoPrice": 0.0055125
    },
    {
        "name": "Thekey.vip",
        "ticker": "thekey",
        "icoPrice": 0.035201291711518
    },
    {
        "name": "Trinity",
        "ticker": "trinity-network-credit",
        "icoPrice": 0.06
    },
    {
        "name": "GatCoin",
        "ticker": "gatcoin",
        "icoPrice": 0.03182366
    },
    {
        "name": "Selfkey",
        "ticker": "selfkey",
        "icoPrice": 0.015
    },
    {
        "name": "adbank",
        "ticker": "adbank",
        "icoPrice": 0.046543
    },
    {
        "name": "Olympus Labs",
        "ticker": "olympus-labs",
        "icoPrice": 2.179756097561
    },
    {
        "name": "LALA World",
        "ticker": "lala-world",
        "icoPrice": 0.134609
    },
    {
        "name": "aXpire",
        "ticker": "axpire",
        "icoPrice": 0.1
    },
    {
        "name": "HOQU",
        "ticker": "hoqu",
        "icoPrice": 0.21666666666667
    },
    {
        "name": "SwissBorg",
        "ticker": "swissborg",
        "icoPrice": 0.1
    },
    {
        "name": "Ontology Network",
        "ticker": "ontology",
        "icoPrice": 0.2
    },
    {
        "name": "Crypterium",
        "ticker": "crypterium",
        "icoPrice": 1.981833261496
    },
    {
        "name": "Shipchain",
        "ticker": "shipchain",
        "icoPrice": 0.34
    },
    {
        "name": "Theta token",
        "ticker": "theta-token",
        "icoPrice": 0.12
    },
    {
        "name": "ZILLIQA",
        "ticker": "zilliqa",
        "icoPrice": 0.00380952
    },
    {
        "name": "trade.io",
        "ticker": "trade-token",
        "icoPrice": 1.0828111111111
    },
    {
        "name": "Lamden",
        "ticker": "lamden",
        "icoPrice": 0.091025429836302
    },
    {
        "name": "Bloom",
        "ticker": "bloomtoken",
        "icoPrice": 1.16371398
    },
    {
        "name": "Covesting",
        "ticker": "covesting",
        "icoPrice": 1.4423076923077
    },
    {
        "name": "Loci",
        "ticker": "locicoin",
        "icoPrice": 0.44
    },
    {
        "name": "Telcoin",
        "ticker": "telcoin",
        "icoPrice": 0.0012933372488
    },
    {
        "name": "Gladius",
        "ticker": "gladius-token",
        "icoPrice": 1.25
    },
    {
        "name": "BitDegree",
        "ticker": "bitdegree",
        "icoPrice": 0.071916
    },
    {
        "name": "BANKEX",
        "ticker": "bankex",
        "icoPrice": 1.4792
    },
    {
        "name": "CanYa",
        "ticker": "canyacoin",
        "icoPrice": 0.78549
    },
    {
        "name": "Sirin Labs",
        "ticker": "sirin-labs-token",
        "icoPrice": 0.47
    },
    {
        "name": "INS Ecosystem",
        "ticker": "ins-ecosystem",
        "icoPrice": 2.542
    },
    {
        "name": "Uttoken",
        "ticker": "uttoken",
        "icoPrice": 0.9
    },
    {
        "name": "SingularityNET",
        "ticker": "singularitynet",
        "icoPrice": 0.1
    },
    {
        "name": "Qlink",
        "ticker": "qlink",
        "icoPrice": 0.10294230769231
    },
    {
        "name": "AppCoins",
        "ticker": "appcoins",
        "icoPrice": 0.27293155258765
    },
    {
        "name": "indaHash",
        "ticker": "indahash",
        "icoPrice": 0.2093125
    },
    {
        "name": "Bread",
        "ticker": "bread",
        "icoPrice": 0.77777777777778
    },
    {
        "name": "SophiaTX",
        "ticker": "sophiatx",
        "icoPrice": 0.0716
    },
    {
        "name": "NeuFund",
        "ticker": "neumark",
        "icoPrice": 0.36167692307692
    },
    {
        "name": "Bounty0x",
        "ticker": "bounty0x",
        "icoPrice": 0.0165
    },
    {
        "name": "Nebulas",
        "ticker": "nebulas-token",
        "icoPrice": 2
    },
    {
        "name": "Coinlancer",
        "ticker": "coinlancer",
        "icoPrice": 0.25
    },
    {
        "name": "Naga",
        "ticker": "naga",
        "icoPrice": 1
    },
    {
        "name": "MediBloc",
        "ticker": "medibloc",
        "icoPrice": 0.0087680341077796
    },
    {
        "name": "DeepBrain Chain",
        "ticker": "deepbrain-chain",
        "icoPrice": 0.0158
    },
    {
        "name": "Aigang",
        "ticker": "aigang",
        "icoPrice": 0.3455
    },
    {
        "name": "GIFTO",
        "ticker": "gifto",
        "icoPrice": 0.10003
    },
    {
        "name": "Spectre",
        "ticker": "spectre-dividend",
        "icoPrice": 0.22
    },
    {
        "name": "SportyFi",
        "ticker": "sportyco",
        "icoPrice": 0.180108
    },
    {
        "name": "aelf",
        "ticker": "aelf",
        "icoPrice": 0.099009900990099
    },
    {
        "name": "Universa",
        "ticker": "universa",
        "icoPrice": 0.01
    },
    {
        "name": "Storm",
        "ticker": "storm",
        "icoPrice": 0.0113
    },
    {
        "name": "Leverj",
        "ticker": "leverj",
        "icoPrice": 0.14666666666667
    },
    {
        "name": "Verify",
        "ticker": "verify",
        "icoPrice": 0.225
    },
    {
        "name": "fidentiaX",
        "ticker": "fidentiax",
        "icoPrice": 0.0288904
    },
    {
        "name": "SmartMesh",
        "ticker": "smartmesh",
        "icoPrice": 0.016745553643144
    },
    {
        "name": "DMarket",
        "ticker": "dmarket",
        "icoPrice": 0.62666666666667
    },
    {
        "name": "Simple Token",
        "ticker": "ost",
        "icoPrice": 0.088940003833621
    },
    {
        "name": "Vezt",
        "ticker": "vezt",
        "icoPrice": 0.49764
    },
    {
        "name": "CRYPTO20",
        "ticker": "c20",
        "icoPrice": 1
    },
    {
        "name": "Sense",
        "ticker": "sense",
        "icoPrice": 0.1
    },
    {
        "name": "Playkey",
        "ticker": "playkey",
        "icoPrice": 1.732
    },
    {
        "name": "LockChain",
        "ticker": "lockchain",
        "icoPrice": 0.552
    },
    {
        "name": "Genaro Network",
        "ticker": "genaro-network",
        "icoPrice": 0.14566666666667
    },
    {
        "name": "ETHLend",
        "ticker": "ethlend",
        "icoPrice": 0.017272727272727
    },
    {
        "name": "WaBi",
        "ticker": "wabi",
        "icoPrice": 0.23625
    },
    {
        "name": "Presearch",
        "ticker": "presearch",
        "icoPrice": 0.2
    },
    {
        "name": "Snovio",
        "ticker": "snovio",
        "icoPrice": 0.01
    },
    {
        "name": "WAX",
        "ticker": "wax",
        "icoPrice": 0.32
    },
    {
        "name": "Datum",
        "ticker": "datum",
        "icoPrice": 0.0192
    },
    {
        "name": "BitClave",
        "ticker": "bitclave",
        "icoPrice": 0.1
    },
    {
        "name": "Mercury Protocol",
        "ticker": "mercury-protocol",
        "icoPrice": 0.043
    },
    {
        "name": "MyWish",
        "ticker": "mywish",
        "icoPrice": 0.21
    },
    {
        "name": "Starbase",
        "ticker": "starbase",
        "icoPrice": 0.1020558
    },
    {
        "name": "Flixxo",
        "ticker": "flixxo",
        "icoPrice": 0.093409090909091
    },
    {
        "name": "Divi Project",
        "ticker": "divi",
        "icoPrice": 0.61692307692308
    },
    {
        "name": "Aion",
        "ticker": "aion",
        "icoPrice": 1
    },
    {
        "name": "ARToken",
        "ticker": "cappasity",
        "icoPrice": 0.008
    },
    {
        "name": "CyberMiles",
        "ticker": "cybermiles",
        "icoPrice": 0.052428571428571
    },
    {
        "name": "Bodhi",
        "ticker": "bodhi",
        "icoPrice": 0.36666666666667
    },
    {
        "name": "Time New Bank",
        "ticker": "time-new-bank",
        "icoPrice": 0.017053011590348
    },
    {
        "name": "UTRUST",
        "ticker": "utrust",
        "icoPrice": 0.065
    },
    {
        "name": "Zap Store",
        "ticker": "zap",
        "icoPrice": 0.186
    },
    {
        "name": "Quantstamp",
        "ticker": "quantstamp",
        "icoPrice": 0.072
    },
    {
        "name": "MicroMoney",
        "ticker": "micromoney",
        "icoPrice": 1
    },
    {
        "name": "B2BX",
        "ticker": "b2bx",
        "icoPrice": 0.74
    },
    {
        "name": "Oracles Network",
        "ticker": "poa-network",
        "icoPrice": 0.07238139
    },
    {
        "name": "Privatix",
        "ticker": "privatix",
        "icoPrice": 3.33
    },
    {
        "name": "Matryx",
        "ticker": "matryx",
        "icoPrice": 0.2860824742268
    },
    {
        "name": "Soma",
        "ticker": "soma",
        "icoPrice": 0.73777777777778
    },
    {
        "name": "Genesis Vision",
        "ticker": "genesis-vision",
        "icoPrice": 1
    },
    {
        "name": "Publica",
        "ticker": "publica",
        "icoPrice": 0.1
    },
    {
        "name": "Grid+",
        "ticker": "grid",
        "icoPrice": 1.147
    },
    {
        "name": "QASH",
        "ticker": "qash",
        "icoPrice": 0.2432
    },
    {
        "name": "COMSA",
        "ticker": "comsa-eth",
        "icoPrice": 0.999
    },
    {
        "name": "Ripio Credit Network",
        "ticker": "ripio-credit-network",
        "icoPrice": 0.07425
    },
    {
        "name": "Ignis",
        "ticker": "ignis",
        "icoPrice": 0.03905
    },
    {
        "name": "Dragonchain",
        "ticker": "dragonchain",
        "icoPrice": 0.066348
    },
    {
        "name": "Raiden Network",
        "ticker": "raiden-network-token",
        "icoPrice": 0.668133
    },
    {
        "name": "Dentacoin",
        "ticker": "dentacoin",
        "icoPrice": 0.00012
    },
    {
        "name": "ATLANT",
        "ticker": "atlant",
        "icoPrice": 0.60792079207921
    },
    {
        "name": "Enjin Coin",
        "ticker": "enjin-coin",
        "icoPrice": 0.051166666666667
    },
    {
        "name": "TokenStars",
        "ticker": "ace",
        "icoPrice": 0.42
    },
    {
        "name": "Aeron",
        "ticker": "aeron",
        "icoPrice": 0.5
    },
    {
        "name": "CryptoPay",
        "ticker": "cryptopay",
        "icoPrice": 0.306
    },
    {
        "name": "Horizon State",
        "ticker": "decision-token",
        "icoPrice": 0.087428571428571
    },
    {
        "name": "Etherparty",
        "ticker": "etherparty",
        "icoPrice": 0.10333333333333
    },
    {
        "name": "BLOCKv",
        "ticker": "blockv",
        "icoPrice": 0.020748
    },
    {
        "name": "Astronaut",
        "ticker": "astro",
        "icoPrice": 0.891
    },
    {
        "name": "UnikoinGold",
        "ticker": "unikoin-gold",
        "icoPrice": 0.30484988452656
    },
    {
        "name": "COBINHOOD",
        "ticker": "cobinhood",
        "icoPrice": 0.051607142857143
    },
    {
        "name": "Electroneum",
        "ticker": "electroneum",
        "icoPrice": 0.01
    },
    {
        "name": "Ambrosus",
        "ticker": "amber",
        "icoPrice": 0.298
    },
    {
        "name": "Qvolta",
        "ticker": "qvolta",
        "icoPrice": 0.308
    },
    {
        "name": "DOVU",
        "ticker": "dovu",
        "icoPrice": 0.10656333
    },
    {
        "name": "HEROcoin",
        "ticker": "herocoin",
        "icoPrice": 0.02672
    },
    {
        "name": "eidoo",
        "ticker": "eidoo",
        "icoPrice": 2.5846153846154
    },
    {
        "name": "Change Bank",
        "ticker": "change",
        "icoPrice": 0.44
    },
    {
        "name": "Request Network",
        "ticker": "request-network",
        "icoPrice": 0.0672
    },
    {
        "name": "Paragon",
        "ticker": "paragon",
        "icoPrice": 1
    },
    {
        "name": "Credit Protocol",
        "ticker": "blockmason",
        "icoPrice": 0.34
    },
    {
        "name": "bitJob",
        "ticker": "student-coin",
        "icoPrice": 0.38513513513514
    },
    {
        "name": "Streamr",
        "ticker": "streamr-datacoin",
        "icoPrice": 0.061509785647717
    },
    {
        "name": "Anryze",
        "ticker": "anryze",
        "icoPrice": 0.02
    },
    {
        "name": "AirSwap",
        "ticker": "airswap",
        "icoPrice": 0.301
    },
    {
        "name": "LAToken",
        "ticker": "latoken",
        "icoPrice": 0.42016806722689
    },
    {
        "name": "Maecenas",
        "ticker": "maecenas",
        "icoPrice": 0.66
    },
    {
        "name": "DomRaider",
        "ticker": "domraider",
        "icoPrice": 0.12
    },
    {
        "name": "Red Pulse",
        "ticker": "red-pulse",
        "icoPrice": 0.03575
    },
    {
        "name": "PayPie",
        "ticker": "paypie",
        "icoPrice": 0.3421
    },
    {
        "name": "AirToken",
        "ticker": "airtoken",
        "icoPrice": 0.02
    },
    {
        "name": "PowerLedger",
        "ticker": "power-ledger",
        "icoPrice": 0.0838
    },
    {
        "name": "Wanchain",
        "ticker": "wanchain",
        "icoPrice": 0.33522727272727
    },
    {
        "name": "Real",
        "ticker": "real",
        "icoPrice": 1.3227272727273
    },
    {
        "name": "ALIS",
        "ticker": "alis",
        "icoPrice": 0.098275862068966
    },
    {
        "name": "Internxt",
        "ticker": "internxt",
        "icoPrice": 1.02
    },
    {
        "name": "Centra",
        "ticker": "centra",
        "icoPrice": 0.731
    },
    {
        "name": "Kin",
        "ticker": "kin",
        "icoPrice": 0.00012384
    },
    {
        "name": "Cindicator",
        "ticker": "cindicator",
        "icoPrice": 0.01
    },
    {
        "name": "Modum",
        "ticker": "modum",
        "icoPrice": 1
    },
    {
        "name": "ICON",
        "ticker": "icon",
        "icoPrice": 0.114
    },
    {
        "name": "ChainLink",
        "ticker": "chainlink",
        "icoPrice": 0.11269230769231
    },
    {
        "name": "Substratum",
        "ticker": "substratum",
        "icoPrice": 0.081666666666667
    },
    {
        "name": "KICKICO",
        "ticker": "kickico",
        "icoPrice": 0.085
    },
    {
        "name": "KyberNetwork",
        "ticker": "kyber-network",
        "icoPrice": 0.3818
    },
    {
        "name": "Social",
        "ticker": "sociall",
        "icoPrice": 0.46
    },
    {
        "name": "BitDice",
        "ticker": "bitdice",
        "icoPrice": 0.08748
    },
    {
        "name": "Blackmoon",
        "ticker": "blackmoon",
        "icoPrice": 1
    },
    {
        "name": "Enigma",
        "ticker": "enigma-project",
        "icoPrice": 0.59804461861899
    },
    {
        "name": "Rivetz",
        "ticker": "rivetz",
        "icoPrice": 0.88288288288288
    },
    {
        "name": "Filecoin",
        "ticker": "filecoin",
        "icoPrice": 5
    },
    {
        "name": "Indorse",
        "ticker": "indorse-token",
        "icoPrice": 0.333
    },
    {
        "name": "Hubii Network",
        "ticker": "hubii-network",
        "icoPrice": 0.333
    },
    {
        "name": "Aventus",
        "ticker": "aventus",
        "icoPrice": 3.4021739130435
    },
    {
        "name": "Viberate",
        "ticker": "viberate",
        "icoPrice": 0.1
    },
    {
        "name": "Tron",
        "ticker": "tron",
        "icoPrice": 0.00186238
    },
    {
        "name": "Monetha",
        "ticker": "monetha",
        "icoPrice": 0.1575
    },
    {
        "name": "Everex",
        "ticker": "everex",
        "icoPrice": 2.1
    },
    {
        "name": "ChronoLogic",
        "ticker": "chronologic",
        "icoPrice": 15.375
    },
    {
        "name": "DIMCOIN",
        "ticker": "dimcoin",
        "icoPrice": 0.01
    },
    {
        "name": "OPUS",
        "ticker": "opus",
        "icoPrice": 0.036222222222222
    },
    {
        "name": "Decentraland",
        "ticker": "decentraland",
        "icoPrice": 0.024
    },
    {
        "name": "Lampix",
        "ticker": "lampix",
        "icoPrice": 0.10609318996416
    },
    {
        "name": "Agrello",
        "ticker": "agrello-delta",
        "icoPrice": 0.4324
    },
    {
        "name": "BlockCAT",
        "ticker": "blockcat",
        "icoPrice": 0.87575757575758
    },
    {
        "name": "0x",
        "ticker": "0x",
        "icoPrice": 0.048007681228997
    },
    {
        "name": "SALT",
        "ticker": "salt",
        "icoPrice": 0.89
    },
    {
        "name": "Po.et",
        "ticker": "poet",
        "icoPrice": 0.00636
    },
    {
        "name": "Tierion",
        "ticker": "tierion",
        "icoPrice": 0.071
    },
    {
        "name": "Tezos",
        "ticker": "tezos",
        "icoPrice": 0.4698
    },
    {
        "name": "Polybius",
        "ticker": "polybius",
        "icoPrice": 10
    },
    {
        "name": "EOS",
        "ticker": "eos",
        "icoPrice": 0.98692810457516
    },
    {
        "name": "TenX",
        "ticker": "tenx",
        "icoPrice": 0.64
    },
    {
        "name": "OmiseGo",
        "ticker": "omisego",
        "icoPrice": 0.346
    },
    {
        "name": "Civic",
        "ticker": "civic",
        "icoPrice": 0.1
    },
    {
        "name": "Status Network",
        "ticker": "status",
        "icoPrice": 0.037
    },
    {
        "name": "SONM",
        "ticker": "sonm",
        "icoPrice": 0.15635313531353
    },
    {
        "name": "Monaco",
        "ticker": "monaco",
        "icoPrice": 3.8
    },
    {
        "name": "Bancor",
        "ticker": "bancor",
        "icoPrice": 3.92
    },
    {
        "name": "Cofound.it",
        "ticker": "cofound-it",
        "icoPrice": 0.1185520361991
    },
    {
        "name": "MobileGo",
        "ticker": "mobilego",
        "icoPrice": 0.758
    },
    {
        "name": "Storj",
        "ticker": "storj",
        "icoPrice": 0.5
    },
    {
        "name": "ChronoBank",
        "ticker": "chronobank",
        "icoPrice": 10
    }
];

var tokens2 = [
    {
        "name": "Friendz",
        "description": "Friendz is a tool that lets multinational companies involve a community of users on social networks for marketing purposes. Users get rewarded for creating contents for brands and sharing these contents on their personal social network profile. Friendz has an already working product, €1.2m in revenues, 200 clients (multinational companies) and a community of 200k users.",
        "ticker": "FDZ",
        "tokenType": "ERC20",
        "totalTokens": 1500000000
    },
    {
        "name": "Switcheo Network",
        "description": "Switcheo is a Decentralized Exchange (DEX) built on the NEO platform. It allows for the trustless exchange of NEP-5 tokens and may expand to other cross-chain tokens in the future.",
        "ticker": "SWH",
        "tokenType": "NEO Blockchain",
        "tokensSold": 5500000,
        "totalTokens": 1000000000
    },
    {
        "name": "Dragon",
        "description": "A new digital currency, funded upon Ethereum Blockchain system and strongly underpinned by a substantial gaming business in Macau.",
        "ticker": "DRG",
        "tokenType": "ERC20",
        "tokensSold": 320000000,
        "totalTokens": 500000000
    },
    {
        "name": "Sentinel Chain",
        "description": "The Sentinel Chain is a B2B marketplace specifically designed to provide affordable and secure financial services to the unbanked.",
        "ticker": "SENC",
        "tokenType": "ERC20",
        "tokensSold": 6400000,
        "totalTokens": 500000000
    },
    {
        "name": "JET8",
        "description": "JET8 is a decentralized mobile engagement network connecting influencers, audiences and brands through the value of social currency.",
        "ticker": "J8T",
        "tokenType": "ERC20",
        "tokensSold": 30000000,
        "totalTokens": 1500000000
    },
    {
        "name": "IP Exchange",
        "description": "Blockchain based system fully automated, with full clearing of utility tokens associating the price and distribution based on offer and demand for IPs.",
        "ticker": "IPSX",
        "tokenType": "ERC20",
        "tokensSold": 5400000,
        "totalTokens": 1800000000
    },
    {
        "name": "TomoCoin",
        "description": "An efficient blockchain infrastructure for decentralized applications, token issuance and integration.",
        "ticker": "TOMO",
        "tokenType": "ERC20",
        "tokensSold": 7500000,
        "totalTokens": 100000000
    },
    {
        "name": "NaPoleonX",
        "description": "NaPoleonX ambitions to become the 1st algorithmic asset management company for crypto investors.",
        "ticker": "NPX",
        "tokenType": "ERC20",
        "totalTokens": 50000000
    },
    {
        "name": "Lympo",
        "description": "Lympo aspires to revolutionise the healthy lifestyle ecosystem by monetising sports and wellness data via blockchain to reward users by offering incentives.",
        "ticker": "LYM",
        "tokenType": "ERC20",
        "tokensSold": 5500000,
        "totalTokens": 1000000000
    },
    {
        "name": "Havven",
        "description": "Havven is a decentralised payment network and stablecoin. It allows anyone to transact using a stable cryptocurrency.",
        "ticker": "Havven",
        "tokenType": "ERC20",
        "tokensSold": 30,
        "totalTokens": 100000000
    },
    {
        "name": "Huobi token",
        "description": "Blockchain-Powered Loyalty Point System.",
        "ticker": "HT",
        "tokenType": "ERC20",
        "totalTokens": 500000000
    },
    {
        "name": "Banca",
        "description": "A Cryptocurrency Investment Bank Community Based on AI and Big Data.",
        "ticker": "BANCA",
        "tokenType": "ERC20",
        "tokensSold": 18500000,
        "totalTokens": 20000000000
    },
    {
        "name": "Debitum Network",
        "description": "Borderless small business financing. Leveraging Blockchain technology to secure and distribute fiat investments to the SME world. Decentralized, accessible, and fair.",
        "ticker": "DEB",
        "tokenType": "ERC223",
        "tokensSold": 1200000,
        "totalTokens": 400000000
    },
    {
        "name": "Electrify.Asia",
        "description": "Building an intelligent energy ecosystem. Electrify is the first retail electricity marketplace in Southeast-Asia addressing the need for transparency and security in the consumption of energy.",
        "ticker": "ELEC",
        "tokenType": "ERC20",
        "totalTokens": 750000000
    },
    {
        "name": "TE-FOOD",
        "description": "TE-FOOD, the world’s largest\nfarm-to-table food traceability system\nis moving to blockchain.\n",
        "ticker": "TFD",
        "tokenType": "ERC20",
        "tokensSold": 14400000,
        "totalTokens": 1000000000
    },
    {
        "name": "BABB",
        "description": "Decentralised banking platform. Access to a bank account for P2P financial services for anyone in the world.",
        "ticker": "BAX",
        "tokenType": "ERC20",
        "tokensSold": 10000000,
        "totalTokens": 50000000000
    },
    {
        "name": "Lendroid",
        "description": "Lendroid is a 0x-inspired, non-rent seeking, trust-independent, open protocol enabling decentralized lending, margin trading and short selling on the Ethereum blockchain. It aims to solve the shortcomings of centralized exchanges by creating a global shared lending pool, and a symbiotic off-chain infrastructure supported by incentivized participants - Relayers and Wranglers. Simply put, Lenders contribute their offers to the lending pool through relayers, who then match the offers with appropriate traders. The traders can use the borrowed funds to margin trade, make a profit, and repay the lenders.",
        "ticker": "LST",
        "tokenType": "ERC20",
        "tokensSold": 42000000,
        "totalTokens": 12000000000
    },
    {
        "name": "CREDITS",
        "description": "Cryptocurrency and Blockchain for the financial industry with more than 1 mln tx/sec and 0.01 sec for a transaction. CREDITS is a new, unique blockchain platform with absolutely new technical capabilities of the network, response time, transaction cost and the number of operations per second.",
        "ticker": "CS",
        "tokenType": "ERC20",
        "tokensSold": 3000000,
        "totalTokens": 1000000000
    },
    {
        "name": "Gems",
        "description": "Gems is a protocol for contracting workers to perform micro tasks",
        "ticker": "GEM",
        "tokenType": "ERC20",
        "totalTokens": 8000000000
    },
    {
        "name": "REMME",
        "description": "REMME builds the distributed Public Key Infrastructure (PKI) protocol with a set of DApps to enable passwordless authentication",
        "ticker": "REM",
        "tokenType": "ERC20",
        "tokensSold": 1800000,
        "totalTokens": 1000000000
    },
    {
        "name": "Fusion",
        "description": "FUSION is a public blockchain devoting itself to creating an inclusive cryptofinancial platform by providing cross-chain, cross-organization, and cross-datasource smart contracts.",
        "ticker": "FSN",
        "tokenType": "ERC20",
        "tokensSold": 14500000,
        "totalTokens": 81920000
    },
    {
        "name": "COPYTRACK",
        "description": "Copytrack revolutionizes how creators protect, track and monetize their work by using blockchain and smart contracts technology.",
        "ticker": "CPY",
        "tokenType": "ERC20",
        "totalTokens": 100000000
    },
    {
        "name": "Dether",
        "description": "Dether is a peer-to-peer ecosystem of crypto buyers, sellers and physical shops. Dether built a decentralized and user friendly mobile app that enables to trade ether and tokens for cash. Dether breaks barriers to global blockchain adoption by creating a fully decentralized bridge between fiat currency and cryptocurrency.",
        "ticker": "ÐTH",
        "tokenType": "ERC223",
        "tokensSold": 4500000,
        "totalTokens": 100000000
    },
    {
        "name": "Insights Network",
        "description": "The Insights Network is a blockchain based data exchange that allows individuals to manage and monetize the data they create in a liquid, real time data marketplace. This marketplace exists on top of the Insights Network protocol built on top of the EOS blockchain and is fueled by our “INSTAR” token.",
        "ticker": "INSTAR",
        "tokenType": "ERC20",
        "tokensSold": 9300000,
        "totalTokens": 300000000
    },
    {
        "name": "GBX",
        "description": "The Gibraltar Blockchain Exchange (GBX) aims to be a world-leading institutional-grade token sale platform and cryptocurrency exchange. Built upon principles of decentralisation and community consensus, we seek to create a new era of trust, openness and global acceptance for the crypto industry, one quality token listing at a time.",
        "ticker": "RKT",
        "tokenType": "ERC20",
        "tokensSold": 21000000,
        "totalTokens": 900000000
    },
    {
        "name": "Refereum",
        "description": "Refereum is a distribution and growth platform that cuts out the marketing middleman, enables higher profits for developers, and directly rewards influencers and gamers to promote and play games.",
        "ticker": "RFR",
        "tokenType": "ERC20",
        "totalTokens": 5000000000
    },
    {
        "name": "Datawallet",
        "description": "DataWallet is a decentralized C2B data exchange on a mission to give people back data ownership.",
        "ticker": "DXT",
        "tokenType": "ERC20",
        "totalTokens": 1000000000
    },
    {
        "name": "ArcBlock",
        "description": "The World's first blockchain ecosystem for building and deploying decentralized applications.",
        "ticker": "ABT",
        "tokenType": "ERC20",
        "tokensSold": 22800000,
        "totalTokens": 186000000
    },
    {
        "name": "Republic Protocol",
        "description": "A decentralized dark pool for trustless cross-chain atomic trading of Ether, ERC20 tokens and Bitcoin pairs.",
        "ticker": "REN",
        "tokenType": "ERC20",
        "tokensSold": 34500000,
        "totalTokens": 1000000000
    },
    {
        "name": "The Bee Token",
        "description": "Decentralizing Short-Term Housing Rentals. Blockchain Powered Platform With 0% Commissions, Network Effects, Bank-Level Security, and Immutable Reviews",
        "ticker": "BEE",
        "tokenType": "ERC20",
        "tokensSold": 10000000,
        "totalTokens": 500000000
    },
    {
        "name": "MedicalChain",
        "description": "Blockchain technology for secure storage and transfer of electronic health records. Using blockchain technology,\nsmart contracts, and our cryptocurrency, Medicalchain provides the infrastructure for digital health applications and services to be built. ",
        "ticker": "MTN",
        "tokenType": "ERC20",
        "tokensSold": 20000000,
        "totalTokens": 500000000
    },
    {
        "name": "WePower",
        "description": "WePower is a blockchain-based green energy trading platform",
        "ticker": "WPR",
        "tokenType": "ERC20",
        "tokensSold": 30000000,
        "totalTokens": 289000000
    },
    {
        "name": "iungo",
        "description": "Decentralised Global Wireless Internet Provider.",
        "ticker": "ING",
        "tokenType": "ERC20",
        "totalTokens": 62500000
    },
    {
        "name": "AMLT",
        "description": "The Coinfirm AML/CTF Platform and its AMLT Network aims to build the global standard for\nAML/CTF enabling transparency for cryptocurrency and blockchain based transactions.",
        "ticker": "AMLT",
        "tokenType": "ERC20",
        "totalTokens": 400000000
    },
    {
        "name": "dadi",
        "description": "DADI is a global, decentralized cloud services platform, offering compute power, database storage, content delivery and other functionality to help businesses scale and grow.",
        "ticker": "DADI",
        "tokenType": "ERC20",
        "tokensSold": 4000000,
        "totalTokens": 100000000
    },
    {
        "name": "Storiqa",
        "description": "Storiqa is a platform created for buyers and sellers all over the world. With an easy-to use online store builder, any seller is able to create their own storefront to sell their goods, while making use of the platform’s wide range of features for a minimal fee.",
        "ticker": "STQ",
        "tokenType": "ERC20",
        "tokensSold": 1500000
    },
    {
        "name": "Sharpe Capital",
        "description": "The financial markets protocol. Earn Ether in exchange for your opinion about equity markets and Blockchain assets. Backed by multiple revenue streams, payments are issued to SHP holders on a quarterly basis.",
        "ticker": "SHP",
        "tokenType": "ERC20"
    },
    {
        "name": "Nucleus.Vision",
        "description": "Nucleus is an end-to-end technology solution that captures and provides previously inaccessible data to retailers and other ‘brick-and-mortar’ businesses through its proprietary blockchain and real-time sensor technology",
        "ticker": "nCash",
        "tokenType": "ERC20",
        "tokensSold": 30000000,
        "totalTokens": 10000000000
    },
    {
        "name": "Experty",
        "description": "Get paid crypto calls, anywhere and anytime. Democratizing the digital consultations market. Knowledge providers set a by-the-minute rate, and through the Ethereum blockchain, charges are accrued during the call, and instantly settled at the end of the call. In a rapidly changing world where one-on-one access to everyone has become possible, you can now share time, advice, or knowledge at your designated fee. Access to knowledge providers can be shared through a link placed on any website or social media profile.",
        "ticker": "EXY",
        "tokenType": "ERC223",
        "totalTokens": 100000000
    },
    {
        "name": "CPChain",
        "description": "CPChain is a brand new blockchain platform specially designed for IoT. ",
        "ticker": "CPC",
        "tokenType": "ERC20",
        "tokensSold": 30000000,
        "totalTokens": 1000000000
    },
    {
        "name": "Restart Energy",
        "description": "The world's first market-ready blockchain energy trading platform.",
        "ticker": "MWAT",
        "tokenType": "ERC20",
        "tokensSold": 26250000,
        "totalTokens": 500000000
    },
    {
        "name": "Odyssey",
        "description": "ODYSSEY’s mission is to build the next-generation decentralized sharing economy & Peer to Peer Ecosystem. ODYSSEY aims to reduce overall operating cost, increase marketplace efficiency and boost ROI of product & service providers in the Global sharing economy & peer to peer ecosystem.",
        "ticker": "OCN",
        "tokenType": "ERC20",
        "totalTokens": 10000000000
    },
    {
        "name": "Elastos",
        "description": "New blockchain whith totally decentralized P2P economic infrastructure which authenticates digital rights, transfers contracts, and turns digital information into assets through blockchain technology.",
        "ticker": "ELA",
        "tokenType": "Own wallet",
        "tokensSold": 57000000,
        "totalTokens": 33000000
    },
    {
        "name": "Ink Protocol",
        "description": "Decentralized reputation and payments for peer-to-peer marketplaces.",
        "ticker": "XNK",
        "tokenType": "ERC20",
        "tokensSold": 10918700,
        "totalTokens": 500000000
    },
    {
        "name": "Pundi X",
        "description": "Empowering blockchain developers and token holders to sell cryptocurrency and services on any physical stores in the world.",
        "ticker": "NPXS",
        "tokenType": "ERC20",
        "tokensSold": 23000000,
        "totalTokens": 175000000
    },
    {
        "name": "FORTUNA",
        "description": "Make the World More Transparent. The First Blockchain Platform for Global OTC Derivatives Market",
        "ticker": "FOTA",
        "tokenType": "ERC20",
        "tokensSold": 19500000,
        "totalTokens": 1000000000
    },
    {
        "name": "DATA",
        "description": "Decentralized AI-Powered Trust Alliance. DATA is a blockchain based advertising protocol and technology stack to resolve data fraud, the most overwhelming challenge in digital advertising economy.",
        "ticker": "DTA",
        "tokenType": "Own wallet"
    },
    {
        "name": "Bluzelle",
        "description": "Bluzelle brings together the sharing economy and token economy. Bluzelle enables people to rent out their computer storage space to earn a token while dApp developers pay with a token to have their data stored and managed in the most efficient way.*",
        "ticker": "BLZ",
        "tokenType": "ERC20",
        "tokensSold": null,
        "totalTokens": 500000000
    },
    {
        "name": "Devery",
        "description": "The Devery platform allows suppliers and consumers to prove the authenticity of their products online before purchase, essentially removing the need for ‘trust’ in e-commerce. It aims to protect brands and consumers from counterfeiting using blockchain powered product verification by providing unique, verifiable identifiers to each product throughout the supply chain.",
        "ticker": "EVE",
        "tokenType": "ERC20",
        "totalTokens": 100000000
    },
    {
        "name": "Mobius",
        "description": "Mobius closes the gap between the internet world and blockchain world through innovative and simple protocols that introduce new standards for cross-blockchain login, payment, governance, and oracles.",
        "ticker": "MOBI",
        "tokenType": "Stellar",
        "tokensSold": 30000000,
        "totalTokens": 888000000
    },
    {
        "name": "Zeepin",
        "description": "A Decentralized Creative Economy based on blockchain. Creative ecosystem, which has various kinds of tools (dApp): copyright protection, ensures tradable digital assets, remote cooperation, talent recruitment, and project crowd-funding. ",
        "ticker": "ZPT",
        "tokenType": "NEO Blockchain",
        "totalTokens": 1000000000
    },
    {
        "name": "OriginTrail",
        "description": "Purpose-built Protocol for Supply Chains Based on Blockchain",
        "ticker": "TRAC",
        "tokenType": "ERC20",
        "totalTokens": 500000000
    },
    {
        "name": "MatrixChain",
        "description": "MATRIX is an open-source blockchain platform that supports smart contracts and machine learning services. With its infrastructure re-built with artificial intelligence (AI) techniques, MATRIX revolutionizes the user experience of executing smart contracts by making the whole process faster, easier, and safer.",
        "ticker": "MAN",
        "tokenType": "ERC20",
        "tokensSold": 80000000,
        "totalTokens": 230000000
    },
    {
        "name": "Envion",
        "description": "Highly profitable, global crypto-mining-infrastructure - Hosted in mobile, modular CSC containers - Decentralized placement directly at energy source.",
        "ticker": "EVN",
        "tokenType": "ERC20",
        "totalTokens": 150000000
    },
    {
        "name": "InsurePal",
        "description": "InsurePal is a next generation of peer-to-peer insurance based on social proof endorsements, fully harnessing the power of blockchain innovation.",
        "ticker": "IPL",
        "tokenType": "ERC20",
        "tokensSold": 12000000,
        "totalTokens": 300000000
    },
    {
        "name": "AidCoin",
        "description": "AidCoin is the token used to donate transparently and to power AIDChain, a platform that provides an ecosystem of services for the non-profit sector",
        "ticker": "AID",
        "tokenType": "ERC20",
        "tokensSold": 3865900,
        "totalTokens": 100000000
    },
    {
        "name": "PARETO",
        "description": "The Pareto Network is the first peer to peer financial content marketplace. It connects providers of financial information in the cryptocurrency space with investors, providing foresight into market inefficiencies and opportunities. Content creators can earn money by sharing financial information that benefits people in the network. When investors compensate content creators, their ranking goes up which gives them faster access to more actionable information in the future.",
        "ticker": "PARETO",
        "tokenType": "ERC20",
        "totalTokens": 500000001
    },
    {
        "name": "carVertical",
        "description": "First global & decentralised car history registry. Built on Blockchain technology.",
        "ticker": "cV",
        "tokenType": "ERC20",
        "totalTokens": 9975348837
    },
    {
        "name": "Thekey.vip",
        "description": "A decentralized ecosystem of an identity verification tool using national big-data and blockchain.",
        "ticker": "TKY",
        "tokenType": "NEO Blockchain",
        "tokensSold": 20000000,
        "totalTokens": 10000000000
    },
    {
        "name": "Trinity",
        "description": "Trinity is applicable to blockchain transfer of NEP-5 standard tokens. As a Neo-version lightening network, Trinity achieves real-time payment, low transaction fees, scalability, and privacy protection of Neo mainnet assets through state channels technology.",
        "ticker": "TNC",
        "tokenType": "NEO Blockchain",
        "tokensSold": 6666000,
        "totalTokens": 1000000000
    },
    {
        "name": "GatCoin",
        "description": "GATCOIN transforms traditional discount coupons, loyalty points and shopping vouchers into liquid, tradable digital tokens on the Ethereum blockchain.",
        "ticker": "GAT",
        "tokenType": "ERC20",
        "tokensSold": 11900000,
        "totalTokens": 1000000000
    },
    {
        "name": "Selfkey",
        "description": "SelfKey is a blockchain based end-to-end digital identity system with an integrated marketplace, designed to put identity owners in control of their personal data, to allow them to request identity claims attestations and to instantly apply for passports, residency and financial services, sign up for exchanges and participate in token sales in a safe, secure manner.",
        "ticker": "KEY",
        "tokenType": "ERC20",
        "tokensSold": 15840000,
        "totalTokens": 6000000000
    },
    {
        "name": "adbank",
        "description": "adbank is a powerful platform built on the blockchain to remove middlemen & dramatically reduce the $50 billion problem of ad fraud using advanced AI technology.",
        "ticker": "ADB",
        "tokenType": "ERC20",
        "totalTokens": 1000000000
    },
    {
        "name": "Olympus Labs",
        "description": "Olympus is a groundbreaking financial ecosystem that defines the protocol for cryptocurrency-based financial products. The Olympus ecosystem provides investors with a comprehensive financial marketplace filled with financial products, services, and applications that serve their investment needs.",
        "ticker": "MOT",
        "tokenType": "ERC20",
        "tokensSold": 30000000,
        "totalTokens": 100000000
    },
    {
        "name": "LALA World",
        "description": "An Ecosystem for migrants and their unbanked families. LaLa is a new age one-stop Wallet based on ethereum and hyperledger blockchains allowing investors to capitalise on the rise of blockchain as well as the underbanked into the financial ecosystem. ",
        "ticker": "LALA",
        "tokenType": "ERC20",
        "totalTokens": 250000000
    },
    {
        "name": "aXpire",
        "description": "aXpire is a cloud-based and AI-enabled blockchain payment processing company, building the World's first blockchain based spend management system",
        "ticker": "AXP",
        "tokenType": "ERC223",
        "tokensSold": 30,
        "totalTokens": 350000000
    },
    {
        "name": "HOQU",
        "description": "HOQU is the first decentralized marketing platform that allows merchants and affiliates to interact directly without brokers and ensures fair cost per actions deals based on a smart contracts.",
        "ticker": "HQX",
        "tokenType": "ERC20",
        "totalTokens": 300854400
    },
    {
        "name": "SwissBorg",
        "description": "The SwissBorg project aims to revolutionize wealth management with a community-centric approach powered by Ethereum and smart shares. SwissBorg will be the first Swiss cyber bank offering tailor-made crypto investment services.",
        "ticker": "CHSB",
        "tokenType": "ERC20",
        "totalTokens": 1000000000
    },
    {
        "name": "Ontology Network",
        "description": "Ontology Network is a blockchain/distributed ledger network which combines distributed identity verification, data exchange, data collaboration, procedure protocols, communities, attestation, and various industry-specific modules",
        "ticker": "ONT",
        "tokenType": "NEO Blockchain",
        "totalTokens": 1000000000
    },
    {
        "name": "Crypterium",
        "description": "Cryptobank for Cryptopeople. A revolutionary digital cryptobank with a credit subtoken and an open platform",
        "ticker": "CRPT",
        "tokenType": "ERC20",
        "totalTokens": 300000000
    },
    {
        "name": "Shipchain",
        "description": "ShipChain is a fully integrated system across the entire supply chain, from the moment a shipment leaves the factory, to the final delivery on the customer's doorstep; federated in trustless, transparent blockchain contracts.",
        "ticker": "SHIP",
        "tokenType": "ERC20",
        "tokensSold": 30000000,
        "totalTokens": 500000000
    },
    {
        "name": "Theta token",
        "description": "Theta is a decentralized video delivery network, powered by users and an innovative new blockchain.",
        "ticker": "Theta",
        "tokenType": "ERC20",
        "tokensSold": 12800000,
        "totalTokens": 750000000
    },
    {
        "name": "ZILLIQA",
        "description": "Zilliqa is a new blockchain platform that is designed to scale in an open, permission-less distributed network securely.\nThe core feature that makes Zilliqa scalable is sharding — dividing the network into several smaller component networks \n(called shards) capable of processing transactions in parallel. ",
        "ticker": "ZIL",
        "tokenType": "ERC20",
        "tokensSold": 20000000,
        "totalTokens": 21000000000
    },
    {
        "name": "trade.io",
        "description": "trade.io is an innovative new blockchain trading platform that will disrupt the financial ecosystem and democratize the markets.\nWe use peer-to-peer platforms to support the trading of a wide range of assets, and will be launching our own cryptocurrency, the TradeToken",
        "ticker": "TIO",
        "tokenType": "ERC20",
        "tokensSold": 11806951,
        "totalTokens": 500000000
    },
    {
        "name": "Lamden",
        "description": "Robust ecosystem of dev tools that turns blockchain concepts into enterprise-grade apps capable of seamless communication and value exchange with other chains.",
        "ticker": "TAU",
        "tokenType": "ERC20",
        "totalTokens": 500000000
    },
    {
        "name": "Bloom",
        "description": "Bloom is an end-to-end protocol for identity attestation, risk assessment and credit scoring, entirely on the blockchain. Bloom allows both traditional and digital currency lenders to serve billions of people who currently cannot obtain a bank account or credit score.",
        "ticker": "BLT",
        "tokenType": "ERC20",
        "tokensSold": 10700000,
        "totalTokens": 150000000
    },
    {
        "name": "Covesting",
        "description": "Copy-trading platform for crypto currency markets. Peer-2-Peer Digital Asset Management Platform Combined with the most complete infrastructure for investors and traders",
        "ticker": "COV",
        "tokenType": "ERC20",
        "tokensSold": 1100000,
        "totalTokens": 20000000
    },
    {
        "name": "Loci",
        "description": "Loci will revolutionize the patent and invention process and empower a new wave of innovators.",
        "ticker": "LOCIcoin",
        "tokenType": "ERC20",
        "tokensSold": 1661884,
        "totalTokens": 100000000
    },
    {
        "name": "Telcoin",
        "description": "A cryptocurrency distributed by your mobile operator and accepted everywhere.",
        "ticker": "Telcoin",
        "tokenType": "ERC20",
        "totalTokens": 100000000000
    },
    {
        "name": "Gladius",
        "description": "Decentralized CDN and DDoS Protection on the Blockchain. An automated marketplace where you can rent out your spare bandwidth and storage as well as purchase content delivery and DDoS protection services.",
        "ticker": "GLA",
        "tokenType": "ERC20",
        "tokensSold": 14681000,
        "totalTokens": 96300000
    },
    {
        "name": "BitDegree",
        "description": "The world's first blockchain-powered online education platform with token scholarships & tech talent acquisition. BitDegree platform will offer students the best online courses with clear and transparent blockchain-based reward system and achievement tracking. It is also a unique tool for businesses to recruit tech talent and shape global education to their needs. ",
        "ticker": "BDG",
        "tokenType": "ERC20",
        "totalTokens": 660000000
    },
    {
        "name": "BANKEX",
        "description": "BANKEX is building a new blockchain technology that allows to tokenize various types of assets. Such Smart Assets could be sold worldwide building a new generation of decentralized capital markets.",
        "ticker": "BKX",
        "tokenType": "ERC20",
        "tokensSold": 20000000,
        "totalTokens": 400000000
    },
    {
        "name": "CanYa",
        "description": "CanYa is a peer to peer marketplace of skilled services - where users are instantly connected to service providers. Unlike most ICO's we already have a working product, high user growth and an experienced team - We soft launched our initial product in Australia late last year where we had extraordinary growth with zero marketing. Now we're conducting an ICO to fund expansion into the international market and to start CanYa’s journey to becoming a completely decentralized peer to peer marketplace of services.",
        "ticker": "CAN",
        "tokenType": "ERC20",
        "tokensSold": 2000000,
        "totalTokens": 100000000
    },
    {
        "name": "Sirin Labs",
        "description": "SIRIN LABS - the developer of SOLARIN, an ultra-secure mobile phone - is holding a crowdsale event. Funds raised will support the development of FINNEY™, the first open source blockchain smartphone and all-in-one PC.",
        "ticker": "SRN",
        "tokenType": "ERC20"
    },
    {
        "name": "INS Ecosystem",
        "description": "Decentralized Ecosystem Directly Connecting Grocery Manufacturers and Consumers",
        "ticker": "INS",
        "tokenType": "ERC20",
        "totalTokens": 50000000
    },
    {
        "name": "Uttoken",
        "description": "United Traders - The High-End Solutions in Trading Technology Since 2009",
        "ticker": "UTT",
        "tokenType": "ERC20",
        "totalTokens": 100000000
    },
    {
        "name": "SingularityNET",
        "description": "SingularityNET is a decentralized marketplace for AI algorithms",
        "ticker": "AGI",
        "tokenType": "ERC20",
        "tokensSold": 21000000,
        "totalTokens": 1000000000
    },
    {
        "name": "Qlink",
        "description": "Qlink, a decentralized mobile network, is dedicated to constructing an open-source telecom infrastructure on blockchain.",
        "ticker": "QLC",
        "tokenType": "NEO Blockchain",
        "tokensSold": 12900000,
        "totalTokens": 600000000
    },
    {
        "name": "AppCoins",
        "description": "AppCoins is the first cryptocurrency for app stores, serving 200 million active users. This new cryptocurrency gives users app purchasing power, unleashes monetization potential for developers and increases app safety.",
        "ticker": "APPC",
        "tokenType": "ERC20",
        "tokensSold": 1800000,
        "totalTokens": 450000000
    },
    {
        "name": "indaHash",
        "description": "indaHash - the award-winning app which connects over 300,000 influencers from 70 markets with global brands introduces the indaHash Coin. Our mission is to tokenize the entire influencer industry to solve major issues between brands, influencers and their audiences. Our cryptoeconomics implies circulation of the indahash coin among all of these groups and creates a new type of relationship and added value.\n\n",
        "ticker": "IDH",
        "tokenType": "ERC20",
        "tokensSold": 4800000,
        "totalTokens": 400000000
    },
    {
        "name": "Bread",
        "description": "Bread is the simple and secure bitcoin wallet",
        "ticker": "BRD",
        "tokenType": "ERC20",
        "tokensSold": 12000000,
        "totalTokens": 160000000
    },
    {
        "name": "SophiaTX",
        "description": "Blockchain Platform & Marketplace that integrates leading business applications covering major ERP, CRM, & SCM systems into a single collaborative environment.",
        "ticker": "SPHTX",
        "tokenType": "ERC20",
        "tokensSold": null,
        "totalTokens": 500000000
    },
    {
        "name": "NeuFund",
        "description": "Neufund is a community-owned fundraising platform. Neufund bridges the off-chain and on-chain world by creating the first equity token on blockchain.",
        "ticker": "NEU",
        "tokenType": "ERC20",
        "tokensSold": 2400000,
        "totalTokens": 1500000000
    },
    {
        "name": "Bounty0x",
        "description": "A decentralized bounty hunting platform enabling anyone to manage bounty programs, and bounty hunters to receive payment for completing bounty tasks.",
        "ticker": "BNTY",
        "tokenType": "ERC20",
        "tokensSold": 250000,
        "totalTokens": 500000000
    },
    {
        "name": "Nebulas",
        "description": "Nebulas is a decentralized platform which provides a search framework for all blockchains. It is an open source public chain.",
        "ticker": "NAS",
        "tokenType": "ERC20",
        "totalTokens": 100000000
    },
    {
        "name": "Coinlancer",
        "description": "Coinlancer is an Ethereum based freelancing platform which uses blockchain technology to create more meritocratic freelancing ecosystem. ",
        "ticker": "CL",
        "tokenType": "ERC20",
        "totalTokens": 300000000
    },
    {
        "name": "Naga",
        "description": "A smart new cryptocurrency for gaming and financial trading featuring SwipeStox and Switex.\n",
        "ticker": "NGC",
        "tokenType": "ERC20",
        "totalTokens": 400000000
    },
    {
        "name": "MediBloc",
        "description": "MediBloc is a decentralized healthcare information ecosystem for patients, healthcare providers and data researchers, built on blockchain technology.",
        "ticker": "MED",
        "tokenType": "QRC",
        "totalTokens": 10000000000
    },
    {
        "name": "DeepBrain Chain",
        "description": "DeepBrain Chain is an artificial intelligence computing platform driving by blockchain technology. In the future, every company will have a use case for artificial intelligence.",
        "ticker": "DBC",
        "tokenType": "NEO Blockchain",
        "tokensSold": 4837111,
        "totalTokens": 10000000000
    },
    {
        "name": "Aigang",
        "description": "Aigang is an autonomous insurance network - fully automated insurance for IoT devices and a platform for insurance innovation built around data.",
        "ticker": "AIX",
        "tokenType": "ERC20"
    },
    {
        "name": "GIFTO",
        "description": "GIFTO is designed to make instant, private payments via customized gifts to content creators online through our decentralized consumer-driven ecosystem implemented on smart contracts on the Ethereum blockchain.",
        "ticker": "GTO",
        "tokenType": "ERC20",
        "tokensSold": 20000000,
        "totalTokens": 1000000000
    },
    {
        "name": "Spectre",
        "description": "Financial prediction market platform backed by a tokenised liquidity pool",
        "ticker": "SXDT",
        "tokenType": "ERC20",
        "tokensSold": 6500000,
        "totalTokens": 240000000
    },
    {
        "name": "SportyFi",
        "description": "SportyFi is a decentralized sports investment & funding ecosystem. We will introduce a brand new industry of sports crowd micro-financing, while providing athletes, clubs and sport organizations with macro-funding on their respective end.Professional sport today has a high entry barrier - both for athletes as well as for small investors. SportyFi will remove these barriers and consequently change financing in the sports industry by deploying a blockchain-based financing platform. We will serve athletes, clubs and other sports organizations in raising the funds required to achieve athletic success by enabling a wider community to invest in sport, therefore disrupting the existing model for financing participants in this industry.\n",
        "ticker": "SPF",
        "tokenType": "ERC20",
        "totalTokens": 200000000
    },
    {
        "name": "aelf",
        "description": "A decentralized cloud computing Blockchain platform.",
        "ticker": "ELF",
        "tokenType": "ERC20",
        "totalTokens": 1000000000
    },
    {
        "name": "Universa",
        "description": "Universa is a blockchain protocol with high speed and low cost of procession operations.",
        "ticker": "UTN",
        "tokenType": "ERC20"
    },
    {
        "name": "Storm",
        "description": "Storm Market creates more earning opportunities for people all around the world by utilizing technology.",
        "ticker": "STORM",
        "tokenType": "ERC20",
        "tokensSold": 16500000,
        "totalTokens": 10000000000
    },
    {
        "name": "Leverj",
        "description": "Leverj is a decentralized leveraged crypto exchange that provides solutions to the inherent risks seen in centralized trading platforms.",
        "ticker": "LEV",
        "tokenType": "ERC20",
        "tokensSold": 8500000,
        "totalTokens": 1000000000
    },
    {
        "name": "Verify",
        "description": "Verify is a reputation protocol that tracks the transaction history of participants (buyers, sellers) and unlocks benefits for those with good reputation. Reputation is a history of all previous transactions. Every transaction is rated by both parties, and the reputation of each party is updated based on the feedback from the counterparty.",
        "ticker": "CRED",
        "tokenType": "ERC20",
        "totalTokens": 50000000
    },
    {
        "name": "fidentiaX",
        "description": "World's 1st Marketplace for Tradable Insurance Policies",
        "ticker": "fdX",
        "tokenType": "ERC20",
        "totalTokens": 130000000
    },
    {
        "name": "SmartMesh",
        "description": "SmartMesh is a blockchain-based start-up working on infrastructure level protocol to realize off-internet communication and payment.",
        "ticker": "SMT",
        "tokenType": "ERC20",
        "totalTokens": 3141592653
    },
    {
        "name": "DMarket",
        "description": "A decentralized marketplace to turn every virtual item into a real commodity.",
        "ticker": "DMarket",
        "tokenType": "ERC20",
        "tokensSold": 10444810,
        "totalTokens": 100000000
    },
    {
        "name": "Simple Token",
        "description": "Any app can launch branded tokens on open scalable side-chains, powered by Simple Token, a protocol for consumer-app tokenization and an ERC-20 utility token.",
        "ticker": "OST",
        "tokenType": "ERC20",
        "totalTokens": 800000000
    },
    {
        "name": "Vezt",
        "description": "Vezt is a blockchain-based platform that lets music fans share ownership with artists in their favorite songs.",
        "ticker": "VZT",
        "tokenType": "ERC20",
        "totalTokens": 50000000
    },
    {
        "name": "CRYPTO20",
        "description": "The First Tokenized Cryptocurrency Index Fund. Owning a diverse crypto-portfolio is now as easy as holding a single token - for anyone",
        "ticker": "C20",
        "tokenType": "ERC20",
        "totalTokens": 86206896
    },
    {
        "name": "Sense",
        "description": "Sense creates blockchain based smart contracts in chat and rewards humans for the contributions they make to one another conversationally, across Sensay and other messenger applications. Humans can monetize their proof of intelligence in the data used to train A.I. applications and agents. Sensay, the first application, creates a marketplace for peer to peer conversations.",
        "ticker": "SENSE",
        "tokenType": "ERC20",
        "tokensSold": 6000000,
        "totalTokens": 663636366
    },
    {
        "name": "Playkey",
        "description": "Decentralized gaming platform based on P2P and blockchain.",
        "ticker": "PKT",
        "tokenType": "ERC20",
        "totalTokens": 100000000
    },
    {
        "name": "LockChain",
        "description": "LockChain is a decentralized opensource bookings technology and an integrated marketplace, where hoteliers and property owners can rent their property globally, collect money and manage bookings without paying any commissions to middlemen.",
        "ticker": "LOC",
        "tokenType": "ERC20",
        "totalTokens": 50000000
    },
    {
        "name": "Genaro Network",
        "description": "Genaro is a decentralized storage network built on blockchain.",
        "ticker": "GNX",
        "tokenType": "ERC20",
        "totalTokens": 700000000
    },
    {
        "name": "ETHLend",
        "description": "Democratizing Lending Using the Ethereum Network. ETHLend offers a fully decentralized peer to peer lending Smart Contract which runs on the Ethereum blockchain and uses digital tokens as collateral.",
        "ticker": "LEND",
        "tokenType": "ERC20",
        "tokensSold": 600000,
        "totalTokens": 1300000000
    },
    {
        "name": "WaBi",
        "description": "WaBi is a digital token backed by safe products. We place secure anti-counterfeiting labels on consumer products in China and internationally",
        "ticker": "WABI",
        "tokenType": "ERC20",
        "totalTokens": 100000000
    },
    {
        "name": "Presearch",
        "description": "Presearch is a decentralized search engine, powered by the community.",
        "ticker": "PST",
        "tokenType": "ERC20",
        "totalTokens": 1000000000
    },
    {
        "name": "Snovio",
        "description": "World's first decentralized lead generation platform",
        "ticker": "SNOV",
        "tokenType": "ERC20",
        "totalTokens": 25000000000
    },
    {
        "name": "WAX",
        "description": "WAX allows gamers to trade whenever, wherever, peer-to-peer. From the founders of OPSKINS the #1 virtual goods marketplace for online video games.",
        "ticker": "WAX",
        "tokenType": "ERC20",
        "tokensSold": 45500000,
        "totalTokens": 1850000000
    },
    {
        "name": "Datum",
        "description": "Datum is a global data marketplace that allows you to make money from your own data. ",
        "ticker": "DAT",
        "tokenType": "ERC20",
        "tokensSold": 1500000,
        "totalTokens": 3000000000
    },
    {
        "name": "BitClave",
        "description": "Decentralized Search. User behavior and search data is worth billions to companies — should users be compensated for this? It's time to take the internet back.",
        "ticker": "CAT",
        "tokenType": "ERC20",
        "tokensSold": 22141493,
        "totalTokens": 2000000000
    },
    {
        "name": "Mercury Protocol",
        "description": "The Future of Communication Platforms Built on the Ethereum Blockchain",
        "ticker": "GMT",
        "tokenType": "ERC20",
        "tokensSold": 4000000,
        "totalTokens": 1000000000
    },
    {
        "name": "MyWish",
        "description": "MyWish platform is an ecosystem of smart contracts accumulating a complex of blockchain solutions designed to integrate high technologies into the real sector.",
        "ticker": "WISH",
        "tokenType": "ERC20"
    },
    {
        "name": "Starbase",
        "description": "Using the power of blockchain, Starbase will connect people all over the world. Introducing those who are passionate about conquering difficult challenges with the necessary team and funding to accomplish their goals.",
        "ticker": "STAR",
        "tokenType": "ERC20",
        "tokensSold": 8000000,
        "totalTokens": 1000000000
    },
    {
        "name": "Flixxo",
        "description": "Decentralized video distribution network",
        "ticker": "FLIXX",
        "tokenType": "ERC20",
        "totalTokens": 1000000000
    },
    {
        "name": "Divi Project",
        "description": "Divi is a new blockchain and \"Smart Wallet\" created to bridge the gap between the crypto world and the masses.",
        "ticker": "DIVX",
        "tokenType": "ERC20",
        "totalTokens": 79999992
    },
    {
        "name": "Aion",
        "description": "The Third Generation Blockchain Network. A multi-tier blockchain system designed to address unsolved questions of scalability, privacy, and interoperability in blockchain networks.",
        "ticker": "AION",
        "tokenType": "ERC20",
        "tokensSold": 8075000
    },
    {
        "name": "ARToken",
        "description": "Decentralized AR/VR ecosystem for 3D content exchange. ",
        "ticker": "CAPP",
        "tokenType": "ERC20",
        "totalTokens": 7000000000
    },
    {
        "name": "CyberMiles",
        "description": "CyberMiles is a new blockchain protocol designed to empower the decentralization of online marketplace and e-commerce platforms",
        "ticker": "CMT",
        "tokenType": "ERC20",
        "tokensSold": 10000000,
        "totalTokens": 1000000000
    },
    {
        "name": "Bodhi",
        "description": "Build the most popular prediction market by combining blockchain with the internet",
        "ticker": "BOT",
        "tokenType": "QRC",
        "tokensSold": 10000000,
        "totalTokens": 100000000
    },
    {
        "name": "Time New Bank",
        "description": "Empowering the Decentralization of Online Time-Exchange Marketplaces",
        "ticker": "TNB",
        "tokenType": "ERC20",
        "tokensSold": 1500000,
        "totalTokens": 6000000000
    },
    {
        "name": "UTRUST",
        "description": "UTRUST is a revolutionary payment platform that empowers buyers to pay with cryptocurrencies while providing a groundbreaking purchase protection mechanism.",
        "ticker": "UTRUST",
        "tokenType": "ERC20",
        "tokensSold": 1500000,
        "totalTokens": 500000000
    },
    {
        "name": "Zap Store",
        "description": "An open marketplace for data feeds that can be oraclized to connect to smart contracts and Decentralized Applications",
        "ticker": "ZAP",
        "tokenType": "ERC20",
        "totalTokens": 520000000
    },
    {
        "name": "Quantstamp",
        "description": "Quantstamp is the first scalable security-audit protocol designed to find vulnerabilities in Ethereum smart contracts.",
        "ticker": "QSP",
        "tokenType": "ERC20",
        "tokensSold": 18600000,
        "totalTokens": 1000000000
    },
    {
        "name": "MicroMoney",
        "description": "MicroMoney is an Open Source Credit & Big Data Bureau that connects new customers to all existing financial services. MicroMoney A.I. platform uses complex algorithms to predict creditworthiness of all customers and in just 15 minutes a borrower can get their very first loan in his/her life just from their smartphone.",
        "ticker": "AMM",
        "tokenType": "ERC20",
        "tokensSold": 3140000,
        "totalTokens": 60000000
    },
    {
        "name": "B2BX",
        "description": "The first cryptocurrency exchange-aggregator for institutional clients. We provide cryptocurrency liquidity for brokers, stock exchanges, hedge funds and other institutional clients",
        "ticker": "B2BX",
        "tokenType": "ERC20",
        "tokensSold": 1180000,
        "totalTokens": 50000000
    },
    {
        "name": "Oracles Network",
        "description": "Ethereum-based public network with PoA consensus, which makes Smart Contract execution faster and cheaper.",
        "ticker": "POA",
        "tokenType": "Own wallet",
        "totalTokens": 252460800
    },
    {
        "name": "Privatix",
        "description": "Decentralized and 100% autonomous P2P VPN Network on blockchain with the first Internet bandwidth marketplace powered by own crypto-economy.",
        "ticker": "PRIXY",
        "tokenType": "ERC20",
        "totalTokens": 10000000
    },
    {
        "name": "Matryx",
        "description": "Matryx is a platform for decentralized collaboration. Matryx consists of a bounty system, a library of digital assets, and a marketplace. Problems are posted, along with a bounty for a verified solution. Users then collaborate to solve problems, share results, and earn rewards. ",
        "ticker": "MTX",
        "tokenType": "ERC20",
        "totalTokens": 314159265
    },
    {
        "name": "Soma",
        "description": "Soma is a revolutionary decentralized platform which facilitates trade inside the Soma Community through a rewarding system that enables beneficial collaboration of the community members.",
        "ticker": "SCT",
        "tokenType": "ERC20",
        "totalTokens": 60000000
    },
    {
        "name": "Genesis Vision",
        "description": "Genesis Vision is the platform for the private trust management market, built on Blockchain technology and Smart Contracts.",
        "ticker": "GVT",
        "tokenType": "ERC20",
        "totalTokens": 44000000
    },
    {
        "name": "Publica",
        "description": "Publica will be a platform for authors, readers, books of all kinds and the people who make them. And for smart contracts to carry all kinds of transactions and exchanges for the publishing economy.",
        "ticker": "PBL",
        "tokenType": "ERC20",
        "totalTokens": 100000000
    },
    {
        "name": "Grid+",
        "description": "Grid+ is a utility provider that exposes its customers to wholesale electricity prices.",
        "ticker": "GRID",
        "tokenType": "ERC20",
        "tokensSold": 29000000,
        "totalTokens": 300000000
    },
    {
        "name": "QASH",
        "description": "QUOINE LIQUID PLATFORM is a single globally-sourced trading platform with an associated suite of services. Combined, these produce the highest level of liquidity in the world—allowing any individual to access the opportunities and wealth the new Crypto economy offers.",
        "ticker": "QASH",
        "tokenType": "ERC20",
        "totalTokens": 1000000000
    },
    {
        "name": "COMSA",
        "description": "The ICO solution for centralized businesses to adopt blockchain technologies",
        "ticker": "CMS",
        "tokenType": "NEM Blockchain"
    },
    {
        "name": "Ripio Credit Network",
        "description": "Ripio Credit Network is a global credit network based on cosigned smart contracts and blockchain technology that connects lenders and borrowers located anywhere in the world and on any currency.\n\n",
        "ticker": "RCN",
        "tokenType": "ERC20",
        "tokensSold": 31000000,
        "totalTokens": 1000000000
    },
    {
        "name": "Ignis",
        "description": "Jelurida is developing its next generation scalable blockchain platform – Ardor, currently running on a testnet. The unique design of this platform allows the simultaneous existence of multiple blockchains, known as child chains, with many features and with their security guaranteed on a global level by the parent Ardor chain.",
        "ticker": "IGNIS",
        "tokenType": "Own wallet"
    },
    {
        "name": "Dragonchain",
        "description": "Flexible Public/Private Hybrid Blockchain Platform. Opinions do not reflect the position of the Walt Disney Company.",
        "ticker": "DRGN",
        "tokenType": "ERC20",
        "tokensSold": 1400000,
        "totalTokens": 433494437
    },
    {
        "name": "Raiden Network",
        "description": "Off-chain scaling solution, enabling near-instant, low-fee and scalable payments.",
        "ticker": "RDN",
        "tokenType": "ERC20",
        "totalTokens": 100000000
    },
    {
        "name": "Dentacoin",
        "description": "Dentacoin is the first Blockchain concept designed for the Global Dental Industry.",
        "ticker": "DCN",
        "tokenType": "ERC20",
        "totalTokens": 8000000000000
    },
    {
        "name": "ATLANT",
        "description": "Invest. Rent. Trade. World’s Real Estate Blockchain Platform",
        "ticker": "ATL",
        "tokenType": "ERC20",
        "totalTokens": 150000000
    },
    {
        "name": "Enjin Coin",
        "description": "Customizable cryptocurrency and virtual goods platform for gaming.",
        "ticker": "ENJ",
        "tokenType": "ERC20",
        "tokensSold": 12000000,
        "totalTokens": 1000000000
    },
    {
        "name": "TokenStars",
        "description": "The first platform to tokenize people. Tokenize celebrities: athletes, actors, rock‑bands... anyone",
        "ticker": "ACE",
        "tokenType": "ERC20",
        "totalTokens": 165000000
    },
    {
        "name": "Aeron",
        "description": "The new standard of aviation safety powered by blockchain",
        "ticker": "ARN",
        "tokenType": "ERC20",
        "totalTokens": 100000000
    },
    {
        "name": "CryptoPay",
        "description": "Cryptopay has been in operation since 2013 and is one of the longest running digital currency service providers in Europe.",
        "ticker": "CPAY",
        "tokenType": "ERC20"
    },
    {
        "name": "Horizon State",
        "description": "Horizon State is the future of voting and collaborative decision making.",
        "ticker": "HST",
        "tokenType": "ERC20",
        "tokensSold": 126000,
        "totalTokens": 1000000000
    },
    {
        "name": "Etherparty",
        "description": "Etherparty is about simple tools for the next generation of Blockchain-connected economies powered by Smart Contract automation. No programming required.",
        "ticker": "FUEL",
        "tokenType": "ERC20",
        "tokensSold": 24000000,
        "totalTokens": 1000000000
    },
    {
        "name": "BLOCKv",
        "description": "BLOCKv provides a platform for the developer community to create and distribute vAtoms: dynamic, compelling digital goods that provide new models of blockchain utility and commerce potential.",
        "ticker": "VEE",
        "tokenType": "ERC20",
        "tokensSold": 20000000
    },
    {
        "name": "Astronaut",
        "description": "Invest on autopilot. One token focused on growth, transparency, revenue",
        "ticker": "ASTRO",
        "tokenType": "ERC20",
        "tokensSold": 2303506,
        "totalTokens": 30000000
    },
    {
        "name": "UnikoinGold",
        "description": "A Decentralized Esports Betting Token",
        "ticker": "UKG",
        "tokenType": "ERC20",
        "totalTokens": 1000000000
    },
    {
        "name": "COBINHOOD",
        "description": "Zero trading fee cryptocurrency exchange",
        "ticker": "COB",
        "tokenType": "ERC20",
        "totalTokens": 1000000000
    },
    {
        "name": "Electroneum",
        "description": "Electroneum is a leap forwards in the accessibility of cryptocurrencies.",
        "ticker": "ETN",
        "tokenType": "Own wallet",
        "totalTokens": 21000000000
    },
    {
        "name": "Ambrosus",
        "description": "Combining high-tech sensors, blockchain protocol and smart contracts, we are building a universally verifiable, community-driven ecosystem to assure the quality, safety & origins of products.",
        "ticker": "AMB",
        "tokenType": "ERC20"
    },
    {
        "name": "Qvolta",
        "description": "P2P cryptocurrency-fiat exchange. Sell and buy crypto assets around the world for local payment methods",
        "ticker": "QVT",
        "tokenType": "ERC20",
        "totalTokens": 18000000
    },
    {
        "name": "DOVU",
        "description": "DOVU is shaping the crypto model for the mobility ecosystem. ",
        "ticker": "DOV",
        "tokenType": "ERC20",
        "totalTokens": 1200000000
    },
    {
        "name": "HEROcoin",
        "description": "Revolutionizing Online Betting. 223,748+ users are already betting on their favourite esports games on our platform",
        "ticker": "PLAY",
        "tokenType": "ERC20",
        "totalTokens": 2000000
    },
    {
        "name": "eidoo",
        "description": "Fast, easy, and not only a Multicurrency Wallet: it's a Hybrid Exchange too. It's Eidoo.",
        "ticker": "EDO",
        "tokenType": "ERC20",
        "totalTokens": 100000000
    },
    {
        "name": "Change Bank",
        "description": "A TRULY DECENTRALISED CRYPTO BANK. Change Coin is a revolutionary financial proposition that materializes the vision of finance without borders through cryptocurrency.",
        "ticker": "CAG",
        "tokenType": "ERC20",
        "tokensSold": 9878150,
        "totalTokens": 306250000
    },
    {
        "name": "Request Network",
        "description": "A decentralized network built on top of Ethereum, which allows anyone, anywhere to request a payment.",
        "ticker": "REQ",
        "tokenType": "ERC20",
        "totalTokens": 1000000000
    },
    {
        "name": "Paragon",
        "description": "The cannabis industry has traditionally been fragmented, untrustworthy, and illicit, but it is now moving towards greater legitimacy. Paragon will bridge gap and connect the links in this industry with the power of blockchain based smart contracts.",
        "ticker": "PRG",
        "tokenType": "ERC20",
        "totalTokens": 200000000
    },
    {
        "name": "Credit Protocol",
        "description": "Democratizing the creation of credit through permanently recorded debts and obligations on the blockchain.  BlockMason.",
        "ticker": "CPT",
        "tokenType": "ERC20",
        "tokensSold": 5400000,
        "totalTokens": 116158667
    },
    {
        "name": "bitJob",
        "description": "A Global, Decentralized Marketplace for Student Employment. Powered by Ethereum Blockchain.",
        "ticker": "STU",
        "tokenType": "ERC20",
        "totalTokens": 200000000
    },
    {
        "name": "Streamr",
        "description": "Unstoppable data for unstoppable, decentralized apps. Powered by Ethereum.",
        "ticker": "DATA",
        "tokenType": "ERC20",
        "tokensSold": 5200000,
        "totalTokens": 1000000000
    },
    {
        "name": "Anryze",
        "description": "Distributed Computing Network for Speech Recognition.",
        "ticker": "RYZ",
        "tokenType": "Waves blockchain",
        "totalTokens": 385200000
    },
    {
        "name": "AirSwap",
        "description": "Swap is a protocol to facilitate a true peer-to-peer ecosystem for trading tokens on the Ethereum blockchain.",
        "ticker": "AST",
        "tokenType": "ERC20",
        "tokensSold": 20000000,
        "totalTokens": 500000000
    },
    {
        "name": "LAToken",
        "description": "LAToken is a blockchain protocol and platform for creating and trading asset tokens. It allows cryptoholders to diversify their portfolio by getting access to tokens linked to the price of real assets. LAToken enables asset owners to unlock the value of assets by creating and selling their asset tokens.",
        "ticker": "LAT",
        "tokenType": "ERC20",
        "totalTokens": 1000000000
    },
    {
        "name": "Maecenas",
        "description": "The first open blockchain platform that democratises access to Fine Art",
        "ticker": "ART",
        "tokenType": "ERC20"
    },
    {
        "name": "DomRaider",
        "description": "Decentralized blockchain auctions in real-time",
        "ticker": "DRT",
        "tokenType": "ERC20",
        "totalTokens": 1000000000
    },
    {
        "name": "Red Pulse",
        "description": "Red Pulse is an event-driven market intelligence platform covering China’s financial markets, providing clients with the context to make informed business decisions. We employ machine learning",
        "ticker": "RPX",
        "tokenType": "NEO Blockchain"
    },
    {
        "name": "PayPie",
        "description": "PayPie platform brings ultimate trust and transparency to the financial markets by introducing the world’s first risk score algorithm based on decentralized accounting.",
        "ticker": "PPP",
        "tokenType": "ERC20",
        "totalTokens": 165000000
    },
    {
        "name": "AirToken",
        "description": "Mobile internet access using advertising and micro-spotting",
        "ticker": "AIR",
        "tokenType": "ERC20",
        "tokensSold": 6500000,
        "totalTokens": 1500000000
    },
    {
        "name": "PowerLedger",
        "description": "World Lead. P2P Blockchain Full Stack Technology Energy Company. Trade & settle trustless low cost power. Utility in a box! AUD $17 000 000 Raised in Pre-Sale!",
        "ticker": "POWR",
        "tokenType": "ERC20",
        "tokensSold": 13500000,
        "totalTokens": 1000000000
    },
    {
        "name": "Wanchain",
        "description": "Wanchain seeks to create a new distributed financial infrastructure, connecting different blockchain networks together to exchange value.",
        "ticker": "WAN",
        "tokenType": "ERC20",
        "totalTokens": 210000000
    },
    {
        "name": "Real",
        "description": "REAL is an Ethereum Smart-Contracts governed crowdfunding platform that focuses on Real Estate investments. ",
        "ticker": "REAL",
        "tokenType": "ERC20",
        "totalTokens": 100000000
    },
    {
        "name": "ALIS",
        "description": "ALIS is a social media platform which provides our customers with reliable information from experts in no time. We were inspired by STEEM (https://steem.io) and their billions of evaluations to create a media platform specialized for the Japanese market.",
        "ticker": "ALIS",
        "tokenType": "ERC20",
        "totalTokens": 500000000
    },
    {
        "name": "Internxt",
        "description": "Internxt, a simple, more private and secure decentralized cloud for files, apps and websites.",
        "ticker": "INXT",
        "tokenType": "ERC20",
        "totalTokens": 49145000
    },
    {
        "name": "Centra",
        "description": "The Centra Card has been designed to connect the bridge between commerce and cryptocurrency. ",
        "ticker": "CTR",
        "tokenType": "ERC20",
        "tokensSold": 17414317
    },
    {
        "name": "Kin",
        "description": "A decentralized ecosystem of digital services for daily life. From creator of Kik messenger",
        "ticker": "KIN",
        "tokenType": "ERC20",
        "totalTokens": 1000000000000
    },
    {
        "name": "Cindicator",
        "description": "Hybrid Intelligence for Effective Asset Management",
        "ticker": "CND",
        "tokenType": "ERC20"
    },
    {
        "name": "Modum",
        "description": "Modum combines IoT sensors with blockchain technology to provide data integrity for transactions of physical products, streamlining supply chain processes in many sectors.",
        "ticker": "MOD",
        "tokenType": "ERC20",
        "totalTokens": 30000000
    },
    {
        "name": "ICON",
        "description": "The ICON project is building one of the largest decentralized networks in the world. ",
        "ticker": "ICX",
        "tokenType": "ERC20",
        "totalTokens": 400230000
    },
    {
        "name": "ChainLink",
        "description": "The LINK Network provides smart contracts with data, bank payments and access to APIs.",
        "ticker": "LINK",
        "tokenType": "ERC20",
        "totalTokens": 1000000000
    },
    {
        "name": "Substratum",
        "description": "An open-source network that allows anyone to allocate their spare computing resources to make the internet a free and fair place for the entire world.",
        "ticker": "SUB",
        "tokenType": "ERC20"
    },
    {
        "name": "KICKICO",
        "description": "Unified platform for ICO, crowdinvesting & crowdfunding powered by smart contracts. Token - KICKCOIN",
        "ticker": "KICK",
        "tokenType": "ERC20",
        "totalTokens": 600000000
    },
    {
        "name": "KyberNetwork",
        "description": "KyberNetwork is a new system which allows the exchange and conversion of digital assets. ",
        "ticker": "KNC",
        "tokenType": "ERC20"
    },
    {
        "name": "Social",
        "description": "Decentralized cross platform social network",
        "ticker": "SCL",
        "tokenType": "ERC20"
    },
    {
        "name": "BitDice",
        "description": "BitDice Casino is a well-established and profitably operating cryptocurrency casino that is seeking capital contributions from the public to transform itself into a new-generation platform for online gaming experience.",
        "ticker": "CSNO",
        "tokenType": "ERC23",
        "totalTokens": 100000000
    },
    {
        "name": "Blackmoon",
        "description": "Blackmoon Crypto offers a vision for a new standard for tokenized investment vehicles that will bridge the gap between the fiat* and crypto universes.",
        "ticker": "BMC",
        "tokenType": "ERC20"
    },
    {
        "name": "Enigma",
        "description": "The data-driven crypto investment platform. Powered by the Enigma data marketplace.",
        "ticker": "ENG",
        "tokenType": "ERC20",
        "totalTokens": 100000000
    },
    {
        "name": "Rivetz",
        "description": "The Decentralized & Mobile Cyber Security Token",
        "ticker": "RVT",
        "tokenType": "ERC20",
        "totalTokens": 200000000
    },
    {
        "name": "Filecoin",
        "description": "A distributed data storage network backed by a token",
        "ticker": "FIL",
        "tokenType": "ERC20"
    },
    {
        "name": "Indorse",
        "description": "Decentralized Professional Network. Powered by blockchain technology, you own your data and get paid for your contributions",
        "ticker": "IND",
        "tokenType": "ERC20"
    },
    {
        "name": "Hubii Network",
        "description": "A blockchain-based decentralised content marketplace",
        "ticker": "HBT",
        "tokenType": "ERC20"
    },
    {
        "name": "Aventus",
        "description": "Aventus is a fair, secure, and transparent blockchain-based event ticketing solution that practically eliminates fraud and unregulated touting.",
        "ticker": "AVT",
        "tokenType": "ERC20",
        "totalTokens": 10000000
    },
    {
        "name": "Viberate",
        "description": "Viberate is a crowdsourced live music ecosystem and a blockchain-based marketplace, where musicians are matched with booking agencies and event organizers. We're listing profiles of over 150,000 artists, 2,000 booking agencies, 60,000 venues and 500,000 events.",
        "ticker": "VIB",
        "tokenType": "ERC20",
        "totalTokens": 200000000
    },
    {
        "name": "Tron",
        "description": "TRON is a blockchain-based, open-source protocol for the global digital entertainment industry. TRON supports various kinds of blockchain networks and smart contract systems, including bitcoin, Ethereum, EOS, Qtum, and other public blockchain smart contracts, provides developers with multiprotocol infrastructure for entertainment app development, and allows users to enjoy smooth multiprotocol smart networks.",
        "ticker": "TRX",
        "tokenType": "ERC20",
        "totalTokens": 100000000000
    },
    {
        "name": "Monetha",
        "description": "Decentralized Trust and Reputation system with build-in payments for merchants",
        "ticker": "MTH",
        "tokenType": "ERC20"
    },
    {
        "name": "Everex",
        "description": "Creating a Global, Inclusive Economy with Blockchain-Powered Microfinance and Remittance Services",
        "ticker": "EVX",
        "tokenType": "ERC20",
        "totalTokens": 22700000
    },
    {
        "name": "ChronoLogic",
        "description": "ChronoLogic merges time with the blockchain. It’s an introduction of Proof of Time innovations for blockchain technologies.",
        "ticker": "DAY",
        "tokenType": "ERC20"
    },
    {
        "name": "DIMCOIN",
        "description": "The Data Interchange Module (DIM) cryptocurrency is a new form of digital cryptocurrency. DIMCOIN. TOMORROW. TODAY.",
        "ticker": "DIM",
        "tokenType": "NEM Blockchain",
        "totalTokens": 9000000
    },
    {
        "name": "OPUS",
        "description": "Opus is a open-source decentralized music sharing platform with demo based on Ethereum and IPFS.",
        "ticker": "OPT",
        "tokenType": "ERC23",
        "totalTokens": 1600000000
    },
    {
        "name": "Decentraland",
        "description": "A virtual world that runs on open standards",
        "ticker": "MANA",
        "tokenType": "ERC20"
    },
    {
        "name": "Lampix",
        "description": "WE TRANSFORM ANY SURFACE INTO A SMART SURFACE",
        "ticker": "PIX",
        "tokenType": "ERC20",
        "totalTokens": 1100000000
    },
    {
        "name": "Agrello",
        "description": "Legally Binding Smart Contracts, Powered by AI",
        "ticker": "DLT",
        "tokenType": "ERC20"
    },
    {
        "name": "BlockCAT",
        "description": "Smart Contracts for Everyone",
        "ticker": "CAT",
        "tokenType": "ERC20"
    },
    {
        "name": "0x",
        "description": "The Protocol for Trading Tokens",
        "ticker": "ZRX",
        "tokenType": "ERC20",
        "totalTokens": 1000000000
    },
    {
        "name": "SALT",
        "description": "The SALT Lending Platform allows holders of blockchain assets to leverage their holdings as collateral for cash loans. SALT is the first asset-backed lending platform to give blockchain asset holders access to liquidity without them having to sell their tokens.",
        "ticker": "SALT",
        "tokenType": "ERC20",
        "totalTokens": 120000000
    },
    {
        "name": "Po.et",
        "description": "Universal ledger designed to track ownership and attribution for digital creative assets.",
        "ticker": "POE",
        "tokenType": "ERC20",
        "totalTokens": 3141592653
    },
    {
        "name": "Tierion",
        "description": "Tierion is using the blockchain to transform how the world secures and shares data.",
        "ticker": "TNT",
        "tokenType": "ERC20",
        "totalTokens": 1000000000
    },
    {
        "name": "Tezos",
        "description": "Tezos is a new decentralized blockchain that governs itself by establishing a true digital commonwealth. It facilitates formal verification, a technique which mathematically proves the correctness of the code governing transactions and boosts the security of the most sensitive or financially weighted smart contracts. ",
        "ticker": "XTZ",
        "tokenType": "ERC20"
    },
    {
        "name": "Polybius",
        "description": "Polybius is a project aimed to create a regulated bank for the digital generation.",
        "ticker": "PLBT",
        "tokenType": "ERC20",
        "totalTokens": 3969565
    },
    {
        "name": "EOS",
        "description": "The Most Powerful Infrastructure for Decentralized Applications",
        "ticker": "EOS",
        "tokenType": "ERC20",
        "totalTokens": 1000000000
    },
    {
        "name": "TenX",
        "description": "TenX’s debit card and banking licence will allow us to be a hub for the blockchain ecosystem to connect for real-world use cases.",
        "ticker": "PAY",
        "tokenType": "ERC20"
    },
    {
        "name": "OmiseGo",
        "description": "OmiseGO is a public Ethereum-based financial technology for use in mainstream digital wallets, that enables real-time, peer-to-peer value exchange and payment services agnostically across jurisdictions and organizational silos, and across both fiat money and decentralized currencies. Designed to enable financial inclusion and disrupt existing institutions, access will be made available to everyone via the OmiseGO network and digital wallet framework, starting in Q4 2017.",
        "ticker": "OMG",
        "tokenType": "ERC20"
    },
    {
        "name": "Civic",
        "description": "Civic’s model allows for on-demand, secure and lower cost access to identity verification via the blockchain.",
        "ticker": "CVC",
        "tokenType": "ERC20",
        "totalTokens": 1000000000
    },
    {
        "name": "Status Network",
        "description": "Status is a browser, messenger, and gateway to the decentralized world of Ethereum",
        "ticker": "SNT",
        "tokenType": "ERC20"
    },
    {
        "name": "SONM",
        "description": "SONM is a decentralized worldwide fog computer for any general purpose computing − from site hosting to scientific calculations.",
        "ticker": "SNM",
        "tokenType": "ERC20"
    },
    {
        "name": "Monaco",
        "description": "World's best cryptocurrency card. Spend and send money globally at perfect interbank exchange rates.",
        "ticker": "MCO",
        "tokenType": "ERC20",
        "totalTokens": 31587682
    },
    {
        "name": "Bancor",
        "description": "Bancor is a Decentralized Liquidity Network that allows you to hold any Ethereum token and convert it to any other token in the network, with no counter party, at an automatically calculated price, using a simple web wallet.",
        "ticker": "BNT",
        "tokenType": "ERC20"
    },
    {
        "name": "Cofound.it",
        "description": "A blockchain-based platform to connect start-ups with investors and experts for funding and advice",
        "ticker": "CFI",
        "tokenType": "ERC20",
        "totalTokens": 500000000
    },
    {
        "name": "MobileGo",
        "description": "MobileGo - a smart token that can facilitate peer-to-peer matchplay and decentralized tournaments for millions of competitive gamers worldwide.",
        "ticker": "MGO",
        "tokenType": "ERC20",
        "totalTokens": 100000000
    },
    {
        "name": "Storj",
        "description": "Decentralized cloud storage platform.",
        "ticker": "STORJ",
        "tokenType": "ERC20",
        "totalTokens": 500000000
    },
    {
        "name": "ChronoBank",
        "description": "ChronoBank.io is an ambitious and wide-ranging blockchain project, aimed at disrupting the HR/recruitment/finance industries in a similar way to how Uber disrupted the taxi business and how Upwork represented an evolution in freelancing.",
        "ticker": "TIME",
        "tokenType": "ERC20"
    }
];

tokens2.forEach(function(token) {
    tokens1.find(function(item) {
        if (item.name === token.name) {
            var obj = {};
            obj.name = item.name;
            obj.identifier = item.ticker;
            obj.icoPrice = item.icoPrice;
            obj.ticker = token.ticker;
            obj.description = token.description;
            obj.tokenType = token.tokenType;
            newTokens.push(obj);
        }
    });
});

fs.writeFile('completed.json', JSON.stringify(newTokens), function (err) {
    if (err)
        return console.log(err);
});

console.log(newTokens);

