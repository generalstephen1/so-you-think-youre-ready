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
                'content': null,
            }, {
                'shortTitle': 'Create/switch/delete/pull/push',
                'title': "[Git] Create/switch/delete/pull/push branches ",
                'content': null,
            }, {
                'shortTitle': 'Merge conflicts',
                'title': "[Git] Resolve non-trivial merge conflicts ",
                'content': null,
            }, {
                'shortTitle': 'merge/rebase/cherry-pick/revert',
                'title': "[Git] Use merge/rebase/cherry-pick/revert strategies appropriately",
                'content': null,
            }, {
                'shortTitle': 'Local http server',
                'title': "[Node] Create a local http server",
                'content': null,
            }, {
                'shortTitle': 'Run test suites',
                'title': "[Node] Run test suites from the terminal  ",
                'content': null,
            }, {
                'shortTitle': 'NPM modules',
                'title': "[NPM] Use NPM modules to package and publish re-usable code",
                'content': null,
            }, {
                'shortTitle': 'NVN',
                'title': "[NPM] Use NVN to manage local NPM versions",
                'content': null,
            }, {
                'shortTitle': 'Build plans with watch',
                'title': "[CI] Configure a build plan that runs when a branch is updated and runs tests  ",
                'content': null,
            }, {
                'shortTitle': 'Build plan that deploys',
                'title': "[CI] Configure a build plan that deploys static resources if the build succeeds  ",
                'content': null,
            }, {
                'shortTitle': 'Build that fails on Lint',
                'title': "[CI] Configure a build to fail if Linting fails  ",
                'content': null,
            }, {
                'shortTitle': 'Build that fails on Coverage',
                'title': "[CI] Configure a build to fail if Coverage decreases  ",
                'content': null,
            }, {
                'shortTitle': 'Parallellization',
                'title': "[CI] Appropriately configure operations that can run in parallel  ",
                'content': null,
            }, {
                'shortTitle': 'Linting Config',
                'title': "[Linter] Appropriately configure Linting for a project",
                'content': null,
            }, {
                'shortTitle': 'Lint Rules',
                'title': "[Linter] Write your own Lint rules  ",
                'content': null,
            }, {
                'shortTitle': 'Coverage Report',
                'title': "[Coverage] Generate a coverage report for a project",
                'content': null,
            }, {
                'shortTitle': 'Locate gaps in Coverage',
                'title': "[Coverage] Locate gaps in coverage",
                'content': null,
            }, {
                'shortTitle': 'Address Coverage Gaps',
                'title': "[Coverage] Appropriately address gaps in coverage",
                'content': null,
            },
        ],
    }
});
