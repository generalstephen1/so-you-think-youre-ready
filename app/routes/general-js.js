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
                    'content': [{
                        'data': ['There are three scopes in javascript world. Global, Local and Block scopes.'],
                    },{
                        'title': 'Global Scope',
                        'data': ['The Global scope is for variables that need to be accessed from every point in the ' +
                                'codebase, this is usually reserved for very high-level config.'],
                    },{
                        'title': 'Local Scope',
                        'data': ['The Local scope is for variables that need to be accessed from every point in a local ' +
                                'space, for instance a variable defined in an if statement that is accessed from outside ' +
                                'this is typical of pre-ES6 and is the scope of "var"'],
                    },{
                        'title': 'Block Scope',
                        'data': ['Block scoping can be somewhat summarised as "between some curly braces". Variables in the ' +
                                'block scope do not leak out of their curly braces and are differenciated b being defined with ' +
                                '"let" and "const"'],
                    },{
                        'type': 'code-snippet',
                        'data': [
                            'var myVar1 = "Greetings";',
                            'if(true){',
                            '    myVar1 = "Bye";',
                            '    let myVar2 = "Hello";',
                            '    var myVar3 = "ohHai";',
                            '}',
                            'console.log(myVar1) // Bye',
                            'console.log(myVar2) // undefined',
                            'console.log(myVar3) // ohHai',
                        ],
                    }],
                }, {
                    'shortTitle': "JS in 6 characters",
                    'title': "How is it possible that any Javascript program be represented using combinations of just 6 characters?",
                    'content': [{
                        'data': ['This is a fun example of how we can take advantage of JS "helper" functions and end up writing ' +
                                'code with the characters "[]()=-"'],
                     },{
                        'type': 'code-snippet',
                        'data': [
                            '// prefixing with a "!" converts a value to a Bool',
                            '![] === false',
                            '',
                            '// prefixing with a "+" converts a value to a Number',
                            '+[] === 0',
                            '',
                            '// prefixing with "[]" converts a value to a String',
                            '[]+[] === ""',
                            '',
                        ],
                    },{
                        'data': ['which can just get completely out of hand'],
                    },{
                        'type': 'code-snippet',
                        'data': ['(![]+[])[+!![]] === "a"']
                    },{
                        'data': ['By stringifying values such as "undefined" and accessing it as an array we then have access to each individual letter'],
                    },{
                        'data': ['this is commonly referred to as "JSFuck"'],
                    }],
                }, {
                    'shortTitle': "Primitive data types",
                    'title': "List Javascript's primitive data types and describe their use",
                    'content': [{
                        'title': 'Boolean',
                        'data': ['A strictly black and white value that can only be True or False'],
                    },{
                        'title': 'Null',
                        'data': ['Can only ever have the value of null, means a total lack of type and value',
                                 'has a value of "object" when accessed through .typeof due to legacy reasons...',
                                 'also not strictly but loosely equivalent to undefined.'],
                    },{
                        'title': 'Undefined',
                        'data': ['The data-type of a variable that has not been defined but is known to exist'],
                    },{
                        'title': 'Number',
                        'data': [ 'Values can include any integer or float value as well as +Infinity, -Infinity and NaN (Not a Number)'],
                    },{
                        'title': 'String',
                        'data': ['Used to represent Textual data, can be treated as an array.',
                                 'ie "infinity"[2] // "f"',
                                 'strings are an immutable data type'],
                    },{
                        'title': 'Symbol (new in ES6)',
                        'data': ['A "Unique and Immutable" primitive that can be used as the key of an object']
                    }],
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
                    'content': [{
                        'data':['Arrow functions have two main advances compared to their defined function counterparts',
                                '1) Shorter syntax, it is quicker to write ()=>{} than function(){}, and',
                                '2) The automatic binding of "this", "arguments", "super" and "new.target"']
                    }],
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
