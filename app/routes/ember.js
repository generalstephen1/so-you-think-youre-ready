import Ember from 'ember';

export default Ember.Route.extend({
    templateName: 'route-entrypoint',

    model() {
        return {
            title: 'Knowledge of Ember',
            points: [
                {
                    'shortTitle': 'URL can map to decoupled folder structure',
                    'title': "Demonstrate how the URL can map to UI hierarchies built from views in a decoupled folder structure",
                    'content': [
                        {
                            'data': ['Ember URL mapping is not tied to any particular route, through the use of the --path flag you can assign a route to land on any page you want '],
                        },{
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
                        },{
                            'data': ['Or alternatively a route can have dynamic segments that correspond to different views'],
                        }, {
                            'type': 'code-snippet',
                            'data': [
                                '$ ember generate route aRouteGroup/myRoute3 --path="myRoute1:someID"',
                            ]
                        }
                    ],
                }, {
                    'shortTitle': 'Route lifecycle hooks',
                    'title': "List the main lifecycle hooks available in Routes and describe appropriate use cases for each",
                    'url': 'https://github.com/generalstephen1/ember-docs/blob/master/Route%20Lifecycle%20Hooks.md',
                }, {
                    'shortTitle': 'Component lifecycle hooks',
                    'title': "List the Ember component lifecycle hooks and describe the conditions that cause them to trigger",
                    'url': 'https://github.com/generalstephen1/ember-docs/blob/master/Component%20Lifecycle%20Hooks.md',
                }, {
                    'shortTitle': 'Embers Resolver',
                    'title': "Explain the purpose of Ember's Resolver and how it supports convention over configuration",
                    'content': null,
                }, {
                    'shortTitle': 'Handlebars helpers',
                    'title': "Demonstrate appropriate use of the core Handlebars helpers",
                    'content': null,
                }, {
                    'shortTitle': 'yielding params in a component',
                    'title': "Demonstrate how yielding block params can improve the composability of a component",
                    'content': [
                        { 'data': ['The {{yield}} block within a handlebars component will replace itself with anything added between its open and closing tags if expressed as a block'] ,},
                        {
                            'type': 'code-snippet',
                            'data': [
                                ' // application.hbs',
                                '{{#mySuperComponent}}',
                                '   {{#myOtherSuperComponent}}',
                                '{{/mySuperComponent}}',
                            ]
                        },{
                            'data': [
                                'This would result in "myOtherSuperComponent" being rendered wherever "mySuperComponent"s {{yield}} block is',
                                'This makes components more composable as if you have a generic wrapper for content you can re-use this for each block of content'
                            ],
                        },{
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
                    'content': null,
                }, {
                    'shortTitle': 'Runloop',
                    'title': "Explain the advantages of Ember's Runloop over a basic pub/sub event emitter patter",
                    'content': null,
                }, {
                    'shortTitle': 'Computed properties vs observers',
                    'title': "Explain the benefits of computed properties over observers",
                    'content': [

                    ],
                }, {
                    'shortTitle': 'Addons',
                    'title': "Demonstrate how to package appropriate reusable code as an Ember Addon",
                    'content': null,
                }, {
                    'shortTitle': 'ember-cli build pipeline',
                    'title': "Demonstrate how to leverage the ember-cli build pipeline to affect the binary output",
                    'content': null,
                }]
        }
    }
});
