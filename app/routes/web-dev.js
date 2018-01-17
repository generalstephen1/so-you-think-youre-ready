import Ember from 'ember';

export default Ember.Route.extend({
    templateName: 'route-entrypoint',

    model(){
        return {
            title: 'General Web Dev',
            points: [
                {
                    'shortTitle': 'Well structured HTML',
                    'title': "Describe the qualities of a well structured HTML document",
                    'content': null,
                },{
                    'shortTitle': 'Accessibility',
                    'title': "List a number of common accessibility features of HTML",
                    'content': null,
                },{
                    'shortTitle': 'CSS',
                    'title': "Demonstrate a thorough knowledge of using CSS to apply styles and layout to HTML",
                    'content': null,
                },{
                    'shortTitle': 'Flexbox',
                    'title': "Use CSS Flexbox to solve a variety of common layout problems without JavaScript",
                    'content': null,
                },{
                    'shortTitle': 'CSS pre-processor',
                    'title': "Explain the benefits of using a CSS pre-processor",
                    'content': null,
                },{
                    'shortTitle': 'BEM',
                    'title': "Demonstrate advantages of using BEM to structure CSS",
                    'content': null,
                },
            ]
        }
    }
});

