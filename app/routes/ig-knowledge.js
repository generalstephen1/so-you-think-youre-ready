import Ember from 'ember';

export default Ember.Route.extend({
    templateName: 'route-entrypoint',

    model() {
        return {
            title: 'Knowledge of IG',
            points: [
                {
                    'shortTitle': 'Asset classes and markets',
                    'title': "Identify which asset class a market belongs to",
                    'content': null,
                }, {
                    'shortTitle': 'Advantages of CFDs',
                    'title': "List the advantages of trading CFDs over physical shares",
                    'content': null,
                }, {
                    'shortTitle': 'CFD vs Spread Bet',
                    'title': "Explain the difference between CFD trading and spread betting",
                    'content': null,
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
                    'content': null,
                }, {
                    'shortTitle': 'Robo-advice competitors',
                    'title': "Name 3 key competitors in the robo-advice industry",
                    'content': null,
                }, {
                    'shortTitle': 'IG & BlackRock',
                    'title': "Explain IG's relationship with BlackRock",
                    'content': null,
                }, {
                    'shortTitle': 'Rebalance',
                    'title': "Explain what a rebalance is and how often IG does it",
                    'content': null,
                }, {
                    'shortTitle': 'Quote vs on exchange',
                    'title': "Explain the difference of at quote vs on exchange in share trading",
                    'content': null,
                }, {
                    'shortTitle': 'Plot technical indicators',
                    'title': "Demonstrate how to calculate two different technical indicators and plot them on a chart",
                    'content': null,
                }, {
                    'shortTitle': 'Fundamental analysis how to',
                    'title': "Demonstrate how a client could perform fundamental analysis on a market",
                    'content': null,
                },
            ]
        }
    }
});
