"use strict";



define('level-up/app', ['exports', 'level-up/resolver', 'ember-load-initializers', 'level-up/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});

define('level-up/components/point-content', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});

define('level-up/components/primary-nav', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});

define('level-up/components/primitive/basic-image', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});

define('level-up/components/primitive/code-snippet', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});

define('level-up/components/primitive/list-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});

define('level-up/components/section-container', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    actions: {
      loadPoint: function loadPoint(whatPoint) {
        this.set('currentContentID', whatPoint);
      }
    }
  });
});

define('level-up/components/side-bar', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        actions: {
            // loadPoint(index){
            //     this.get('loadPoint')(index)
            // }
        }
    });
});

define('level-up/components/text-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});

define('level-up/controllers/section-container', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({});
});

define('level-up/helpers/and', ['exports', 'ember-truth-helpers/helpers/and'], function (exports, _and) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_and.andHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_and.andHelper);
  }

  exports.default = forExport;
});

define('level-up/helpers/app-version', ['exports', 'level-up/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});

define('level-up/helpers/eq', ['exports', 'ember-truth-helpers/helpers/equal'], function (exports, _equal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_equal.equalHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_equal.equalHelper);
  }

  exports.default = forExport;
});

define('level-up/helpers/gt', ['exports', 'ember-truth-helpers/helpers/gt'], function (exports, _gt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_gt.gtHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_gt.gtHelper);
  }

  exports.default = forExport;
});

define('level-up/helpers/gte', ['exports', 'ember-truth-helpers/helpers/gte'], function (exports, _gte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_gte.gteHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_gte.gteHelper);
  }

  exports.default = forExport;
});

define('level-up/helpers/is-array', ['exports', 'ember-truth-helpers/helpers/is-array'], function (exports, _isArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_isArray.isArrayHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_isArray.isArrayHelper);
  }

  exports.default = forExport;
});

define('level-up/helpers/lt', ['exports', 'ember-truth-helpers/helpers/lt'], function (exports, _lt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_lt.ltHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_lt.ltHelper);
  }

  exports.default = forExport;
});

define('level-up/helpers/lte', ['exports', 'ember-truth-helpers/helpers/lte'], function (exports, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_lte.lteHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_lte.lteHelper);
  }

  exports.default = forExport;
});

define('level-up/helpers/massage-data', ['exports', 'level-up/helpers/text-helpers'], function (exports, _textHelpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.massage = massage;
  function massage(item, category) {
    var newPoints = {
      title: item.title,
      points: Ember.A()
    };

    item.points.forEach(function (item) {
      var newItem = Ember.Object.create(item);

      newItem.set('slug', (0, _textHelpers.slugify)(newItem.get('shortTitle')));
      newItem.set('cat', category);

      newPoints.points.pushObject(newItem);
    });

    return newPoints;
  }

  exports.default = Ember.Helper.helper(massage);
});

define('level-up/helpers/not-eq', ['exports', 'ember-truth-helpers/helpers/not-equal'], function (exports, _notEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_notEqual.notEqualHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_notEqual.notEqualHelper);
  }

  exports.default = forExport;
});

define('level-up/helpers/not', ['exports', 'ember-truth-helpers/helpers/not'], function (exports, _not) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_not.notHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_not.notHelper);
  }

  exports.default = forExport;
});

define('level-up/helpers/or', ['exports', 'ember-truth-helpers/helpers/or'], function (exports, _or) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_or.orHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_or.orHelper);
  }

  exports.default = forExport;
});

define('level-up/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});

define('level-up/helpers/render-content', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.renderContent = renderContent;
  function renderContent(params /*, hash*/) {
    var activeModule = params[0][params[1]];

    return activeModule;
  }

  exports.default = Ember.Helper.helper(renderContent);
});

define('level-up/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});

define('level-up/helpers/slug-comparison', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.slugComparison = slugComparison;
  function slugComparison(curData, slug) {
    var activeContent = curData.points.filter(function (datum) {
      return datum.slug === slug;
    })[0];
    var rawNavData = [{ FN: 'JS', route: 'general-js', slug: 'inheritance', classes: 'mdl-tabs__tab' }, { FN: 'Web', route: 'web-dev', slug: 'well-structured-html', classes: 'mdl-tabs__tab' }, { FN: 'Ember', route: 'ember', slug: 'url-mapping-decoupled-folder-structure', classes: 'mdl-tabs__tab' },
    // {FN: 'Tooling', route: 'tooling',     slug:'cloneforkcreate',              classes: 'mdl-tabs__tab'},
    { FN: 'IG', route: 'ig-knowledge', slug: 'asset-classes-and-markets', classes: 'mdl-tabs__tab' }];

    if (!activeContent && curData) {
      activeContent = curData[0];
    }
    // else if (!curData) {
    //   return {navData:rawNavData}
    // }

    var activeNavItem = rawNavData.filter(function (navItem) {
      return navItem.route === activeContent.cat;
    })[0];

    if (activeNavItem) {
      activeNavItem.classes = 'mdl-tabs__tab mdl-tabs__tab--active';
    }

    return {
      data: curData.points,
      activeContent: activeContent,
      navData: rawNavData
    };
  }

  exports.default = Ember.Helper.helper(slugComparison);
});

define('level-up/helpers/text-helpers', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.slugify = slugify;
    function slugify(params /*, hash*/) {
        return params.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
    }

    exports.default = Ember.Helper.helper(slugify);
});

define('level-up/helpers/xor', ['exports', 'ember-truth-helpers/helpers/xor'], function (exports, _xor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_xor.xorHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_xor.xorHelper);
  }

  exports.default = forExport;
});

define('level-up/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'level-up/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var name = void 0,
      version = void 0;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});

