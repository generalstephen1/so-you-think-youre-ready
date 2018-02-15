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
                'content': null,
            }, {
                'shortTitle': 'Advantages of CFDs',
                'title': "List the advantages of trading CFDs over physical shares",
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
                'content': null,
            }, {
                'shortTitle': 'How to trade a binary',
                'title': "Demonstrate how to trade a binary (digitals)",
                'content': null,
            }, {
                'shortTitle': 'Trade size factors',
                'title': "Explain the factors a client should consider when deciding the size for a trade",
                'content': null,
            }, {
                'shortTitle': 'Strategies for a stop',
                'title': "Explain two different strategies for determining where to place a stop",
                'content': null,
            }, {
                'shortTitle': 'Strategies for a limit',
                'title': "Explain two different strategies for determining where to place a limit",
                'content': null,
            }, {
                'shortTitle': 'Orders and positions',
                'title': "Explain the difference between orders and positions",
                'content': null,
            }, {
                'shortTitle': 'Alerts in a trading strategy',
                'title': "Explain how clients could use alerts to compliment their trading strategy #Novice",
                'content': null,
            }, {
                'shortTitle': 'News in a trading strategy',
                'title': "Explain how clients could use news to compliment their trading strategy #Novice",
                'content': null,
            }, {
                'shortTitle': 'Signals in a trading strategy',
                'title': "Explain how clients could use signals to compliment their trading strategy",
                'content': null,
            }, {
                'shortTitle': 'Economic calendar in a trading strategy',
                'title': "Explain how clients could use an economic calendar to compliment their trading strategy",
                'content': null,
            }, {
                'shortTitle': 'Competitors',
                'title': "List our main competitors and describe the differences in our offering",
                'content': null,
            }, {
                'shortTitle': 'Mobile vs Desktop',
                'title': "Explain how the needs of our clients differ across mobile and desktop platforms",
                'content': null,
            }, {
                'shortTitle': 'Managed vs Self-Directed trade',
                'title': "Explain the difference between managed and self directed trading",
                'content': null,
            }, {
                'shortTitle': 'Share dealing vs smart portfolios',
                'title': "Explain the difference between share dealing and smart portfolios",
                'content': null,
            }, {
                'shortTitle': 'Smart Portfolio... "safer"',
                'title': "Explain why a Smart Portfolio is considered a 'safer' instrument",
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
                'content': null,
            }, {
                'shortTitle': 'Quote vs on exchange',
                'title': "Explain the difference of at quote vs on exchange in share trading",
                'content': [
                    {data: [
                        '"On Exchange" means the price at the point there is a trade directly with an order book (Direct Market Access or DMA)',
                        '"At Quote" on the other hand means it is a price given by a range of market makers (this price then expires at IG in 15 seconds)',
                    ]}
                ],
            }, {
                'shortTitle': 'Plot technical indicators',
                'title': "Demonstrate how to calculate two different technical indicators and plot them on a chart",
                'content': null,
            }, {
                'shortTitle': 'Fundamental analysis how to',
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
