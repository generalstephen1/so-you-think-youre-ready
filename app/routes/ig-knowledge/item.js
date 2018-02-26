import Ember from 'ember';
import { massage } from '../../helpers/massage-data'
import { slugComparison } from '../../helpers/slug-comparison'

export default Ember.Route.extend({
    templateName: 'route-entrypoint',
    data: null,

    init() {
        this.set('data', massage(this.rawData, 'ig-knowledge'));
    },

    model(params) {
        return slugComparison(this.get('data'), params.slug);
    },

    rawData: {
        title: 'Knowledge of IG',
        points: [
            {
                'shortTitle': 'Asset classes and markets',
                'title': "Identify which asset class a market belongs to",
                'level': 1,
                'approved': false,
                'content': [
                    {
                        type: 'list',
                        title: 'The traditional four types of asset class are:',
                        data: [
                            "Equities (or stocks): the shares that make up the ownership of public companies.",
                            "Fixed income: investments that pay interest over time, then return the original sum paid. Bonds are the most common form of fixed income asset.",
                            "Money market: cash and its equivalents, very liquid but without much room for growth. Currencies are included in this class.",
                            "Alternative investments: some very popular markets are classed as alternative investments. Property and commodities feature here, though many investors would put them in their own asset class.",
                        ]
                    },{
                        data: [
                            "To prevent the risk associated with investing in one section of the market, many investment strategies recommend spreading trades out across many or all of the above asset classes. This is referred to as diversification (or diversifying)."
                        ]
                    }
                ],
            }, {
                'shortTitle': 'Advantages of CFDs',
                'title': "List the advantages of trading CFDs over physical shares",
                'level': 2,
                'approved': true,
                'content': [
                    {
                        data: [
                            'CFD (Contracts for Difference) is a way of speculating on financial markets that doesn\'t require the investor to buys and sell the underlying assets',
                        ]
                    }, {
                        type: 'list',
                        title: 'Benefits of CFD\'s',
                        data: [
                            'No stamp duty',
                            'Access to thousands of markets',
                            'Utilisation of leverage can get exposure to a much larger position with minimal commitment',
                            'You can "Go Short" and speculate that a market will fall, and make money off that',
                        ]
                    }
                ],
            }, {
                'shortTitle': 'CFD vs Spread Bet',
                'title': "Explain the difference between CFD trading and spread betting",
                'level': 2,
                'approved': true,
                'content': [
                    {
                        data: [
                            'The primary difference is that Spread Betting has no capital gains tax',
                            'Other differences include No commission on SB, however CFD has the benefits of trading the market price on shares and DMA on forex',
                        ]
                    }
                ],
            }, {
                'shortTitle': 'IG Revenue',
                'title': "Demonstrate how IG make money",
                'level': 1,
                'approved': false,
                'content': [
                    {
                        data: [
                            'IG makes it\'s money from from premium service fees, but primarily from the spread.',
                            'The spread is the small difference between the buy and sell prices seen on the platform which are a small margin above the actual market spread.',
                            'So a share priced at 100p to sell and 102p to buy might be 99p to sell and 103p to buy via a spread bet.',
                            'This means that IG will make money regardless of whether a client makes a loss or a profit.'
                        ]
                    }
                ],
            }, {
                'shortTitle': 'How to trade a binary',
                'title': "Demonstrate how to trade a binary (digitals)",
                'level': 1,
                'approved': false,
                'content': [
                    {data: ['---- live demo ----']}
                ],
            }, {
                'shortTitle': 'Trade size factors',
                'title': "Explain the factors a client should consider when deciding the size for a trade",
                'level': 1,
                'approved': false,
                'content': [
                    {
                        type: 'list',
                        title: 'Factors could include but are not limited to',
                        data: [
                            'The volatility of your chosen marked',
                            'Initial deposit – Your position’s size will also affect your initial deposit or margin; the bigger your bet/deal size, the more margin you’ll need to pay.',
                            'Minimum bet size – Every market also comes with a minimum size, which will vary from market to market and from provider to provider.'
                        ]
                    }
                ],
            }, {
                'shortTitle': 'Strategies for a stop',
                'title': "Explain two different strategies for determining where to place a stop",
                'level': 2,
                'approved': true,
                'content': [
                    {
                        title: 'The 2% rule',
                        data: [
                            'The 2% rules dictates that you never risk more than 2% of your trading capital.',
                            'Very simple to set up, simply calculate 2% of your trading capital, and place your stop so that this would be the maximum amount you can lose (keeping in mind the spread)',
                            'The downside of this strategy is that it doesn\'t account very well for volitile markets that may rebound quickly',
                        ],
                    }, {
                        title: 'Average true range',
                        data: [
                            'The average true range is the amount of volatility of a market over the last 14 days. To turn this into a stop-loss strategy you must decide on a percentage of this on which to place your stop.',
                            'This percentage depends largely on the market in question as well as the length of time you expect/want the position to be open.',
                        ]
                    }
                ],
            }, {
                'shortTitle': 'Strategies for a limit',
                'title': "Explain two different strategies for determining where to place a limit",
                'level': 1,
                'approved': false,
                'content': [
                    {data: [
                        'The primary advantage of a limit order is that it guarantees that the trade will be made at a particular price or better and saves you time and effort, "Click and Forget"',
                        'A strategy for placing a limit is if you think there might be a line of resistance at a certain price but you don\'t want to lose your earnings so far you place a limit just below that line of resistance.'
                    ]}
                ],
            }, {
                'shortTitle': 'Orders and positions',
                'title': "Explain the difference between orders and positions",
                'level': 1,
                'approved': false,
                'content': [
                    {
                        'data': ['an order is an instruction to open or close a trade, a position on the other hand is a trade that is either currently able to incur a profit or loss.']
                    }
                ],
            }, {
                'shortTitle': 'Alerts in a trading strategy',
                'title': "Explain how clients could use alerts to compliment their trading strategyem ",
                'level': 1,
                'approved': false,
                'content': [{data: ['Use price alerts to get a notification when a set market hits a certain level, so that you can monitor markets, limit your risk and time your trades']}],
            }, {
                'shortTitle': 'News in a trading strategy',
                'title': "Explain how clients could use news to compliment their trading strategy",
                'level': 1,
                'approved': false,
                'content': [
                    {data: [
                        'News trading involves either buying or shorting a security immediately after a major news event.',
                        'The  news can be a big part of market volitility. Paying attention to the news about a particular industry could be valuable for determining if the value of a position will change.'
                        ]
                    }
                ],
            }, {
                'shortTitle': 'Signals in a trading strategy',
                'title': "Explain how clients could use signals to compliment their trading strategy",
                'level': 1,
                'approved': false,
                'content': [{data: [
                    'Signals are a simple "Buy" or "Sell" instruction from market analysts (IG uses Autochartist and PIA-First).',
                    'They can be used to complement a trading strategy by offloading the market research to a third party and giving you an actionable, researched stance to take on a market.'
                ]}],
            }, {
                'shortTitle': 'Economic calendar in a trading strategy',
                'title': "Explain how clients could use an economic calendar to compliment their trading strategy",
                'level': 1,
                'approved': false,
                'content': [
                    {data: ['You can use economic calendar alerts if you think that the markets are going to respond to a particular economic event, like non-farm payrolls.']}
                ],
            }, {
                'shortTitle': 'Competitors',
                'title': "List our main competitors and describe the differences in our offering",
                'level': 1,
                'approved': false,
                'content': null,
            }, {
                'shortTitle': 'Mobile vs Desktop',
                'title': "Explain how the needs of our clients differ across mobile and desktop platforms",
                'level': 1,
                'approved': false,
                'content': [{data: [
                    'In general, mobile users spend more and make more (or lose less) than their web-based counterparts',

                ]}],
            }, {
                'shortTitle': 'Managed vs Self-Directed trade',
                'title': "Explain the difference between managed and self directed trading",
                'level': 1,
                'approved': false,
                'content': [{data: ['Simply put, a self-directed trade is where you invest your capital directly based on your own market research whereas a managed trade is done through a broker or portfolio and is managed by someone else (individual, bot, or a group).']}],
            }, {
                'shortTitle': 'Share dealing vs smart portfolios',
                'title': "Explain the difference between share dealing and smart portfolios",
                'level': 1,
                'approved': false,
                'content': [
                    {data: [
                        'Share dealing is the buying and selling of shares in the hope of earning a profit.',
                        'An IG Smart Portfolio is a fully managed, broadly diversified portfolio with exposure to many global markets such as fixed income and equity, along with alternative investments such as gold and property.',
                        'The difference then is share dealing is a part of a smart portfolio but is self managed. whereas a smart portfolio is auto-managed.'
                    ]}
                ],
            }, {
                'shortTitle': 'Smart Portfolio... "safer"',
                'title': "Explain why a Smart Portfolio is considered a 'safer' instrument",
                'level': 2,
                'approved': true,
                'content': [
                    {
                        data: ['Smart portfolios are auto-rebalancing portfolios that react "smartly" to market changes. They are safer as they contain ' +
                              'diversified investments (suitable to your risk profile) meaning that it\'s not an "all eggs in one basket" situation. this  ' +
                              'paired with automated procedures mean it is far lower risk across the board, and reacts quickly to mitigate any loss.'],
                    }
                ],
            }, {
                'shortTitle': 'Robo-advice competitors',
                'title': "Name 3 key competitors in the robo-advice industry",
                'level': 2,
                'approved': true,
                'content': [
                    {
                        data: ['"robo-advisors are simply online wealth managers that invest their clients’ money in mainstream investments with a goal of generating attractive risk-adjusted returns over time."']
                    },{
                        type: 'list',
                        data: [
                            'Nutmeg',
                            'Wealthify',
                            'Scalable Capital',
                        ]
                    },{
                        type: 'list',
                        title: 'IG\'s Edge',
                        data: [
                            '24-hour support from a client services team',
                            'Asset-allocation models from BlackRock',
                        ]
                    }
                ],
            }, {
                'shortTitle': 'IG & BlackRock',
                'title': "Explain IG's relationship with BlackRock",
                'level': 2,
                'approved': true,
                'content': [
                    {
                        data: [
                            'This partnership is aimed exclusively at IG\'s Smart Portfolio offerring.',
                            'Blackrock constructs asset allocation models that are tailored to 5 distinct risk profiles',
                            'They provide insight into over $17 trillion of assets and is the worlds largest asset management firm.'
                        ],
                    }
                ],
            }, {
                'shortTitle': 'Rebalance',
                'title': "Explain what a rebalance is and how often IG does it",
                'level': 1,
                'approved': false,
                'content': [
                    {data: [
                        'Rebalancing is the act of looking at a portfolio and readjusting the weightings of assets',
                        'IG will typically rebalance a portfolio on a quarterly basis, but we monitor the investments daily. This means we can rebalance the asset allocations in the portfolio whenever necessary, and respond to changes in market conditions.',
                    ]}
                ],
            }, {
                'shortTitle': 'Quote vs on exchange',
                'title': "Explain the difference of at quote vs on exchange in share trading",
                'level': 2,
                'approved': true,
                'content': [
                    {data: [
                        '"On Exchange" means the price at the point there is a trade directly with an order book (Direct Market Access or DMA)',
                        '"At Quote" on the other hand means it is a price given by a range of market makers (this price then expires at IG in 15 seconds)',
                    ]}
                ],
            }, {
                'shortTitle': 'Plot technical indicators',
                'title': "Demonstrate how to calculate two different technical indicators and plot them on a chart",
                'level': 1,
                'approved': false,
                'content': null,
            }, {
                'shortTitle': 'Fundamental analysis how to',
                'level': 2,
                'approved': true,
                'title': "Demonstrate how a client could perform fundamental analysis on a market",
                'content': [{
                    data: [
                        'Fundamental analysis involves the observing and making predictions on market price based on a company\'s past and present statistics.',
                        'These could include company value, profit margin, return on equity, future growth etc.',
                        'This is the method used by Warren Buffet',
                    ],
                }],
            },
        ]
    }
});
