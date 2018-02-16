import Ember from 'ember';
import { massage } from '../../helpers/massage-data'
import { slugComparison } from '../../helpers/slug-comparison'

export default Ember.Route.extend({
    templateName: 'route-entrypoint',
    data: null,

    init() {
        this.set('data', massage(this.rawData, 'web-dev'));
    },

    model(params) {
        return slugComparison(this.get('data'), params.slug);
    },

    rawData: {
        title: 'General Web Dev',
        points: [
            {
                'shortTitle': 'Well structured HTML',
                'title': "Describe the qualities of a well structured HTML document",
                'level': 3,
                'approved': false,
                'content': [{
                    'data': ['HTML is the skeleton on which we hang all the other parts of our web developer code.']
                }, {
                    'type': 'code-snippet',
                    'data': [
                        '<!DOCTYPE> <!-- Always supply a doctype -->',
                        '<html>',
                        '   <head>',
                        '       <title>Make your document title meaningful but succinct</title>',
                        '       <meta name="description" content="Make your meta tags descriptive and meaningful for the crawlers and try not to spam it />',
                        '   </head>',
                        '   <body>',
                        '       <header class="header"> <!-- Use appropriate tags for appropriate sections -->',
                        '           <h1>Have a nice clear hierarchy that only includes only one H1</h1>',
                        '           <h2>Use headings tags appropriately within a hierarchy rather than just for styling</h2>',
                        '       </header>',
                        '       <div class="side-bar" id="js-side-bar"></div> <!-- Use classes for style and ID for JS -->',
                        '       <div class="content">',
                        '           <p class="content__text"></p> <!-- Ideally some sort of consistant naming convention for classes, ie BEM -->',
                        '           <img href="some-url.png" alt="my awesome image"> <!-- Always supply an alt for image accessibility -->',
                        '       </div> <!-- Always close your tags in the correct order -->',
                        '       <footer class="footer"> <!-- Do not style on tag type, style on class -->',
                        '       </footer>',
                        '   </body>',
                        '</html>',
                    ]
                }, {
                    'type': 'list',
                    'title': 'Other rules include:',
                    'data': [
                        'Do not excessively comment, markup should be easy to follow',
                        'Write constently in whatever style you choose',
                    ]
                }]
            }, {
                'shortTitle': 'Accessibility',
                'title': "List a number of common accessibility features of HTML",
                'level': 2,
                'approved': false,
                'content': [{
                    'type': 'list',
                    'data': [
                        { html: true, content: 'User interactable HTML elements such as <code><button></code> and <input> allow for native keyboard accessibility' },
                        { html: true, content: 'General site structure, <h1> followed by <p> blocks and usage of <ol>s and <ul>s  ' },
                        { html: true, content: 'Appropriate use of other HTML tags, <article>, <header>, <footer> etc' },
                        'the "alt" attribute on img tags and "label" for inputs and forms',
                    ]
                }],
            }, {
                'shortTitle': 'CSS',
                'title': "Demonstrate a thorough knowledge of using CSS to apply styles and layout to HTML",
                'level': 3,
                'approved': false,
                'content': null,
            }, {
                'shortTitle': 'Flexbox',
                'title': "Use CSS Flexbox to solve a variety of common layout problems without JavaScript",
                'level': 3,
                'approved': false,
                'content': [{
                    'type': 'list',
                    'data': [
                        '<a href="https://git.iggroup.local/projects/WTP/repos/platform/pull-requests/2363/overview" target="_blank">Not enough space for feed titles 🔗</a>'
                    ]
                }],
            }, {
                'shortTitle': 'CSS pre-processor',
                'title': "Explain the benefits of using a CSS pre-processor",
                'level': 3,
                'approved': false,
                'content': null,
            }, {
                'shortTitle': 'BEM',
                'title': "Demonstrate advantages of using BEM to structure CSS",
                'level': 2,
                'approved': false,
                'content': [{
                    'data': ['BEM stands for Block, Element, Modifier and is beneficial for code as it means your stylesheet nesting should in theory ' +
                        'be limited to 2-3 levels deep. It makes styling far more modular as each "Block" has its own explicit styles which can be ' +
                        'picked up and dropped into other places in the code and be repeated without concern',
                        'It also greatly assists in the readability of the code as each segment is explicitly defined and '],
                }, {
                    'type': 'code-snippet',
                    'data': [
                        '// for this html',
                        '<div class="face">',
                        '   <div class="face__eyes">',
                        '   </div>',
                        '   <div class="face__nose">',
                        '   </div>',
                        '   <div class="face__mouth">',
                        '      <div class="face__tooth"></div>',
                        '      <div class="face__tooth"></div>',
                        '      <div class="face__tooth--cavity"></div>',
                        '      <div class="face__tooth"></div>',
                        '   </div>',
                        '</div>',
                    ]
                }, {
                    'type': 'code-snippet',
                    'data': [
                        '// CSS',
                        '.face {',
                        '   background-color: undead-green;',
                        '}',
                        '.face .face__eyes {',
                        '   background-color: red;',
                        '   color: scarlet;',
                        '}',
                        '.face .face__mouth {',
                        '   ...',
                        '}',
                        '.face .face__mouth .face__tooth {',
                        '   ...',
                        '}',
                        '.face .face__mouth .face__tooth--cavity {',
                        '   ...',
                        '}',
                    ]
                }, {
                    'type': 'code-snippet',
                    'data': [
                        '// BEM',
                        '.face {',
                        '   &__eyes {}',
                        '   &__nose {}',
                        '   &__mouth {}',
                        '   &__tooth {',
                        '       &--cavity {}',
                        '   }',
                        '}',
                    ]
                }],
            },
        ]
    }
});