define('level-up/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});

define('level-up/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});

define('level-up/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});

define('level-up/initializers/export-application-global', ['exports', 'level-up/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});

define('level-up/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});

define('level-up/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});

define('level-up/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});

define('level-up/initializers/truth-helpers', ['exports', 'ember-truth-helpers/utils/register-helper', 'ember-truth-helpers/helpers/and', 'ember-truth-helpers/helpers/or', 'ember-truth-helpers/helpers/equal', 'ember-truth-helpers/helpers/not', 'ember-truth-helpers/helpers/is-array', 'ember-truth-helpers/helpers/not-equal', 'ember-truth-helpers/helpers/gt', 'ember-truth-helpers/helpers/gte', 'ember-truth-helpers/helpers/lt', 'ember-truth-helpers/helpers/lte'], function (exports, _registerHelper, _and, _or, _equal, _not, _isArray, _notEqual, _gt, _gte, _lt, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{

    // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
    // will be auto-discovered.
    if (Ember.Helper) {
      return;
    }

    (0, _registerHelper.registerHelper)('and', _and.andHelper);
    (0, _registerHelper.registerHelper)('or', _or.orHelper);
    (0, _registerHelper.registerHelper)('eq', _equal.equalHelper);
    (0, _registerHelper.registerHelper)('not', _not.notHelper);
    (0, _registerHelper.registerHelper)('is-array', _isArray.isArrayHelper);
    (0, _registerHelper.registerHelper)('not-eq', _notEqual.notEqualHelper);
    (0, _registerHelper.registerHelper)('gt', _gt.gtHelper);
    (0, _registerHelper.registerHelper)('gte', _gte.gteHelper);
    (0, _registerHelper.registerHelper)('lt', _lt.ltHelper);
    (0, _registerHelper.registerHelper)('lte', _lte.lteHelper);
  }

  exports.default = {
    name: 'truth-helpers',
    initialize: initialize
  };
});

define("level-up/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});

define('level-up/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});

define('level-up/router', ['exports', 'level-up/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('ember', function () {
      this.route('item', { path: '/:slug' }, function () {
        this.route('comments', { resetNamspace: true });
      });
    });
    this.route('testing', function () {
      this.route('item', { path: '/:slug' });
    });
    this.route('web-dev', function () {
      this.route('item', { path: '/:slug' });
    });
    this.route('ig-knowledge', function () {
      this.route('item', { path: '/:slug' });
    });
    this.route('general-js', function () {
      this.route('item', { path: '/:slug' });
    });
    this.route('tooling', function () {
      this.route('item', { path: '/:slug' });
    });

    this.route('404', {
      path: '*'
    });
  });

  exports.default = Router;
});

define('level-up/routes/404', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});

define('level-up/routes/ember', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        beforeModel: function beforeModel() {
            this.transitionTo('ember.item', 'url-mapping-decoupled-folder-structure');
        }
    });
});

define('level-up/routes/ember/item', ['exports', 'level-up/helpers/massage-data', 'level-up/helpers/slug-comparison'], function (exports, _massageData, _slugComparison) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        templateName: 'route-entrypoint',
        data: null,

        init: function init() {
            this.set('data', (0, _massageData.massage)(this.rawData, 'ember'));
        },
        model: function model(params) {
            return (0, _slugComparison.slugComparison)(this.get('data'), params.slug);
        },


        rawData: {
            title: 'Knowledge of Ember',
            points: [{
                'shortTitle': 'URL mapping decoupled folder structure',
                'title': "Demonstrate how the URL can map to UI hierarchies built from views in a decoupled folder structure",
                'content': [{
                    'data': ['Ember URL mapping is not tied to any particular route, through the use of the --path flag you can assign a route to land on any page you want ']
                }, {
                    'type': 'code-snippet',
                    'data': ['$ ember generate route myRoute1', '$ ember generate route myRoute2', '$ ember generate route aRouteGroup/myRoute3 --path="myRoute1"', '', 'app', '   |-- routes', '       |-- myRoute1', '       |-- myRoute2', '       |-- aRouteGroup', '           |-- myGroupRoute3', '', '// all accessed by visiting /routeName']
                }, {
                    'data': ['Or alternatively a route can have dynamic segments that correspond to different views']
                }, {
                    'type': 'code-snippet',
                    'data': ['$ ember generate route aRouteGroup/myRoute3 --path="myRoute1:someID"']
                }, {
                    'data': ['Alternatatively but using the "resetNameSpace" flag you can completely sever the route from the folder structure to be utilised as a nested route in any other route.']
                }]
            }, {
                'shortTitle': 'Route lifecycle hooks',
                'title': "List the main lifecycle hooks available in Routes and describe appropriate use cases for each",
                'url': 'https://github.com/generalstephen1/ember-docs/blob/master/Route%20Lifecycle%20Hooks.md'
            }, {
                'shortTitle': 'Component lifecycle hooks',
                'title': "List the Ember component lifecycle hooks and describe the conditions that cause them to trigger",
                'url': 'https://github.com/generalstephen1/ember-docs/blob/master/Component%20Lifecycle%20Hooks.md'
            }, {
                'shortTitle': 'Embers Resolver',
                'title': "Explain the purpose of Ember's Resolver and how it supports convention over configuration",
                'content': [{ 'data': ['Embers resolver the name of its mechanism of looking up the various parts of your application by utilising it\'s naming conventions to easily parse project structure'] }, {
                    'title': 'Convention over Configuration',
                    'data': ['This is a great case of the above as so long as you don\'t do anything too custom. By using Embers generation functions you can generate components, routes and addons ' + 'with ease and not sorry about how Ember is meant to know where they live and how they\'re meant to talk to each other. This communication is baked into the generation process ' + 'and even manually created files, so long as they obey the naming conventions and application structure, will be readily included in and accessible from the rest of the App.']
                }]
            }, {
                'shortTitle': 'Handlebars helpers',
                'title': "Demonstrate appropriate use of the core Handlebars helpers",
                'content': [{
                    title: '#each',
                    data: ['Loops through an array/iterable and appies the template/block in question with the new context each time']
                }, {
                    type: 'code-snippet',
                    data: ['<ol>', '{{#each model.toDoList as |listItem|}}', '   <li>{{listItem}}</li>', '{{/each}}', '</ol>']
                }, {
                    type: 'code-snippet',
                    data: ['model(){', '   return [', '       "Collect Drycleaning",', '       "Eat leftovers",', '       "Take over the world",', '   ]', '}']
                }, {
                    'data': ['the above two together would result in markup like']
                }, {
                    type: 'code-snippet',
                    'data': ['<ol>', '       <li>Collect Drycleaning</li>', '       <li>Eat leftovers</li>', '       <li>Take over the world</li>', '</ol>']
                }, {
                    title: '#if / else',
                    data: ['allows for markup to decide on whether to render based on a boolean value']
                }, {
                    type: 'code-snippet',
                    data: ['{{#if isOneTrueKing}}', '   Release Excalibor!', '{{else}}', '   Stuck in a rock', '{{/if}}']
                }, {
                    title: '#get',
                    data: ['will dynamically get a property on a model']
                }, {
                    type: 'code-snippet',
                    data: ['{{get address part}}', ' // is equivalent of doing (if "part" returns "zip")', 'this.get("address.zip")']
                }, {
                    title: '#concat',
                    data: ['concatenates values']
                }, {
                    type: 'code-snippet',
                    data: ['{{concat firstName lastName}}', ' // is equivalent of doing (if firstName if "Zap" and lastName is "Brannagan")', 'ZapBrannagan']
                }]
            }, {
                'shortTitle': 'yielding params in a component',
                'title': "Demonstrate how yielding block params can improve the composability of a component",
                'content': [{ 'data': ['The {{yield}} block within a handlebars component will replace itself with anything added between its open and closing tags if expressed as a block'] }, {
                    'type': 'code-snippet',
                    'data': [' // application.hbs', '{{#mySuperComponent}}', '   {{#myOtherSuperComponent}}', '{{/mySuperComponent}}']
                }, {
                    'data': ['This would result in "myOtherSuperComponent" being rendered wherever "mySuperComponent"s {{yield}} block is', 'This makes components more composable as if you have a generic wrapper for content you can re-use this for each block of content']
                }, {
                    'type': 'code-snippet',
                    'data': ['// mySuperComponent.hbs', '<div>', '   <h1> Below you will find the results of your awesome search! </h1>', '   {{yield}}', '</div>']
                }]
            }, {
                'shortTitle': 'Popular Ember Addons',
                'title': "List popular Ember Addons and describe their function",
                'content': null
            }, {
                'shortTitle': 'Runloop',
                'title': "Explain the advantages of Ember's Runloop over a basic pub/sub event emitter patter",
                'content': [{
                    'data': ['Ember\'s run-loop is a clever optimization of Ember that batches and orders pieces of work to be triggered at the optimal time and stop repetitive pieces of work.', 'This describes one of the key optimizations, in-built debounce control for pieces of work. whereas a traditional pub/sub method would stupidly barrage the same enpoint on each call. ', 'It is also helpful for its registration and deregistration of commands. ']
                }]
            }, {
                'shortTitle': 'Computed properties vs observers',
                'title': "Explain the benefits of computed properties over observers",
                'content': [{
                    'data': ['The primary benefit of using computed properties over observers is the lazy method of computing said property.', 'Where an observed property will trigger on a dependency change and update it\'s property the computed method will only re-compute if it is referenced, thereby saving processing time.', 'other benefits include the fact that computed properties utilise caching for their compilations instead of recompiling each lookup, ' + 'it is also updated within the run-loop which keeps the entire programme in a good flow state. ']
                }, {}]
            }, {
                'shortTitle': 'Addons',
                'title': "Demonstrate how to package appropriate reusable code as an Ember Addon",
                'content': null
            }, {
                'shortTitle': 'ember-cli build pipeline',
                'title': "Demonstrate how to leverage the ember-cli build pipeline to affect the binary output",
                'content': null
            }]
        }
    });
});

