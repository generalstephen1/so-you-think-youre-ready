import Ember from 'ember';
import { massage } from '../../helpers/massage-data'
import { slugComparison } from '../../helpers/slug-comparison'

export default Ember.Route.extend({
    templateName: 'route-entrypoint',
    data: null,

    init() {
        this.set('data', massage(this.rawData, 'general-js'));
    },

    model(params) {
        return slugComparison(this.get('data'), params.slug);
    },

    rawData: {
        title: 'Knowledge of JS',
        points: [
            {
                'shortTitle': "Inheritance",
                'title': "Demonstrate the value of inheritance",
                'level': 3,
                'approved': true,
                'content': [
                    { 'data': [
                        'Inheritance in Javascript can be a matter for argument among developers.',
                        'Primarily it is used to create class hierarchy within a project which reduces code duplication.',
                        'for example:'
                    ]},{
                        'type': 'code-snippet',
                        'data': [
                            '        Human',
                            '        __|__',
                            'Banker__|   |___ Astronaut',
                        ],
                    },{
                        'data': [
                            'In the above example if the "Person" has attributes of "breathing", "seeing" and "connecting to WiFi" the downstream inheritors will also have those attributes.',
                            'this is helpful as all "Human" items will have these things in common whereas "Astronauts" will have attributes and functionalities that differ from that of "Bankers"',
                            'eg. "Playing Guitar in Zero G"',
                        ]}
                ],
            }, {
                'shortTitle': "Scopes",
                'title': "List 3 available scopes in Javascript and demonstrate their differences",
                'level': 3,
                'approved': true,
                'content': [{
                    'data': ['There are three scopes in javascript world. Global, Local and Block scopes.'],
                }, {
                    'title': 'Global Scope',
                    'data': ['The Global scope is for variables that need to be accessed from every point in the ' +
                        'codebase, this is usually reserved for very high-level config.'],
                }, {
                    'title': 'Local Scope',
                    'data': ['The Local scope is for variables that need to be accessed from every point in a local ' +
                        'space, for instance a variable defined in an if statement that is accessed from outside ' +
                        'this is typical of pre-ES6 and is the scope of "var"'],
                }, {
                    'title': 'Block Scope',
                    'data': ['Block scoping can be somewhat summarised as "between some curly braces". Variables in the ' +
                        'block scope do not leak out of their curly braces and are differenciated b being defined with ' +
                        '"let" and "const"'],
                }, {
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
                'level': 2,
                'approved': true,
                'content': [{
                    'data': ['This is a fun example of how we can take advantage of JS "helper" functions and end up writing ' +
                        'code with the characters "[]()=-"'],
                }, {
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
                }, {
                    'data': ['which can just get completely out of hand'],
                }, {
                    'type': 'code-snippet',
                    'data': ['(![]+[])[+!![]] === "a"']
                }, {
                    'data': ['By stringifying values such as "undefined" and accessing it as an array we then have access to each individual letter'],
                }, {
                    'data': ['this is commonly referred to as "JSFuck"'],
                }],
            }, {
                'shortTitle': "Primitive data types",
                'title': "List Javascript's primitive data types and describe their use",
                'level': 3,
                'approved': true,
                'content': [{
                    'title': 'Boolean',
                    'data': ['A strictly black and white value that can only be True or False'],
                }, {
                    'title': 'Null',
                    'data': ['Can only ever have the value of null, means a total lack of type and value',
                        'has a value of "object" when accessed through .typeof due to legacy reasons...',
                        'also not strictly but loosely equivalent to undefined.',
                        'Is Developer assigned, and should not exist otherwise'],
                }, {
                    'title': 'Undefined',
                    'data': [
                        'The data-type of a variable that has not been defined but is known to exist',
                        'the value of an undeclared variable and the default value for variables until they are explicitly assigned a value.'
                    ],
                }, {
                    'title': 'Number',
                    'data': ['Values can include any integer or float value as well as +Infinity, -Infinity and NaN (Not a Number)'],
                }, {
                    'title': 'String',
                    'data': ['Used to represent Textual data, can be treated as an array.',
                        'ie "infinity"[2] // "f"',
                        'strings are an immutable data type'],
                }, {
                    'title': 'Symbol (new in ES6)',
                    'data': ['A "Unique and Immutable" primitive that can be used as the key of an object']
                }],
            }, {
                'shortTitle': "Modify arrays and Immutable",
                'title': "Demonstrate how to modify an array and explain the pros/cons of an immutable approach",
                'level': 2,
                'approved': true,
                'content': [
                    {'data': [
                        'Arrays are by definition index-based systems and as such the index is the primary method used to modify them, take the below example',
                    ]},{
                        'type': 'code-snippet',
                        'data': [
                            'const cats = ["Lion", "Tiger", "Panther"]',
                            'console.log(cats)  // Lion,Tiger,Panther',
                            '',
                            'cats[1] = "Oxylotl"',
                            'console.log(cats)  // Lion,Oxylotl,Panther',
                        ]
                    }, {
                        'data': [
                            'Accessing the array index "1" will mutate the existing array to replace the item at index 1.',
                            'Some of the other options for Array manipulation include (but are not limited to): ',
                        ],
                    }, {
                        'type': 'list',
                        'data': [
                            ".filter(compareFn) - Returns an array containing items in initial array that meet the standards of the compare Function (existing array is unchanged)",
                            ".sort(compareFn) - Alphebetizes or size-orders the items in the array by default, or can be passed a comparator function that sorts items",
                            ".toString() - Concatenates all the values in the array separated by commas and returns them as a string (existing array is unchanged)",
                            ".join(separator) - Similar to '.toString' but you can define what the values are separated by (existing array is unchanged)",
                            ".pop - Returns the first item in the array and removes it from the array, moving all the subsequent items up one",
                            ".push - Adds a new thing to the end of the array",
                            ".unshift - Adds a new thing to the start of the array and moves everything else in the array up one",
                            ".reduce(compareFn) - Returns a mutated array where items meet the requirements of a reducer function (existing array is unchanged)",
                        ]
                    }, {
                        'title': 'Immutability',
                        'data': ['Immutability is the concept of having a single instantiation of an (in this case) Array, this one "Source of Truth" will not change and anything ' +
                                'that does attempt to change the values within it will instead return a brand new array with the changes.'],
                    }, {
                        'type': 'list',
                        'title': 'Pros',
                        'data': [
                            'With one source of truth you eliminate weird conditions where a completely unrelated piece of code changes a variable',
                            'Reduction of complexity as you do not need to track the lifecycle or create defensive copies of a variable',
                            'Caching of a variable becomes easier',
                            'Async functions no longer have to worry about their called values becoming stale',
                            'As there is a "paper trail" of variable versions on immutable variables it is simple to roll back and forward between program states',
                        ],
                    }, {
                        'type': 'list',
                        'title': 'Cons',
                        'data': [
                            'Building/tracking relationships between instantiated content can be difficult as you cannot bake it into the variables',
                            'Repetitive instatiation of variables (mutations) has a performance impact',
                        ]
                    }
                ],
            }, {
                'shortTitle': "Traditional map, filter and reduce",
                'title': "Demonstrate how to write map, filter and reduce using traditional loops e.g. for and while",
                'level': 2,
                'approved': false,
                'content': '',
            }, {
                'shortTitle': "Inappropriate if else",
                'title': "Demonstrate a scenario where an 'if else' block is inappropriate and illustrate an alternative ",
                'level': 2,
                'approved': false,
                'content': '',
            }, {
                'shortTitle': "Anonymous function",
                'title': "What is an 'anonymous function'?",
                'level': 2,
                'approved': false,
                'content': '',
            }, {
                'shortTitle': "Arrow functions",
                'title': "Why were arrow functions introduced to javascript?",
                'level': 2,
                'approved': true,
                'content': [{
                    'data': ['Arrow functions have two main advances compared to their defined function counterparts',
                        '1) Shorter syntax, it is quicker to write ()=>{} than function(){}, and',
                        '2) The automatic binding of "this", "arguments", "super" and "new.target"']
                }],
            }, {
                'shortTitle': "Improper Closures",
                'title': "Demonstrate how improper use of closures can cause memory leaks",
                'level': 1,
                'approved': false,
                'content': '',
            }, {
                'shortTitle': "RegExp",
                'title': "Demonstrate a scenario in which using a RegExp would be appropriate ",
                'level': 2,
                'approved': true,
                'content': [
                    {'data': ['Regexes are patterns for optimal parsing of strings, as such any complex string of which you would like to extract a value that obeys some ' +
                             'rules is a likely reason to use a Regex.']},
                    {
                        'type': 'list',
                        'title': 'Common Use Cases',
                        'data': [
                            'Extracting an email address from a block of text',
                            'Validation on a form that requires things like a bank account, phone number NI number etc',
                            'Postcodes',
                        ],
                    }
                ],
            }, {
                'shortTitle': "Prototype",
                'title': "Why is it a bad idea to assign objects as prototype properties?",
                'level': 1,
                'approved': false,
                'content': '',
            }, {
                'shortTitle': "Own vs prototype properties",
                'title': "Explain the difference between own properties vs prototype properties",
                'level': 2,
                'approved': true,
                'content': [
                    {'data': ['Own properties are properties that belong to the instance of a object (with a prototype) whereas a prototype property is somthing that is on the prototype object itself and will therefore ' +
                             'affect all objects that have that prototype ']}
                ],
            }, {
                'shortTitle': "Multiple inheritance",
                'title': "Demonstrate how to achieve multiple inheritance in Javascript",
                'level': 2,
                'approved': true,
                'content': [
                    {
                        'data': [
                            'Pre-ES6 this could be "hacked" together using mixins, however with the advent of ES6 we can use Proxy components to achieve multiple inheritance.',
                            'These mixins would loop through multiple "parent" objects and assign their keys to the child'
                        ]
                    }
                ],
            }, {
                'shortTitle': "DOM",
                'title': "Explain the purpose of the DOM and its APIs",
                'level': 3,
                'approved': true,
                'content': [
                    {'data': [
                        'The DOM (Document Object Model) is the point where scripts and webpages meet and are interpreted by a browser.',
                        'If we view the web page as a document (which it is), the DOM is a representation of that document that allows it to be manipulated'
                        ]},
                    {
                        'type': 'list',
                        'title': 'Some common DOM API use cases',
                        'data': [
                            'window.onload - an event that fires when the document has loaded (synchronously)',
                            'createElement - creates the specified element',
                            'getElementById - returns an element with the matching id attribute',
                            'getElementsByClassName - returns an array of element nodes that match the class attribute',
                            'getElementsByTagName - returns an array of element nodes of the tag type specified',
                        ],
                    }
                ],
            }, {
                'shortTitle': "Event capturing vs bubbling",
                'title': "What is the difference between event capturing and event bubbling? ",
                'level': 2,
                'approved': true,
                'content': [
                    {'data': [
                        'By default when (almost) any event happens on an element it will trigger the handlers first on that element',
                        '.... then the elements parent handlers',
                        '.... then the parents parent handlers',
                        '.... and keeps going up',
                    ]}, {
                        'data': ['This process is called "Bubbling" and is quite well known in the javascript world'],
                    }, {
                        'data': [
                            'Capturing on the other hand is almost the reverse process and is not as often used.',
                            'It refers to the "first phase" of event propogation and occurs when an event is being passed in the other direction (from parents down to children). ' +
                            'by default this is false, but can be set to true with a third parameter of a boolean on any event handler',
                        ],
                    }
                ],
            }, {
                'shortTitle': "AJAX",
                'title': "What is AJAX and why is it important that it is asynchronous?",
                'level': 2,
                'approved': true,
                'content': [
                    {'data': [
                        'AJAX stands for Asynchronous Javascript and XML and is an XMLHttpRequest sent by the browser to communicate with a server.',
                        'Its benefit lies in its asynchronicity as it does not block Javascripts single thread while waiting for the response from the server, ' +
                        'instead it allows the page to ingest the data returned from the server without refreshing the entire page.',
                    ]}
                ],
            }, {
                'shortTitle': "Data structures in JSON",
                'title': "Demonstrate how to express a variety of data structures in JSON",
                'level': 3,
                'approved': true,
                'content': [{
                    data: [
                        'Javascript Object Notation or JSON is a strict, object oriented method for displaying complex data through simple rules',
                        'Speaking in JS terms it is made up of {} key/value objects, [] indexed arrays and primitive values such as numbers and strings.',
                        'For example this point is made up of the following: '
                    ]
                }, {
                    'type': 'code-snippet',
                    'data': [
                        '{',
                        '    "title": "Knowledge of JS",',
                        '    "points": [',
                        '       {',
                        '           "shortTitle": "Data structures in JSON",',
                        '           "title": "Demonstrate how to express a variety of data structures in JSON",',
                        '           "content": [...allthecontent]',
                        '       },',
                        '       {...}, {...}, {...},',
                        '    ]',
                        '}'
                    ]
                }, {
                    data: 'which is very nearly JSON, mostly it it using single rather than double quotes',
                }],
            }, {
                'shortTitle': "Singleton",
                'title': "What is a singleton and when might you use one?",
                'level': 2,
                'approved': true,
                'content': [
                    {data: [
                            'A singleton is an object in an application that there is ony one of (by design). All references to the singleton reference a single instance.',
                            'This is a useful pattern for times when a common action needs to be taken from different places around the codebase and ideally be coordinated from one place.',
                            'examples of this being useful are',
                    ]}, {
                        'type':'list',
                        data: [
                            'connections to a database',
                            'a logger',
                            'storage of global state; language, filepath etc',
                        ]
                    }
                ],
            }, {
                'shortTitle': "Factory",
                'title': "What is a Factory and when might you use one?",
                'level': 2,
                'approved': true,
                'content': [
                    {
                        data: [
                            'A factory function is any function that is not a class that returns an object (presumably a new object created by that function)',
                            'They are attractive to use as they allow you to easily create instances of objects without worrying about the "new" keyword and class complexities.',
                            'A reason to use functions could be something like a chat app in which you need to create a variaety of simple users.',
                        ]
                    }
                ],
            }, {
                'shortTitle': "Promises",
                'title': "Why were Promises introduced to Javascript?",
                'level': 2,
                'approved': false,
                'content': '',
            }, {
                'shortTitle': "Epoch time",
                'title': "Why might you want to represent a date as the number of milliseconds from midnight on the 1st January 1970? ",
                'level': 2,
                'approved': true,
                'content': [
                    {data: ['Epoch, or Unix time is a standardised measurement primarily for programming that is handy as it does not obey any particular timezone and as such can be taken as ' +
                            'a single point of truth for dates and times as it can then be converted into any time-system required.']}
                ],
            }, {
                'shortTitle': "Threading",
                'title': "Why does setTimeout(fn, 0) not immediately execute?",
                'level': 2,
                'approved': false,
                'content': [
                    {
                        data: ['When you use setTimeout it immediately removes the block of code from the current processing thread. As JS is a single-threaded language it will continue with everything ' +
                              'else queued on the thread and only then look for things that have been scheduled for later (at which time this would trigger)']
                    }
                ],
            }]
    }
});
