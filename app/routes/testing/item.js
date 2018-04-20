import Route from '@ember/routing/route'
import { massage } from '../../helpers/massage-data'
import { slugComparison } from '../../helpers/slug-comparison'

export default Route.extend({
    templateName: 'route-entrypoint',
    data: null,

    init() {
        this._super(...arguments)
        this.set('data', massage(this.rawData(), 'testing'));
    },

    model(params) {
        return slugComparison(this.get('data'), params.slug);
    },

    rawData(){ return {
        title: 'Testing',
        points: [
            {
                'shortTitle': 'Unit, Integration, Acceptance',
                'title': "Identify scenarios appropriate for unit, integration and acceptance testing",
                'level': 2,
                'approved': true,
                'content': [
                    {
                        title: 'Unit Tests',
                        data: [
                            "Unit testing is an ideal place to test individual methods or functions that are 'pure' functions and are guaranteed to have the same outcome based on an identical income.",
                            "In the Pyrimid of tests you should have the most amount of Unit tests in your test suite as they are quick to run and test the most base-level functionality.",
                            "A good example of a Unit-testable occurrance is mathematical formulae, ie: a pure function that will return a value times by PI."
                        ]
                    }, {
                        title: 'Integration Tests',
                        data: [
                            "Integration testing is the middle of your testing pyramid and as such should have fewer tests than Unit as they are a bit slower and more intensive to run.",
                            "Your integration tests need to occur when you have multiple modules of code that need to work together, but the interaction is still simple enough to make the tests reasonably fast and reliable. It uses Stubs and drivers to 'fake' the rest of the app.",
                            "An example of a Integration test scenario would be testing that user input in a field is validated properly"
                        ]
                    }, {
                        title: 'Acceptance Tests',
                        data: [
                            "Acceptance tests sit at the tip of the pyramid and test full user flows and large orchestrations of your application.",
                            "They are both fragile and intensive to run.",
                            "An example of Acceptance testing is user login or registration, filling in a form, submitting the form and getting redirected if not authenticated."
                        ]
                    }
                ],
            }, {
                'shortTitle': 'Sinon DRY tests',
                'title': "Demonstrate using Sinon to write DRY tests",
                'level': 1,
                'approved': false,
                'content': [
                    {data: [
                        'DRY (don\'t repeat yourself) methodology in testing is super handy for codebase maintenance. If a method or endpoint changes and you\'ve made a stub of it for tests ' +
                        'then you only have to update this stub to update an entire test suite.',
                        'Another way to not repeat code is to use loops:'
                    ]},{
                        type: 'code-snippet',
                        data: [
                            'function multiply(varA, varB){',
                            '   return varA * varB;',
                            '}',
                            '',
                            '// multiply-test.js',
                            'describe("test the things work", function(){',
                            '   it("should multiply things", function(){',
                            '       [',
                            '           [1, 2, 2]',
                            '           [2, 5, 10]',
                            '           [10, 100, 1000].forEach((varA, varB, expectedOutcome) => {',
                            '               expect(multiply(varA, varB)).to.equal(expectedOutcome, "multiplication not working, expected ${varA} * ${varB}" to equal ${expectedOutcome})',
                            '           })',
                            '       ]',
                            '   })',
                            '});',
                            '',
                            'NOT',
                            'describe("test the things work", function(){',
                            '   it("should multiply things", function(){',
                            '       expect(multiply(1, 2)).to.equal(2)',
                            '       expect(multiply(2, 5)).to.equal(10)',
                            '       expect(multiply(10, 100)).to.equal(1000)',
                            '   })',
                            '});',
                        ]
                    }, {
                        data: ['The preferred method allows you to quickly add more test cases and stops you having to call the function over and over.']
                    }
                ],
            }, {
                'shortTitle': 'Cross browser tools',
                'title': "List tools and approaches that can help with cross browser testing",
                'level': 2,
                'approved': false,
                'content': [
                    {data: ['There are a slew of options out there now for cross browser testing. The list below just scrapes the surface;']},
                    {
                        type: 'list',
                        data: [
                            '<a href="https://www.browserstack.com/" target="_blank">Browserstack</a>',
                            '<a href="http://dalekjs.com/" target="_blank">DalekJS</a>',
                            '<a href="https://www.browseemall.com/" target="_blank">BrowseEmAll</a>',
                            '<a href="https://multibrowser.com/" target="_blank">Multibrowser</a>',
                            '<a href="https://saucelabs.com/" target="_blank">SauceLabs</a>',
                        ]
                    },
                    {data: [
                            'For many of these services it\'s great to have an automated testing approch. To cut down on required manual regression if your acceptance tests can run through ' +
                            'one of the above tools, your main business logic can be deemed "safe" on multiple browsers.',
                            'Another approach that is mostly just common-sense is to only require manual cross-browser testing on UI elements that are likely to be treated differently on different browsers.',
                            'It also helps if you have the data on your users, what percentages use what browsers and organise your testing around this.',
                            'and lastly, If you don\'t define what you support then you will have a horrible time testing. Define your support matrix, then only test on those browsers.'
                        ]}
                ],
            }, {
                'shortTitle': 'TDD',
                'title': "Identify scenarios appropriate for a TDD approach",
                'level': 2,
                'approved': false,
                'content': [
                    {data: [
                        'The easiest way I find to figure out if TDD is appropriate is to list the inputs and outputs of whatever feature is being tested. Then count the unknowns in those lists.',
                        'If there are a range of unknowns then chances are you could start with TDD, but at some point you would have to return to change the tests.',
                        'If all your inputs and outputs can be defined, then TDD is appropriate. '
                    ]}
                ],
            }, {
                'shortTitle': 'Assertion Library',
                'title': "Explain the purpose of an assertion library",
                'level': 1,
                'approved': false,
                'content': [
                    {
                        data: [
                                'An assertion library, while not compulsory for writing tests, make the actual outcome comparisons far more human readable and handle cases where in vanilla you might have ' +
                                'had to use an if statement, for example .toBeTruthy is an assertion that whatever value precedes it is of a "Truthy" nature, aka not null, undefined, false or 0. Under the hood the ' +
                                'assertion library is checking if that variable is defined, has a value, and that value is not in the above group of "Falsey" values.'
                            ]
                    }
                ],
            }, {
                'shortTitle': 'Testing vs Asyc',
                'title': "Explain how testing frameworks facilitate the testing of asynchronous code",
                'level': 1,
                'approved': false,
                'content': [
                    {data:[
                        'TLDR: Mocks and Spys',
                        'Tests are fundamentally testing inputs and outputs, the purer a function the easier this is to test. If a method has a promise or some other kind of async call in it ' +
                        'this quickly complicates things. And this is where "Mocks" come it. A mock is a pretend response that hijacks a promise, and returns a defined value. This way we can ' +
                        'test that given a value, firstly that a method will make a call to the right service (our mock) and call it with the correct values (we do this by "spying" on the mock). ',
                        'This also opens up the functionality of that method being able to handle a range of responses from whatever service it\'s calling.'
                    ]}
                ],
            }
        ]
    }}
});