define('level-up/routes/general-js', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        beforeModel: function beforeModel() {
            this.transitionTo('general-js.item', 'inheritance');
        }
    });
});

define('level-up/routes/general-js/item', ['exports', 'level-up/helpers/massage-data', 'level-up/helpers/slug-comparison'], function (exports, _massageData, _slugComparison) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        templateName: 'route-entrypoint',
        data: null,

        init: function init() {
            this.set('data', (0, _massageData.massage)(this.rawData, 'general-js'));
        },
        model: function model(params) {
            return (0, _slugComparison.slugComparison)(this.get('data'), params.slug);
        },


        rawData: {
            title: 'Knowledge of JS',
            points: [{
                'shortTitle': "Inheritance",
                'title': "Demonstrate the value of inheritance",
                'content': [{ 'data': ['Inheritance in Javascript can be a matter for argument among developers.', 'Primarily it is used to create class hierarchy within a project which reduces code duplication.', 'for example:'] }, {
                    'type': 'code-snippet',
                    'data': ['        Human', '        __|__', 'Banker__|   |___ Astronaut']
                }, {
                    'data': ['In the above example if the "Person" has attributes of "breathing", "seeing" and "connecting to WiFi" the downstream inheritors will also have those attributes.', 'this is helpful as all "Human" items will have these things in common whereas "Astronauts" will have attributes and functionalities that differ from that of "Bankers"', 'eg. "Playing Guitar in Zero G"'] }]
            }, {
                'shortTitle': "Scopes",
                'title': "List 3 available scopes in Javascript and demonstrate their differences",
                'content': [{
                    'data': ['There are three scopes in javascript world. Global, Local and Block scopes.']
                }, {
                    'title': 'Global Scope',
                    'data': ['The Global scope is for variables that need to be accessed from every point in the ' + 'codebase, this is usually reserved for very high-level config.']
                }, {
                    'title': 'Local Scope',
                    'data': ['The Local scope is for variables that need to be accessed from every point in a local ' + 'space, for instance a variable defined in an if statement that is accessed from outside ' + 'this is typical of pre-ES6 and is the scope of "var"']
                }, {
                    'title': 'Block Scope',
                    'data': ['Block scoping can be somewhat summarised as "between some curly braces". Variables in the ' + 'block scope do not leak out of their curly braces and are differenciated b being defined with ' + '"let" and "const"']
                }, {
                    'type': 'code-snippet',
                    'data': ['var myVar1 = "Greetings";', 'if(true){', '    myVar1 = "Bye";', '    let myVar2 = "Hello";', '    var myVar3 = "ohHai";', '}', 'console.log(myVar1) // Bye', 'console.log(myVar2) // undefined', 'console.log(myVar3) // ohHai']
                }]
            }, {
                'shortTitle': "JS in 6 characters",
                'title': "How is it possible that any Javascript program be represented using combinations of just 6 characters?",
                'content': [{
                    'data': ['This is a fun example of how we can take advantage of JS "helper" functions and end up writing ' + 'code with the characters "[]()=-"']
                }, {
                    'type': 'code-snippet',
                    'data': ['// prefixing with a "!" converts a value to a Bool', '![] === false', '', '// prefixing with a "+" converts a value to a Number', '+[] === 0', '', '// prefixing with "[]" converts a value to a String', '[]+[] === ""', '']
                }, {
                    'data': ['which can just get completely out of hand']
                }, {
                    'type': 'code-snippet',
                    'data': ['(![]+[])[+!![]] === "a"']
                }, {
                    'data': ['By stringifying values such as "undefined" and accessing it as an array we then have access to each individual letter']
                }, {
                    'data': ['this is commonly referred to as "JSFuck"']
                }]
            }, {
                'shortTitle': "Primitive data types",
                'title': "List Javascript's primitive data types and describe their use",
                'content': [{
                    'title': 'Boolean',
                    'data': ['A strictly black and white value that can only be True or False']
                }, {
                    'title': 'Null',
                    'data': ['Can only ever have the value of null, means a total lack of type and value', 'has a value of "object" when accessed through .typeof due to legacy reasons...', 'also not strictly but loosely equivalent to undefined.']
                }, {
                    'title': 'Undefined',
                    'data': ['The data-type of a variable that has not been defined but is known to exist']
                }, {
                    'title': 'Number',
                    'data': ['Values can include any integer or float value as well as +Infinity, -Infinity and NaN (Not a Number)']
                }, {
                    'title': 'String',
                    'data': ['Used to represent Textual data, can be treated as an array.', 'ie "infinity"[2] // "f"', 'strings are an immutable data type']
                }, {
                    'title': 'Symbol (new in ES6)',
                    'data': ['A "Unique and Immutable" primitive that can be used as the key of an object']
                }]
            }, {
                'shortTitle': "Modify arrays and Immutable",
                'title': "Demonstrate how to modify an array and explain the pros/cons of an immutable approach",
                'content': [{ 'data': ['Arrays are by definition index-based systems and as such the index is the primary method used to modify them, take the below example'] }, {
                    'type': 'code-snippet',
                    'data': ['const cats = ["Lion", "Tiger", "Panther"]', 'console.log(cats)  // Lion,Tiger,Panther', '', 'cats[1] = "Oxylotl"', 'console.log(cats)  // Lion,Oxylotl,Panther']
                }, {
                    'data': ['Accessing the array index "1" will mutate the existing array to replace the item at index 1.', 'Some of the other options for Array manipulation include (but are not limited to): ']
                }, {
                    'type': 'list',
                    'data': [".filter(compareFn) - Returns an array containing items in initial array that meet the standards of the compare Function (existing array is unchanged)", ".sort(compareFn) - Alphebetizes or size-orders the items in the array by default, or can be passed a comparator function that sorts items", ".toString() - Concatenates all the values in the array separated by commas and returns them as a string (existing array is unchanged)", ".join(separator) - Similar to '.toString' but you can define what the values are separated by (existing array is unchanged)", ".pop - Returns the first item in the array and removes it from the array, moving all the subsequent items up one", ".push - Adds a new thing to the end of the array", ".unshift - Adds a new thing to the start of the array and moves everything else in the array up one", ".reduce(compareFn) - Returns a mutated array where items meet the requirements of a reducer function (existing array is unchanged)"]
                }, {
                    'title': 'Immutability',
                    'data': ['Immutability is the concept of having a single instantiation of an (in this case) Array, this one "Source of Truth" will not change and anything ' + 'that does attempt to change the values within it will instead return a brand new array with the changes.']
                }, {
                    'type': 'list',
                    'title': 'Pros',
                    'data': ['With one source of truth you eliminate weird conditions where a completely unrelated piece of code changes a variable', 'Reduction of complexity as you do not need to track the lifecycle or create defensive copies of a variable', 'Caching of a variable becomes easier', 'Async functions no longer have to worry about their called values becoming stale', 'As there is a "paper trail" of variable versions on immutable variables it is simple to roll back and forward between program states']
                }, {
                    'type': 'list',
                    'title': 'Cons',
                    'data': ['Building/tracking relationships between instantiated content can be difficult as you cannot bake it into the variables', 'Repetitive instatiation of variables (mutations) has a performance impact']
                }]
            }, {
                'shortTitle': "Traditional map, filter and reduce",
                'title': "Demonstrate how to write map, filter and reduce using traditional loops e.g. for and while",
                'content': ''
            }, {
                'shortTitle': "Inappropriate if else",
                'title': "Demonstrate a scenario where an 'if else' block is inappropriate and illustrate an alternative ",
                'content': ''
            }, {
                'shortTitle': "Anonymous function",
                'title': "What is an 'anonymous function'?",
                'content': ''
            }, {
                'shortTitle': "Arrow functions",
                'title': "Why were arrow functions introduced to javascript?",
                'content': [{
                    'data': ['Arrow functions have two main advances compared to their defined function counterparts', '1) Shorter syntax, it is quicker to write ()=>{} than function(){}, and', '2) The automatic binding of "this", "arguments", "super" and "new.target"']
                }]
            }, {
                'shortTitle': "Improper Closures",
                'title': "Demonstrate how improper use of closures can cause memory leaks",
                'content': ''
            }, {
                'shortTitle': "RegExp",
                'title': "Demonstrate a scenario in which using a RegExp would be appropriate ",
                'content': [{ 'data': ['Regexes are patterns for optimal parsing of strings, as such any complex string of which you would like to extract a value that obeys some ' + 'rules is a likely reason to use a Regex.'] }, {
                    'type': 'list',
                    'title': 'Common Use Cases',
                    'data': ['Extracting an email address from a block of text', 'Validation on a form that requires things like a bank account, phone number NI number etc', 'Postcodes']
                }]
            }, {
                'shortTitle': "Prototype",
                'title': "Why is it a bad idea to assign objects as prototype properties?",
                'content': ''
            }, {
                'shortTitle': "Own vs prototype properties",
                'title': "Explain the difference between own properties vs prototype properties",
                'content': [{ 'data': ['Own properties are properties that belong to the instance of a class whereas a prototype property is somthing that is on the class itself and will therefore ' + 'affect all instances of that class.'] }]
            }, {
                'shortTitle': "Multiple inheritance",
                'title': "Demonstrate how to achieve multiple inheritance in Javascript",
                'content': [{ 'data': ['#TODO look up proxy objects for ES6 multiple inheritance, can also be hacked together with mixins'] }]
            }, {
                'shortTitle': "DOM",
                'title': "Explain the purpose of the DOM and its APIs",
                'content': [{ 'data': ['The DOM (Document Object Model) is the point where scripts and webpages meet and are interpreted by a browser.', 'If we view the web page as a document (which it is), the DOM is a representation of that document that allows it to be manipulated'] }, {
                    'type': 'list',
                    'title': 'Some common DOM API use cases',
                    'data': ['window.onload - an event that fires when the document has loaded (synchronously)', 'createElement - creates the specified element', 'getElementById - returns an element with the matching id attribute', 'getElementsByClassName - returns an array of element nodes that match the class attribute', 'getElementsByTagName - returns an array of element nodes of the tag type specified']
                }]
            }, {
                'shortTitle': "Event capturing vs bubbling",
                'title': "What is the difference between event capturing and event bubbling? ",
                'content': [{ 'data': ['By default when (almost) any event happens on an element it will trigger the handlers first on that element', '.... then the elements parent handlers', '.... then the parents parent handlers', '.... and keeps going up'] }, {
                    'data': ['This process is called "Bubbling" and is quite well known in the javascript world']
                }, {
                    'data': ['Capturing on the other hand is almost the reverse process and is not as often used.', 'It refers to the "first phase" of event propogation and occurs when an event is being passed in the other direction (from parents down to children). ' + 'by default this is false, but can be set to true with a third parameter of a boolean on any event handler']
                }]
            }, {
                'shortTitle': "AJAX",
                'title': "What is AJAX and why is it important that it is asynchronous?",
                'content': [{ 'data': ['AJAX stands for Asynchronous Javascript and XML and is an XMLHttpRequest sent by the browser to communicate with a server.', 'Its benefit lies in its asynchronicity as it does not block Javascripts single thread while waiting for the response from the server, ' + 'instead it allows the page to ingest the data returned from the server without refreshing the entire page.'] }]
            }, {
                'shortTitle': "Data structures in JSON",
                'title': "Demonstrate how to express a variety of data structures in JSON",
                'content': [{
                    data: ['Javascript Object Notation or JSON is a strict, object oriented method for displaying complex data through simple rules', 'Speaking in JS terms it is made up of {} key/value objects, [] indexed arrays and primitive values such as numbers and strings.', 'For example this point is made up of the following: ']
                }, {
                    'type': 'code-snippet',
                    'data': ["rawData: {", "    title: 'Knowledge of JS',", "    points: [", "       {", "           'shortTitle': 'Data structures in JSON',", "           'title': 'Demonstrate how to express a variety of data structures in JSON',", "           'content': [...allthecontent],", "       },", "       {...}, {...}, {...},", "    ]", "}"]
                }, {
                    data: 'which is very nearly JSON, mostly it it using single rather than double quotes'
                }]
            }, {
                'shortTitle': "Singleton",
                'title': "What is a singleton and when might you use one?",
                'content': [{ data: ['A singleton is an object in an application that there is ony one of (by design). All references to the singleton reference a single instance.', 'This is a useful pattern for times when a common action needs to be taken from different places around the codebase and ideally be coordinated from one place.', 'examples of this being useful are'] }, {
                    'type': 'list',
                    data: ['connections to a database', 'a logger', 'storage of global state; language, filepath etc']
                }]
            }, {
                'shortTitle': "Factory",
                'title': "What is a Factory and when might you use one?",
                'content': [{
                    data: ['A factory function is any function that is not a class that returns an object (presumably a new object created by that function)', 'They are attractive to use as they allow you to easily create instances of objects without worrying about the "new" keyword and class complexities.', 'A reason to use functions could be something like a chat app in which you need to create a variaety of simple users.']
                }]
            }, {
                'shortTitle': "Promises",
                'title': "Why were Promises introduced to Javascript?",
                'content': ''
            }, {
                'shortTitle': "Epoch time",
                'title': "Why might you want to represent a date as the number of milliseconds from midnight on the 1st January 1970? ",
                'content': [{ data: ['Epoch, or Unix time is a standardised measurement primarily for programming that is handy as it does not obey any particular timezone and as such can be taken as ' + 'a single point of truth for dates and times as it can then be converted into any time-system required.'] }]
            }, {
                'shortTitle': "Threading",
                'title': "Why does setTimeout(fn, 0) not immediately execute?",
                'content': [{
                    data: 'When you use setTimeout it immediately removes the block of code from the current processing thread. As JS is a single-threaded language it will continue with everything ' + 'else queued on the thread and only then look for things that have been scheduled for later (at which time this would trigger)'
                }]
            }]
        }
    });
});

