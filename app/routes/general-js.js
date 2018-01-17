import Ember from 'ember';

export default Ember.Route.extend({
    templateName: 'route-entrypoint',

    model() {
        return {
            title: 'Knowledge of JS',
            points: [
                {
                    'shortTitle': "Inheritance",
                    'title': "Demonstrate the value of inheritance",
                    'content': '',
                }, {
                    'shortTitle': "Scopes",
                    'title': "List 3 available scopes in Javascript and demonstrate their differences",
                    'content': '',
                }, {
                    'shortTitle': "JS in 6 characters",
                    'title': "How is it possible that any Javascript program be represented using combinations of just 6 characters?",
                    'content': '',
                }, {
                    'shortTitle': "Primitive data types",
                    'title': "List Javascript's primitive data types and describe their use",
                    'content': '',
                }, {
                    'shortTitle': "Modify arrays and Immutable",
                    'title': "Demonstrate how to modify an array and explain the pros/cons of an immutable approach",
                    'content': '',
                }, {
                    'shortTitle': "Traditional map, filter and reduce",
                    'title': "Demonstrate how to write map, filter and reduce using traditional loops e.g. for and while",
                    'content': '',
                }, {
                    'shortTitle': "Inappropriate if else",
                    'title': "Demonstrate a scenario where an 'if else' block is inappropriate and illustrate an alternative ",
                    'content': '',
                }, {
                    'shortTitle': "Anonymous function",
                    'title': "What is an 'anonymous function'?	 #NeedsEvidence",
                    'content': '',
                }, {
                    'shortTitle': "Arrow functions",
                    'title': "Why were arrow functions introduced to javascript?",
                    'content': '',
                }, {
                    'shortTitle': "Improper Closures",
                    'title': "Demonstrate how improper use of closures can cause memory leaks",
                    'content': '',
                }, {
                    'shortTitle': "RegExp",
                    'title': "Demonstrate a scenario in which using a RegExp would be appropriate ",
                    'content': '',
                }, {
                    'shortTitle': "Prototype",
                    'title': "Why is it a bad idea to assign objects as prototype properties?",
                    'content': '',
                }, {
                    'shortTitle': "Own vs prototype properties",
                    'title': "Explain the difference between own properties vs prototype properties",
                    'content': '',
                }, {
                    'shortTitle': "Multiple inheritance",
                    'title': "Demonstrate how to achieve multiple inheritance in Javascript",
                    'content': '',
                }, {
                    'shortTitle': "DOM",
                    'title': "Explain the purpose of the DOM and its APIs",
                    'content': '',
                }, {
                    'shortTitle': "Event capturing vs bubbling",
                    'title': "What is the difference between event capturing and event bubbling? ",
                    'content': '',
                }, {
                    'shortTitle': "AJAX",
                    'title': "What is AJAX and why is it important that it is asynchronous?",
                    'content': '',
                }, {
                    'shortTitle': "Data structures in JSON",
                    'title': "Demonstrate how to express a variety of data structures in JSON",
                    'content': '',
                }, {
                    'shortTitle': "Singleton",
                    'title': "What is a singleton and when might you use one?",
                    'content': '',
                }, {
                    'shortTitle': "Factory",
                    'title': "What is a Factory and when might you use one?",
                    'content': '',
                }, {
                    'shortTitle': "Promises",
                    'title': "Why were Promises introduced to Javascript?",
                    'content': '',
                }, {
                    'shortTitle': "Epoch time",
                    'title': "Why might you want to represent a date as the number of milliseconds from midnight on the 1st January 1970? ",
                    'content': '',
                }, {
                    'shortTitle': "Threading",
                    'title': "Why does setTimeout(fn, 0) not immediately execute?",
                    'content': '',
                }]
        }
    }
});
