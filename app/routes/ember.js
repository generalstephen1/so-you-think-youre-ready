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
                    'content': null,
                }, {
                    'shortTitle': 'Route lifecycle hooks',
                    'title': "List the main lifecycle hooks available in Routes and describe appropriate use cases for each",
                    'content': null,
                }, {
                    'shortTitle': 'Component lifecycle hooks',
                    'title': "List the Ember component lifecycle hooks and describe the conditions that cause them to trigger",
                    'content': null,
                }, {
                    'shortTitle': 'Embers Resolver',
                    'title': "Explain the purpose of Ember's Resolver and how it supports convention over configuration",
                    'content': null,
                }, {
                    'shortTitle': 'Handlebars helper',
                    'title': "Demonstrate appropriate use of the core Handlebars helper",
                    'content': null,
                }, {
                    'shortTitle': 'yielding params in a component',
                    'title': "Demonstrate how yielding block params can improve the composability of a component",
                    'content': null,
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
                    'content': null,
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