define('level-up/routes/ig-knowledge', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        beforeModel: function beforeModel() {
            this.transitionTo('ig-knowledge.item', 'asset-classes-and-markets');
        }
    });
});

define('level-up/routes/ig-knowledge/item', ['exports', 'level-up/helpers/massage-data', 'level-up/helpers/slug-comparison'], function (exports, _massageData, _slugComparison) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        templateName: 'route-entrypoint',
        data: null,

        init: function init() {
            this.set('data', (0, _massageData.massage)(this.rawData, 'ig-knowledge'));
        },
        model: function model(params) {
            return (0, _slugComparison.slugComparison)(this.get('data'), params.slug);
        },


        rawData: {
            title: 'Knowledge of IG',
            points: [{
                'shortTitle': 'Asset classes and markets',
                'title': "Identify which asset class a market belongs to",
                'content': null
            }, {
                'shortTitle': 'Advantages of CFDs',
                'title': "List the advantages of trading CFDs over physical shares",
                'content': [{
                    data: ['CFD (Contracts for Difference) is a way of speculating on financial markets that doesn\'t require the investor to buys and sell the underlying assets']
                }, {
                    type: 'list',
                    title: 'Benefits of CFD\'s',
                    data: ['No stamp duty', 'Access to thousands of markets', 'Utilisation of leverage can get exposure to a much larger position with minimal commitment', 'You can "Go Short" and speculate that a market will fall, and make money off that']
                }]
            }, {
                'shortTitle': 'CFD vs Spread Bet',
                'title': "Explain the difference between CFD trading and spread betting",
                'content': [{
                    data: ['The primary difference is that Spread Betting has no capital gains tax', 'Other differences include No commission on SB, however CFD has the benefits of trading the market price on shares and DMA on forex']
                }]
            }, {
                'shortTitle': 'IG Revenue',
                'title': "Demonstrate how IG make money",
                'content': null
            }, {
                'shortTitle': 'How to trade a binary',
                'title': "Demonstrate how to trade a binary (digitals)",
                'content': null
            }, {
                'shortTitle': 'Trade size factors',
                'title': "Explain the factors a client should consider when deciding the size for a trade",
                'content': null
            }, {
                'shortTitle': 'Strategies for a stop',
                'title': "Explain two different strategies for determining where to place a stop",
                'content': null
            }, {
                'shortTitle': 'Strategies for a limit',
                'title': "Explain two different strategies for determining where to place a limit",
                'content': null
            }, {
                'shortTitle': 'Orders and positions',
                'title': "Explain the difference between orders and positions",
                'content': null
            }, {
                'shortTitle': 'Alerts in a trading strategy',
                'title': "Explain how clients could use alerts to compliment their trading strategy #Novice",
                'content': null
            }, {
                'shortTitle': 'News in a trading strategy',
                'title': "Explain how clients could use news to compliment their trading strategy #Novice",
                'content': null
            }, {
                'shortTitle': 'Signals in a trading strategy',
                'title': "Explain how clients could use signals to compliment their trading strategy",
                'content': null
            }, {
                'shortTitle': 'Economic calendar in a trading strategy',
                'title': "Explain how clients could use an economic calendar to compliment their trading strategy",
                'content': null
            }, {
                'shortTitle': 'Competitors',
                'title': "List our main competitors and describe the differences in our offering",
                'content': null
            }, {
                'shortTitle': 'Mobile vs Desktop',
                'title': "Explain how the needs of our clients differ across mobile and desktop platforms",
                'content': null
            }, {
                'shortTitle': 'Managed vs Self-Directed trade',
                'title': "Explain the difference between managed and self directed trading",
                'content': null
            }, {
                'shortTitle': 'Share dealing vs smart portfolios',
                'title': "Explain the difference between share dealing and smart portfolios",
                'content': null
            }, {
                'shortTitle': 'Smart Portfolio... "safer"',
                'title': "Explain why a Smart Portfolio is considered a 'safer' instrument",
                'content': [{
                    data: ['Smart portfolios are auto-rebalancing portfolios that react "smartly" to market changes. They are safer as they contain ' + 'diversified investments (suitable to your risk profile) meaning that it\'s not an "all eggs in one basket" situation. this  ' + 'paired with automated procedures mean it is far lower risk across the board, and reacts quickly to mitigate any loss.']
                }]
            }, {
                'shortTitle': 'Robo-advice competitors',
                'title': "Name 3 key competitors in the robo-advice industry",
                'content': [{
                    data: ['"robo-advisors are simply online wealth managers that invest their clients’ money in mainstream investments with a goal of generating attractive risk-adjusted returns over time."']
                }, {
                    type: 'list',
                    data: ['Nutmeg', 'Wealthify', 'Scalable Capital']
                }, {
                    type: 'list',
                    title: 'IG\'s Edge',
                    data: ['24-hour support from a client services team', 'Asset-allocation models from BlackRock']
                }]
            }, {
                'shortTitle': 'IG & BlackRock',
                'title': "Explain IG's relationship with BlackRock",
                'content': [{
                    data: ['This partnership is aimed exclusively at IG\'s Smart Portfolio offerring.', 'Blackrock constructs asset allocation models that are tailored to 5 distinct risk profiles', 'They provide insight into over $17 trillion of assets and is the worlds largest asset management firm.']
                }]
            }, {
                'shortTitle': 'Rebalance',
                'title': "Explain what a rebalance is and how often IG does it",
                'content': null
            }, {
                'shortTitle': 'Quote vs on exchange',
                'title': "Explain the difference of at quote vs on exchange in share trading",
                'content': [{ data: ['"On Exchange" means the price at the point there is a trade directly with an order book (Direct Market Access or DMA)', '"At Quote" on the other hand means it is a price given by a range of market makers (this price then expires at IG in 15 seconds)'] }]
            }, {
                'shortTitle': 'Plot technical indicators',
                'title': "Demonstrate how to calculate two different technical indicators and plot them on a chart",
                'content': null
            }, {
                'shortTitle': 'Fundamental analysis how to',
                'title': "Demonstrate how a client could perform fundamental analysis on a market",
                'content': [{
                    data: ['Fundamental analysis involves the observing and making predictions on market price based on a company\'s past and present statistics.', 'These could include company value, profit margin, return on equity, future growth etc.', 'This is the method used by Warren Buffet']
                }]
            }]
        }
    });
});

