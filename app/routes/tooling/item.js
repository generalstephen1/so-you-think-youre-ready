import Ember from 'ember';
import { massage } from '../../helpers/massage-data'
import { slugComparison } from '../../helpers/slug-comparison'

export default Ember.Route.extend({
    templateName: 'route-entrypoint',
    data: null,

    init() {
        this.set('data', massage(this.rawData, 'tooling'));
    },

    model(params) {
        return slugComparison(this.get('data'), params.slug);
    },

    rawData: {
        title: 'Testing',
        points: [
            {
                'shortTitle': 'Clone/fork/create',
                'title': "[Git] Clone/fork/create repositories and raise pull requests",
                'level': 3,
                'approved': false,
                'content': null,
            }, {
                'shortTitle': 'Create/switch/delete/pull/push',
                'title': "[Git] Create/switch/delete/pull/push branches ",
                'level': 3,
                'approved': false,
                'content': null,
            }, {
                'shortTitle': 'Merge conflicts',
                'title': "[Git] Resolve non-trivial merge conflicts ",
                'level': 3,
                'approved': false,
                'content': null,
            }, {
                'shortTitle': 'merge/rebase/cherry-pick/revert',
                'title': "[Git] Use merge/rebase/cherry-pick/revert strategies appropriately",
                'level': 2,
                'approved': false,
                'content': null,
            }, {
                'shortTitle': 'Local http server',
                'title': "[Node] Create a local http server",
                'level': 2,
                'approved': false,
                'content': null,
            }, {
                'shortTitle': 'Run test suites',
                'title': "[Node] Run test suites from the terminal  ",
                'level': 2,
                'approved': false,
                'content': null,
            }, {
                'shortTitle': 'NPM modules',
                'title': "[NPM] Use NPM modules to package and publish re-usable code",
                'level': 1,
                'approved': false,
                'content': null,
            }, {
                'shortTitle': 'NVN',
                'title': "[NPM] Use NVN to manage local NPM versions",
                'level': 2,
                'approved': false,
                'content': null,
            }, {
                'shortTitle': 'Build plans with watch',
                'title': "[CI] Configure a build plan that runs when a branch is updated and runs tests  ",
                'level': 1,
                'approved': false,
                'content': null,
            }, {
                'shortTitle': 'Build plan that deploys',
                'title': "[CI] Configure a build plan that deploys static resources if the build succeeds  ",
                'level': 1,
                'approved': false,
                'content': null,
            }, {
                'shortTitle': 'Build that fails on Lint',
                'title': "[CI] Configure a build to fail if Linting fails  ",
                'level': 1,
                'approved': false,
                'content': null,
            }, {
                'shortTitle': 'Build that fails on Coverage',
                'title': "[CI] Configure a build to fail if Coverage decreases  ",
                'level': 1,
                'approved': false,
                'content': null,
            }, {
                'shortTitle': 'Parallellization',
                'title': "[CI] Appropriately configure operations that can run in parallel  ",
                'level': 1,
                'approved': false,
                'content': null,
            }, {
                'shortTitle': 'Linting Config',
                'title': "[Linter] Appropriately configure Linting for a project",
                'level': 1,
                'approved': false,
                'content': null,
            }, {
                'shortTitle': 'Lint Rules',
                'title': "[Linter] Write your own Lint rules  ",
                'level': 2,
                'approved': false,
                'content': null,
            }, {
                'shortTitle': 'Coverage Report',
                'title': "[Coverage] Generate a coverage report for a project",
                'level': 1,
                'approved': false,
                'content': null,
            }, {
                'shortTitle': 'Locate gaps in Coverage',
                'title': "[Coverage] Locate gaps in coverage",
                'level': 1,
                'approved': false,
                'content': null,
            }, {
                'shortTitle': 'Address Coverage Gaps',
                'title': "[Coverage] Appropriately address gaps in coverage",
                'level': 1,
                'approved': false,
                'content': null,
            },
        ],
    }
});
