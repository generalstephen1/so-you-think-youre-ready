import Ember from 'ember';
import { massage } from '../../helpers/massage-data'
import { slugComparison } from '../../helpers/slug-comparison'

export default Ember.Route.extend({
    templateName: 'route-entrypoint',
    data: null,

    init() {
        this.set('data', massage(this.rawData, 'testing'));
    },

    model(params) {
        return slugComparison(this.get('data'), params.slug);
    },

    rawData: {
        title: 'Testing',
        points: [
            {
                'shortTitle': 'Unit, Integration, Acceptance',
                'title': "Identify scenarios appropriate for unit, integration and acceptance testing",
                'level': 2,
                'approved': false,
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
                'content': null,
            }, {
                'shortTitle': 'Cross browser tools',
                'title': "List tools and approaches that can help with cross browser testing",
                'level': 2,
                'approved': false,
                'content': null,
            }, {
                'shortTitle': 'TDD',
                'title': "Identify scenarios appropriate for a TDD approach",
                'level': 2,
                'approved': false,
                'content': null,
            }, {
                'shortTitle': 'Assertion Library',
                'title': "Explain the purpose of an assertion library",
                'level': 1,
                'approved': false,
                'content': null,
            }, {
                'shortTitle': 'Testing vs Asyc',
                'title': "Explain how testing frameworks facilitate the testing of asynchronous code",
                'level': 1,
                'approved': false,
                'content': null,
            }
        ]
    }
});