define('level-up/routes/index', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        beforeModel: function beforeModel() {
            this.transitionTo('general-js');
        }
    });
});

define('level-up/routes/testing', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        beforeModel: function beforeModel() {
            this.transitionTo('testing.item', 'unit');
        }
    });
});

define('level-up/routes/testing/item', ['exports', 'level-up/helpers/massage-data', 'level-up/helpers/slug-comparison'], function (exports, _massageData, _slugComparison) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        templateName: 'route-entrypoint',
        data: null,

        init: function init() {
            this.set('data', (0, _massageData.massage)(this.rawData, 'testing'));
        },
        model: function model(params) {
            return (0, _slugComparison.slugComparison)(this.get('data'), params.slug);
        },


        rawData: {
            title: 'Testing',
            points: [{
                'shortTitle': 'Unit',
                'title': "Identify scenarios appropriate for unit testing",
                'content': null
            }, {
                'shortTitle': 'Integration',
                'title': "Identify scenarios appropriate for integration testing",
                'content': null
            }, {
                'shortTitle': 'Acceptance',
                'title': "Identify scenarios appropriate for acceptance testing",
                'content': null
            }, {
                'shortTitle': 'Sinon DRY tests',
                'title': "Demonstrate using Sinon to write DRY tests",
                'content': null
            }, {
                'shortTitle': 'Cross browser tools',
                'title': "List tools and approaches that can help with cross browser testing",
                'content': null
            }, {
                'shortTitle': 'TDD',
                'title': "Identify scenarios appropriate for a TDD approach",
                'content': null
            }, {
                'shortTitle': 'Assertion Library',
                'title': "Explain the purpose of an assertion library",
                'content': null
            }, {
                'shortTitle': 'Testing vs Asyc',
                'title': "Explain how testing frameworks facilitate the testing of asynchronous code",
                'content': null
            }]
        }
    });
});

