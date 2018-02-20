import Ember from 'ember';
import { massage } from '../../helpers/massage-data'
import { slugComparison } from '../../helpers/slug-comparison'

export default Ember.Route.extend({
    templateName: 'route-entrypoint',
    data: null,

    init() {
        this.set('data', massage(this.rawData, 'ember'));
    },

    model(params) {
        return slugComparison(this.get('data'), params.slug);
    },

    rawData: {
        title: 'Knowledge of Ember',
        points: [
            {
                'shortTitle': 'URL mapping decoupled folder structure',
                'title': "Demonstrate how the URL can map to UI hierarchies built from views in a decoupled folder structure",
                'level': 2,
                'approved': true,
                'content': [
                    {
                        'data': ['Ember URL mapping is not tied to any particular route, through the use of the --path flag you can assign a route to land on any page you want '],
                    }, {
                        'type': 'code-snippet',
                        'data': [
                            '$ ember generate route myRoute1',
                            '$ ember generate route myRoute2',
                            '$ ember generate route aRouteGroup/myRoute3 --path="myRoute1"',
                            '',
                            'app',
                            '   |-- routes',
                            '       |-- myRoute1',
                            '       |-- myRoute2',
                            '       |-- aRouteGroup',
                            '           |-- myGroupRoute3',
                            '',
                            '// all accessed by visiting /routeName',
                        ]
                    }, {
                        'data': ['Or alternatively a route can have dynamic segments that correspond to different views'],
                    }, {
                        'type': 'code-snippet',
                        'data': [
                            '$ ember generate route aRouteGroup/myRoute3 --path="myRoute1:someID"',
                        ]
                    }, {
                        'data': ['Alternatatively but using the "resetNameSpace" flag you can completely sever the route from the folder structure to be utilised as a nested route in any other route.'],
                    }
                ],
            }, {
                'shortTitle': 'Route lifecycle hooks',
                'title': "List the main lifecycle hooks available in Routes and describe appropriate use cases for each",
                'level': 2,
                'approved': true,
                'url': 'https://github.com/generalstephen1/ember-docs/blob/master/Route%20Lifecycle%20Hooks.md',
            }, {
                'shortTitle': 'Component lifecycle hooks',
                'title': "List the Ember component lifecycle hooks and describe the conditions that cause them to trigger",
                'level': 2,
                'approved': true,
                'url': 'https://github.com/generalstephen1/ember-docs/blob/master/Component%20Lifecycle%20Hooks.md',
            }, {
                'shortTitle': 'Embers Resolver',
                'title': "Explain the purpose of Ember's Resolver and how it supports convention over configuration",
                'level': 2,
                'approved': true,
                'content': [
                    {'data': ['Embers resolver the name of its mechanism of looking up the various parts of your application by utilising it\'s naming conventions to easily parse project structure']},
                    {
                        'title': 'Convention over Configuration',
                        'data': [
                            'This is a great case of the above as so long as you don\'t do anything too custom. By using Embers generation functions you can generate components, routes and addons ' +
                            'with ease and not sorry about how Ember is meant to know where they live and how they\'re meant to talk to each other. This communication is baked into the generation process ' +
                            'and even manually created files, so long as they obey the naming conventions and application structure, will be readily included in and accessible from the rest of the App.',
                        ],
                    }
                ],
            }, {
                'shortTitle': 'Handlebars helpers',
                'title': "Demonstrate appropriate use of the core Handlebars helpers",
                'level': 2,
                'approved': true,
                'content': [
                    {
                        title: '#each',
                        data: ['Loops through an array/iterable and appies the template/block in question with the new context each time'],
                    },{
                        type: 'code-snippet',
                        data: [
                            '<ol>',
                            '{{#each model.toDoList as |listItem|}}',
                            '   <li>{{listItem}}</li>',
                            '{{/each}}',
                            '</ol>',
                        ]
                    },{
                        type: 'code-snippet',
                        data: [
                            'model(){',
                            '   return [',
                            '       "Collect Drycleaning",',
                            '       "Eat leftovers",',
                            '       "Take over the world",',
                            '   ]',
                            '}',
                        ]
                    }, {
                        'data':['the above two together would result in markup like']
                    }, {
                        type: 'code-snippet',
                        'data': [
                            '<ol>',
                            '       <li>Collect Drycleaning</li>',
                            '       <li>Eat leftovers</li>',
                            '       <li>Take over the world</li>',
                            '</ol>',
                        ]
                    }, {
                        title: '#if / else',
                        data: ['allows for markup to decide on whether to render based on a boolean value'],
                    },{
                        type: 'code-snippet',
                        data: [
                            '{{#if isOneTrueKing}}',
                            '   Release Excalibor!',
                            '{{else}}',
                            '   Stuck in a rock',
                            '{{/if}}',
                        ]
                    }, {
                        title: '#get',
                        data: ['will dynamically get a property on a model'],
                    },{
                        type: 'code-snippet',
                        data: [
                            '{{get address part}}',
                            ' // is equivalent of doing (if "part" returns "zip")',
                            'this.get("address.zip")',
                        ]
                    }, {
                        title: '#concat',
                        data: ['concatenates values'],
                    },{
                        type: 'code-snippet',
                        data: [
                            '{{concat firstName lastName}}',
                            ' // is equivalent of doing (if firstName if "Zap" and lastName is "Brannagan")',
                            'ZapBrannagan',
                        ]
                    }
                ],
            }, {
                'shortTitle': 'yielding params in a component',
                'title': "Demonstrate how yielding block params can improve the composability of a component",
                'level': 1,
                'approved': false,
                'content': [
                    { 'data': ['The {{yield}} block within a handlebars component will replace itself with anything added between its open and closing tags if expressed as a block'], },
                    {
                        'type': 'code-snippet',
                        'data': [
                            ' // application.hbs',
                            '{{#mySuperComponent}}',
                            '   {{#myOtherSuperComponent}}',
                            '{{/mySuperComponent}}',
                        ]
                    }, {
                        'data': [
                            'This would result in "myOtherSuperComponent" being rendered wherever "mySuperComponent"s {{yield}} block is',
                            'This makes components more composable as if you have a generic wrapper for content you can re-use this for each block of content'
                        ],
                    }, {
                        'type': 'code-snippet',
                        'data': [
                            '// mySuperComponent.hbs',
                            '<div>',
                            '   <h1> Below you will find the results of your awesome search! </h1>',
                            '   {{yield}}',
                            '</div>',
                        ]
                    }
                ],
            }, {
                'shortTitle': 'Popular Ember Addons',
                'title': "List popular Ember Addons and describe their function",
                'level': 1,
                'approved': false,
                'content': null,
            }, {
                'shortTitle': 'Runloop',
                'title': "Explain the advantages of Ember's Runloop over a basic pub/sub event emitter patter",
                'level': 2,
                'approved': true,
                'content': [{
                    'data': [
                        'Ember\'s run-loop is a clever optimization of Ember that batches and orders pieces of work to be triggered at the optimal time and stop repetitive pieces of work.',
                        'This describes one of the key optimizations, in-built debounce control for pieces of work. whereas a traditional pub/sub method would stupidly barrage the same enpoint on each call. ',
                        'It is also helpful for its registration and deregistration of commands. '
                    ],
                }],
            }, {
                'shortTitle': 'Computed properties vs observers',
                'title': "Explain the benefits of computed properties over observers",
                'level': 2,
                'approved': true,
                'content': [
                    {
                        'data': [
                            'The primary benefit of using computed properties over observers is the lazy method of computing said property.',
                            'Where an observed property will trigger on a dependency change and update it\'s property the computed method will only re-compute if it is referenced, thereby saving processing time.',
                            'other benefits include the fact that computed properties utilise caching for their compilations instead of recompiling each lookup, ' +
                            'it is also updated within the run-loop which keeps the entire programme in a good flow state. ',
                        ],
                    },{

                    }
                ],
            }, {
                'shortTitle': 'Addons',
                'title': "Demonstrate how to package appropriate reusable code as an Ember Addon",
                'level': 1,
                'approved': false,
                'content': null,
            }, {
                'shortTitle': 'ember-cli build pipeline',
                'title': "Demonstrate how to leverage the ember-cli build pipeline to affect the binary output",
                'level': 1,
                'approved': false,
                'content': null,
            }]
    }
});
