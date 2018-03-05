import Route from '@ember/routing/route'
import { massage } from '../../helpers/massage-data'
import { slugComparison } from '../../helpers/slug-comparison'

export default Route.extend({
    templateName: 'route-entrypoint',
    data: null,

    init() {
        this._super(...arguments)
        this.set('data', massage(this.rawData(), 'tooling'));
    },

    model(params) {
        return slugComparison(this.get('data'), params.slug);
    },

    rawData(){ return {
        title: 'Testing',
        points: [
            {
                'shortTitle': 'Clone/fork/create',
                'title': "[Git] Clone/fork/create repositories and raise pull requests",
                'level': 3,
                'approved': true,
                'content': [{
                    data: ['---- inherent in everyday work ----']
                }],
            }, {
                'shortTitle': 'Create/switch/delete/pull/push',
                'title': "[Git] Create/switch/delete/pull/push branches ",
                'level': 3,
                'approved': true,
                'content': [{
                    data: ['---- inherent in everyday work ----']
                }],
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
                'content': [
                    {
                        type: 'list',
                        data: [
                            '<a href="https://git.iggroup.local/projects/WTP/repos/platform/commits/c08cbc6a5481767067dca62f1f2459371c689cfc" target="_blank">A Real Example of Cherry-Pick (note different WTP code for commit)</a>',
                            '<a href="https://git.iggroup.local/projects/WTP/repos/platform/commits/26605aa69189ff698c63c00be9dfb046e78feb23#lib/ig-data/addon/helpers/website-id-for-allowed-twitter-feed.js" target="_blank">A Real Example of Revert</a>',
                        ]
                    }
                ],
            }, {
                'shortTitle': 'Local http server',
                'title': "[Node] Create a local http server",
                'level': 2,
                'approved': false,
                'content': [
                    {
                        type: 'code-snippet',
                        data: [
                            "// my-awesome-server.js",
                            "var http = require('http');",
                            "",
                            "http.createServer(function (request, response) {",
                            "    response.writeHead(200, {'Content-Type': 'text/plain'});",
                            "    response.end('Hello World\n');",
                            "}).listen(8080);",
                            "",
                            "console.log('Server started');",
                        ]
                    }, {
                        data: ['then run it with']
                    }, {
                        type: 'code-snippet',
                        data: ['node my-awesome-server.js']
                    }, {
                        data: ['you should then be able to navigate to http://localhost:8080']
                    }
                ],
            }, {
                'shortTitle': 'Run test suites',
                'title': "[Node] Run test suites from the terminal  ",
                'level': 2,
                'approved': false,
                'content': [
                    {
                        type: 'code-snippet',
                        data: ['$ Ember test']
                    },{
                        data: ['to run the full test suite']
                    },{
                        type: 'code-snippet',
                        data: ['$ Ember test --filter="Integration"']
                    },{
                        data: ['to run a grep over tests based on test name']
                    }
                ],
            }, {
                'shortTitle': 'NPM modules',
                'title': "[NPM] Use NPM modules to package and publish re-usable code",
                'level': 1,
                'approved': false,
                'content': null,
            }, {
                'shortTitle': 'NVM',
                'title': "[NPM] Use NVM to manage local NPM versions",
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
                'title': "[Linter] Appropriately configure Linting for a project AND Write your own Lint rules",
                'level': 1,
                'approved': false,
                'content': [
                    {data: ['Setting up linting is as complicated as you want it to be. Find the rules you want to enforce from (in this case) <a href="https://eslint.org/docs/rules/" target="_blank">eslint.org</a> and put them under "rules" in your .eslintrc.js file.']},
                    {
                        type: 'list',
                        data: [
                            '<a href="https://github.com/generalstephen1/so-you-think-youre-ready/blob/master/.eslintrc.js" target="_blank">The .eslintrc for this project</a>'
                        ]
                    }, {
                        type: 'code-snippet',
                        // heading: 'Custom rule example for all button tags having a class of "btn"',
                        data: [
                            'var MESSAGE = "All <button> elements must have a class of \'btn\';',
                            'module.exports = {',
                            '    meta: {',
                            '        message: MESSAGE,',
                            '        schema: []',
                            '      },',
                            '      ',
                            '      create: function(context) {',
                            '        function isButtonTag(node) {',
                            '            return node.contains("<button");',
                            '        }',
                            '    ',
                            '        function hasBtnClass(node) {',
                            '            return node.value.match(/btn/);',
                            '        }',
                            '    ',
                            '        function checkNode(node) {',
                            '          if (isButtonTag(node) && !hasBtnClass(node)) {',
                            '            context.report({',
                            '              node: node,',
                            '              message: MESSAGE',
                            '            });',
                            '          }',
                            '        }',
                            '    ',
                            '        return {',
                            '          ButtonnHasBtnClass: checkNode',
                            '        };',
                            '    }',
                            '};',
                        ]
                    }
                ],
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
    }}
});