define('level-up/routes/tooling', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        beforeModel: function beforeModel() {
            this.transitionTo('tooling.item', 'cloneforkcreate');
        }
    });
});

define('level-up/routes/tooling/item', ['exports', 'level-up/helpers/massage-data', 'level-up/helpers/slug-comparison'], function (exports, _massageData, _slugComparison) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        templateName: 'route-entrypoint',
        data: null,

        init: function init() {
            this.set('data', (0, _massageData.massage)(this.rawData, 'tooling'));
        },
        model: function model(params) {
            return (0, _slugComparison.slugComparison)(this.get('data'), params.slug);
        },


        rawData: {
            title: 'Testing',
            points: [{
                'shortTitle': 'Clone/fork/create',
                'title': "[Git] Clone/fork/create repositories and raise pull requests",
                'content': null
            }, {
                'shortTitle': 'Create/switch/delete/pull/push',
                'title': "[Git] Create/switch/delete/pull/push branches ",
                'content': null
            }, {
                'shortTitle': 'Merge conflicts',
                'title': "[Git] Resolve non-trivial merge conflicts ",
                'content': null
            }, {
                'shortTitle': 'merge/rebase/cherry-pick/revert',
                'title': "[Git] Use merge/rebase/cherry-pick/revert strategies appropriately",
                'content': null
            }, {
                'shortTitle': 'Local http server',
                'title': "[Node] Create a local http server",
                'content': null
            }, {
                'shortTitle': 'Run test suites',
                'title': "[Node] Run test suites from the terminal  ",
                'content': null
            }, {
                'shortTitle': 'NPM modules',
                'title': "[NPM] Use NPM modules to package and publish re-usable code",
                'content': null
            }, {
                'shortTitle': 'NVN',
                'title': "[NPM] Use NVN to manage local NPM versions",
                'content': null
            }, {
                'shortTitle': 'Build plans with watch',
                'title': "[CI] Configure a build plan that runs when a branch is updated and runs tests  ",
                'content': null
            }, {
                'shortTitle': 'Build plan that deploys',
                'title': "[CI] Configure a build plan that deploys static resources if the build succeeds  ",
                'content': null
            }, {
                'shortTitle': 'Build that fails on Lint',
                'title': "[CI] Configure a build to fail if Linting fails  ",
                'content': null
            }, {
                'shortTitle': 'Build that fails on Coverage',
                'title': "[CI] Configure a build to fail if Coverage decreases  ",
                'content': null
            }, {
                'shortTitle': 'Parallellization',
                'title': "[CI] Appropriately configure operations that can run in parallel  ",
                'content': null
            }, {
                'shortTitle': 'Linting Config',
                'title': "[Linter] Appropriately configure Linting for a project",
                'content': null
            }, {
                'shortTitle': 'Lint Rules',
                'title': "[Linter] Write your own Lint rules  ",
                'content': null
            }, {
                'shortTitle': 'Coverage Report',
                'title': "[Coverage] Generate a coverage report for a project",
                'content': null
            }, {
                'shortTitle': 'Locate gaps in Coverage',
                'title': "[Coverage] Locate gaps in coverage",
                'content': null
            }, {
                'shortTitle': 'Address Coverage Gaps',
                'title': "[Coverage] Appropriately address gaps in coverage",
                'content': null
            }]
        }
    });
});

define('level-up/routes/web-dev', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        beforeModel: function beforeModel() {
            this.transitionTo('web-dev.item', 'well-structured-html');
        }
    });
});

