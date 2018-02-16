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
                'shortTitle': 'Unit',
                'title': "Identify scenarios appropriate for unit testing",
                'level': 2,
                'approved': false,
                'content': null,
            }, {
                'shortTitle': 'Integration',
                'title': "Identify scenarios appropriate for integration testing",
                'level': 1,
                'approved': false,
                'content': null,
            }, {
                'shortTitle': 'Acceptance',
                'title': "Identify scenarios appropriate for acceptance testing",
                'level': 2,
                'approved': false,
                'content': null,
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