define('level-up/routes/web-dev/item', ['exports', 'level-up/helpers/massage-data', 'level-up/helpers/slug-comparison'], function (exports, _massageData, _slugComparison) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        templateName: 'route-entrypoint',
        data: null,

        init: function init() {
            this.set('data', (0, _massageData.massage)(this.rawData, 'web-dev'));
        },
        model: function model(params) {
            return (0, _slugComparison.slugComparison)(this.get('data'), params.slug);
        },


        rawData: {
            title: 'General Web Dev',
            points: [{
                'shortTitle': 'Well structured HTML',
                'title': "Describe the qualities of a well structured HTML document",
                'content': [{
                    'data': ['HTML is the skeleton on which we hang all the other parts of our web developer code.']
                }, {
                    'type': 'code-snippet',
                    'data': ['<!DOCTYPE> <!-- Always supply a doctype -->', '<html>', '   <head>', '       <title>Make your document title meaningful but succinct</title>', '       <meta name="description" content="Make your meta tags descriptive and meaningful for the crawlers and try not to spam it />', '   </head>', '   <body>', '       <header class="header"> <!-- Use appropriate tags for appropriate sections -->', '           <h1>Have a nice clear hierarchy that only includes only one H1</h1>', '           <h2>Use headings tags appropriately within a hierarchy rather than just for styling</h2>', '       </header>', '       <div class="side-bar" id="js-side-bar"></div> <!-- Use classes for style and ID for JS -->', '       <div class="content">', '           <p class="content__text"></p> <!-- Ideally some sort of consistant naming convention for classes, ie BEM -->', '           <img href="some-url.png" alt="my awesome image"> <!-- Always supply an alt for image accessibility -->', '       </div> <!-- Always close your tags in the correct order -->', '       <footer class="footer"> <!-- Do not style on tag type, style on class -->', '       </footer>', '   </body>', '</html>']
                }, {
                    'type': 'list',
                    'title': 'Other rules include:',
                    'data': ['Do not excessively comment, markup should be easy to follow', 'Write constently in whatever style you choose']
                }]
            }, {
                'shortTitle': 'Accessibility',
                'title': "List a number of common accessibility features of HTML",
                'content': [{
                    'type': 'list',
                    'data': [{ html: true, content: 'User interactable HTML elements such as <code><button></code> and <input> allow for native keyboard accessibility' }, { html: true, content: 'General site structure, <h1> followed by <p> blocks and usage of <ol>s and <ul>s  ' }, { html: true, content: 'Appropriate use of other HTML tags, <article>, <header>, <footer> etc' }, 'the "alt" attribute on img tags and "label" for inputs and forms']
                }]
            }, {
                'shortTitle': 'CSS',
                'title': "Demonstrate a thorough knowledge of using CSS to apply styles and layout to HTML",
                'content': null
            }, {
                'shortTitle': 'Flexbox',
                'title': "Use CSS Flexbox to solve a variety of common layout problems without JavaScript",
                'content': [{
                    'type': 'list',
                    'data': ['<a href="https://git.iggroup.local/projects/WTP/repos/platform/pull-requests/2363/overview" target="_blank">Not enough space for feed titles 🔗</a>']
                }]
            }, {
                'shortTitle': 'CSS pre-processor',
                'title': "Explain the benefits of using a CSS pre-processor",
                'content': null
            }, {
                'shortTitle': 'BEM',
                'title': "Demonstrate advantages of using BEM to structure CSS",
                'content': [{
                    'data': ['BEM stands for Block, Element, Modifier and is beneficial for code as it means your stylesheet nesting should in theory ' + 'be limited to 2-3 levels deep. It makes styling far more modular as each "Block" has its own explicit styles which can be ' + 'picked up and dropped into other places in the code and be repeated without concern', 'It also greatly assists in the readability of the code as each segment is explicitly defined and ']
                }, {
                    'type': 'code-snippet',
                    'data': ['// for this html', '<div class="face">', '   <div class="face__eyes">', '   </div>', '   <div class="face__nose">', '   </div>', '   <div class="face__mouth">', '      <div class="face__tooth"></div>', '      <div class="face__tooth"></div>', '      <div class="face__tooth--cavity"></div>', '      <div class="face__tooth"></div>', '   </div>', '</div>']
                }, {
                    'type': 'code-snippet',
                    'data': ['// CSS', '.face {', '   background-color: undead-green;', '}', '.face .face__eyes {', '   background-color: red;', '   color: scarlet;', '}', '.face .face__mouth {', '   ...', '}', '.face .face__mouth .face__tooth {', '   ...', '}', '.face .face__mouth .face__tooth--cavity {', '   ...', '}']
                }, {
                    'type': 'code-snippet',
                    'data': ['// BEM', '.face {', '   &__eyes {}', '   &__nose {}', '   &__mouth {}', '   &__tooth {', '       &--cavity {}', '   }', '}']
                }]
            }]
        }
    });
});

define('level-up/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});

define("level-up/templates/404", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Z44GYKDa", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"splash-page\"],[7],[0,\"\\n    \"],[6,\"h1\"],[7],[0,\"Welcome\"],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"At IG, we want to support our engineers to be the best in the industry.\"],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"In this section, you'll find a collection of competency checklists covering the core technologies and methodologies we use. These lists can be referenced when setting goals with your manager and help track early progress. It is expected that by the end of the probation period, engineers will be able to demonstrate at least a basic working knowledge of all core topics.\"],[8],[0,\"\\n    \"],[6,\"p\"],[7],[6,\"a\"],[9,\"href\",\"https://wiki.iggroup.local/display/~uttings/Training\"],[9,\"class\",\"href\"],[7],[0,\"Wiki links\"],[8],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[1,[18,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "level-up/templates/404.hbs" } });
});

define("level-up/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "xNqVDYtG", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"mdl-layout__container\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"docs-layout mdl-layout mdl-js-layout is-upgraded\"],[7],[0,\"\\n        \"],[1,[18,\"outlet\"],false],[0,\"\\n    \"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "level-up/templates/application.hbs" } });
});

define("level-up/templates/components/point-content", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "n/U+No9K", "block": "{\"symbols\":[\"block\"],\"statements\":[[0,\"\\n\"],[6,\"h2\"],[9,\"class\",\"point-content__title\"],[7],[1,[20,[\"content\",\"title\"]],false],[8],[0,\"\\n\\n\"],[4,\"if\",[[19,0,[\"content\"]]],null,{\"statements\":[[4,\"each\",[[19,0,[\"content\",\"content\"]]],null,{\"statements\":[[4,\"if\",[[19,1,[\"type\"]]],null,{\"statements\":[[0,\"        \"],[1,[25,\"component\",[[25,\"concat\",[\"primitive/\",[19,1,[\"type\"]],\"-component\"],null]],[[\"block\"],[[19,1,[]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[1,[25,\"component\",[[25,\"concat\",[\"primitive/text-component\"],null]],[[\"block\"],[[19,1,[]]]]],false],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[1]},null]],\"parameters\":[]},{\"statements\":[[6,\"p\"],[7],[0,\"Still working on this one!\"],[8],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "level-up/templates/components/point-content.hbs" } });
});

define("level-up/templates/components/primary-nav", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "RqkOTFgn", "block": "{\"symbols\":[\"navLink\"],\"statements\":[[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"mdl-layout mdl-layout--fixed-header\"],[7],[0,\"\\n    \"],[6,\"header\"],[9,\"class\",\"docs-layout-header mdl-layout__header is-casting-shadow\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"mdl-layout__header-row\"],[7],[0,\"\\n            \"],[4,\"link-to\",[\"index\"],[[\"class\"],[\"mdl-layout-title header__title\"]],{\"statements\":[[0,\"leVelUP\"]],\"parameters\":[]},null],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"mdl-layout-spacer\"],[7],[8],[0,\"\\n            \"],[6,\"span\"],[9,\"class\",\"navbar-text\"],[7],[0,\"\\n                Steve Utting\\n            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"mdl-tabs mdl-js-tabs mdl-js-ripple-effect\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"mdl-tabs__tab-bar\"],[7],[0,\"\\n\"],[4,\"each\",[[19,0,[\"navData\"]]],null,{\"statements\":[[0,\"                \"],[4,\"link-to\",[[25,\"concat\",[[19,1,[\"route\"]],\".item\"],null],[19,1,[\"slug\"]]],[[\"class\"],[[19,1,[\"classes\"]]]],{\"statements\":[[1,[19,1,[\"FN\"]],false]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "level-up/templates/components/primary-nav.hbs" } });
});

define("level-up/templates/components/primitive/basic-image-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5oKuuQzi", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1]],\"hasEval\":false}", "meta": { "moduleName": "level-up/templates/components/primitive/basic-image-component.hbs" } });
});

define("level-up/templates/components/primitive/code-snippet-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "om6KDQ2D", "block": "{\"symbols\":[\"line\"],\"statements\":[[6,\"pre\"],[9,\"class\",\"code-snippet\"],[7],[0,\"\\n\"],[6,\"code\"],[9,\"class\",\"card code-snippet__code\"],[7],[0,\"\\n\"],[4,\"each\",[[19,0,[\"block\",\"data\"]]],null,{\"statements\":[[1,[19,1,[]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "level-up/templates/components/primitive/code-snippet-component.hbs" } });
});

define("level-up/templates/components/primitive/list-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Dez8Wt/q", "block": "{\"symbols\":[\"listItem\"],\"statements\":[[4,\"if\",[[19,0,[\"block\",\"title\"]]],null,{\"statements\":[[6,\"h4\"],[9,\"class\",\"list-component__title\"],[7],[1,[20,[\"block\",\"title\"]],false],[8],[0,\"\\n\"]],\"parameters\":[]},null],[6,\"ul\"],[9,\"class\",\"list-component__list\"],[7],[0,\"\\n\"],[4,\"each\",[[19,0,[\"block\",\"data\"]]],null,{\"statements\":[[0,\"    \"],[6,\"li\"],[9,\"class\",\"list-component__item\"],[7],[0,\"\\n\"],[4,\"if\",[[19,1,[\"html\"]]],null,{\"statements\":[[0,\"        \"],[1,[19,1,[\"content\"]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[1,[19,1,[]],true],[0,\"\\n\"]],\"parameters\":[]}],[0,\"    \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[8]],\"hasEval\":false}", "meta": { "moduleName": "level-up/templates/components/primitive/list-component.hbs" } });
});

define("level-up/templates/components/primitive/text-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "8x4t7w5D", "block": "{\"symbols\":[\"chunk\"],\"statements\":[[0,\"\\n\"],[4,\"if\",[[19,0,[\"block\",\"title\"]]],null,{\"statements\":[[6,\"span\"],[9,\"class\",\"text-component__divider\"],[7],[8],[0,\"\\n\"],[6,\"h4\"],[9,\"class\",\"text-component__title\"],[7],[1,[20,[\"block\",\"title\"]],false],[8],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"each\",[[19,0,[\"block\",\"data\"]]],null,{\"statements\":[[0,\"    \"],[6,\"p\"],[9,\"class\",\"text-component__text-block\"],[7],[1,[19,1,[]],false],[8],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "level-up/templates/components/primitive/text-component.hbs" } });
});

define("level-up/templates/components/section-container", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "tT0S/Mj9", "block": "{\"symbols\":[],\"statements\":[],\"hasEval\":false}", "meta": { "moduleName": "level-up/templates/components/section-container.hbs" } });
});

define("level-up/templates/components/side-bar", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "SBVRgnlS", "block": "{\"symbols\":[\"point\",\"index\"],\"statements\":[[6,\"div\"],[9,\"class\",\"mdl-layout__drawer is-visible\"],[7],[0,\"\\n    \"],[6,\"nav\"],[9,\"class\",\"side-bar__nav\"],[7],[0,\"\\n        \"],[6,\"span\"],[9,\"class\",\"side-bar__title\"],[7],[1,[18,\"title\"],false],[8],[0,\"\\n\\n\"],[4,\"each\",[[19,0,[\"points\"]]],null,{\"statements\":[[4,\"if\",[[19,1,[\"content\"]]],null,{\"statements\":[[4,\"if\",[[19,1,[\"url\"]]],null,{\"statements\":[[0,\"            \"],[6,\"a\"],[10,\"href\",[19,1,[\"url\"]],null],[9,\"target\",\"_blank\"],[9,\"class\",\"mdl-button mdl-js-button mdl-button--primary\"],[7],[0,\"\\n                \"],[1,[19,1,[\"shortTitle\"]],false],[0,\" 🔗\\n            \"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[4,\"link-to\",[[25,\"concat\",[[19,1,[\"cat\"]],\".item\"],null],[19,1,[\"slug\"]]],[[\"class\"],[\"mdl-button mdl-js-button mdl-button--primary\"]],{\"statements\":[[1,[19,1,[\"shortTitle\"]],false]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null]],\"parameters\":[1,2]},null],[0,\"    \"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "level-up/templates/components/side-bar.hbs" } });
});

define("level-up/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "YUUvT2oi", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "level-up/templates/index.hbs" } });
});

define("level-up/templates/route-entrypoint", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "3C4PZrVa", "block": "{\"symbols\":[],\"statements\":[[1,[25,\"primary-nav\",null,[[\"navData\"],[[19,0,[\"model\",\"navData\"]]]]],false],[0,\"\\n\\n\"],[6,\"div\"],[9,\"class\",\"content mdl-grid\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"mdl-cell mdl-cell--3-col\"],[7],[0,\"\\n        \"],[1,[25,\"side-bar\",null,[[\"title\",\"points\"],[[19,0,[\"title\"]],[19,0,[\"model\",\"data\"]]]]],false],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"mdl-cell mdl-cell--9-col\"],[7],[0,\"\\n        \"],[1,[25,\"point-content\",null,[[\"content\"],[[19,0,[\"model\",\"activeContent\"]]]]],false],[0,\"\\n    \"],[8],[0,\"\\n    \"],[1,[18,\"outlet\"],false],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "level-up/templates/route-entrypoint.hbs" } });
});



define('level-up/config/environment', ['ember'], function(Ember) {
  var prefix = 'level-up';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("level-up/app")["default"].create({"name":"level-up","version":"0.0.0+c2cbb134"});
}
//# sourceMappingURL=level-up.map
