'use strict';

define('level-up/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/point-content.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/point-content.js should pass ESLint\n\n');
  });

  QUnit.test('components/primary-nav.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/primary-nav.js should pass ESLint\n\n');
  });

  QUnit.test('components/primitive/basic-image.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/primitive/basic-image.js should pass ESLint\n\n');
  });

  QUnit.test('components/primitive/code-snippet.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/primitive/code-snippet.js should pass ESLint\n\n');
  });

  QUnit.test('components/primitive/list-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/primitive/list-component.js should pass ESLint\n\n');
  });

  QUnit.test('components/section-container.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/section-container.js should pass ESLint\n\n');
  });

  QUnit.test('components/side-bar.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/side-bar.js should pass ESLint\n\n');
  });

  QUnit.test('components/text-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/text-component.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/section-container.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/section-container.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/massage-data.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/massage-data.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/render-content.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/render-content.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/slug-comparison.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/slug-comparison.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/text-helpers.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/text-helpers.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/404.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/404.js should pass ESLint\n\n');
  });

  QUnit.test('routes/ember.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/ember.js should pass ESLint\n\n');
  });

  QUnit.test('routes/ember/item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/ember/item.js should pass ESLint\n\n');
  });

  QUnit.test('routes/general-js.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/general-js.js should pass ESLint\n\n');
  });

  QUnit.test('routes/general-js/item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/general-js/item.js should pass ESLint\n\n');
  });

  QUnit.test('routes/ig-knowledge.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/ig-knowledge.js should pass ESLint\n\n');
  });

  QUnit.test('routes/ig-knowledge/item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/ig-knowledge/item.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/testing.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/testing.js should pass ESLint\n\n');
  });

  QUnit.test('routes/testing/item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/testing/item.js should pass ESLint\n\n');
  });

  QUnit.test('routes/tooling.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/tooling.js should pass ESLint\n\n');
  });

  QUnit.test('routes/tooling/item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/tooling/item.js should pass ESLint\n\n');
  });

  QUnit.test('routes/web-dev.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/web-dev.js should pass ESLint\n\n');
  });

  QUnit.test('routes/web-dev/item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/web-dev/item.js should pass ESLint\n\n');
  });
});
define('level-up/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});

define('level-up/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'level-up/tests/helpers/start-app', 'level-up/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var resolve = Ember.RSVP.resolve;
});

define('level-up/tests/helpers/resolver', ['exports', 'level-up/resolver', 'level-up/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});

define('level-up/tests/helpers/start-app', ['exports', 'level-up/app', 'level-up/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});

define('level-up/tests/integration/components/point-content-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('point-content', 'Integration | Component | point content', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "QJ+PdQoS",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"point-content\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "wp7Pz/UJ",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"point-content\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});

define('level-up/tests/integration/components/primary-nav-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('primary-nav', 'Integration | Component | primary nav', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "CI3jUXX9",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"primary-nav\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "DQfx6uZW",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"primary-nav\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});

define('level-up/tests/integration/components/primitive/basic-image-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('primitive/basic-image', 'Integration | Component | primitive/basic image', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "yhqTphvX",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"primitive/basic-image\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "MAKh6NFM",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"primitive/basic-image\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});

define('level-up/tests/integration/components/primitive/code-snippet-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('primitive/code-snippet', 'Integration | Component | primitive/code snippet', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "l8gYZys1",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"primitive/code-snippet\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "0H2yLaCy",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"primitive/code-snippet\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});

define('level-up/tests/integration/components/primitive/list-component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('primitive/list-component', 'Integration | Component | primitive/list component', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "RHkIqsoj",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"primitive/list-component\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "F/yV6qoo",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"primitive/list-component\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});

define('level-up/tests/integration/components/section-container-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('section-container', 'Integration | Component | section container', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "8pMahYIU",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"section-container\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "IDbQzdRF",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"section-container\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});

define('level-up/tests/integration/components/side-bar-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('side-bar', 'Integration | Component | side bar', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "wttvN76V",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"side-bar\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "gnb6tkZq",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"side-bar\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});

define('level-up/tests/integration/components/text-component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('text-component', 'Integration | Component | text component', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "XBGjRIUv",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"text-component\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "WQTtbw2M",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"text-component\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});

define('level-up/tests/integration/helpers/content-type-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('content-type', 'helper:content-type', {
    integration: true
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it renders', function (assert) {
    this.set('inputValue', '1234');

    this.render(Ember.HTMLBars.template({
      "id": "Z0iPQm3I",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"content-type\",[[19,0,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '1234');
  });
});

define('level-up/tests/integration/helpers/markdown-helper-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('markdown-helper', 'helper:markdown-helper', {
    integration: true
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it renders', function (assert) {
    this.set('inputValue', '1234');

    this.render(Ember.HTMLBars.template({
      "id": "yfLmVviJ",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"markdown-helper\",[[19,0,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '1234');
  });
});

define('level-up/tests/integration/helpers/massage-data-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('massage-data', 'helper:massage-data', {
    integration: true
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it renders', function (assert) {
    this.set('inputValue', '1234');

    this.render(Ember.HTMLBars.template({
      "id": "R4bvJ0mJ",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"massage-data\",[[19,0,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '1234');
  });
});

define('level-up/tests/integration/helpers/render-content-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('render-content', 'helper:render-content', {
    integration: true
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it renders', function (assert) {
    this.set('inputValue', '1234');

    this.render(Ember.HTMLBars.template({
      "id": "bTszQ1/v",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"render-content\",[[19,0,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '1234');
  });
});

define('level-up/tests/integration/helpers/slug-comparison-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('slug-comparison', 'helper:slug-comparison', {
    integration: true
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it renders', function (assert) {
    this.set('inputValue', '1234');

    this.render(Ember.HTMLBars.template({
      "id": "9pccQEab",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"slug-comparison\",[[19,0,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '1234');
  });
});

define('level-up/tests/integration/helpers/text-helpers-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('text-helpers', 'helper:text-helpers', {
    integration: true
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it renders', function (assert) {
    this.set('inputValue', '1234');

    this.render(Ember.HTMLBars.template({
      "id": "1ovEyX9W",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"text-helpers\",[[19,0,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '1234');
  });
});

define('level-up/tests/test-helper', ['level-up/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});

define('level-up/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/point-content-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/point-content-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/primary-nav-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/primary-nav-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/primitive/basic-image-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/primitive/basic-image-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/primitive/code-snippet-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/primitive/code-snippet-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/primitive/list-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/primitive/list-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/section-container-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/section-container-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/side-bar-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/side-bar-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/text-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/text-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/content-type-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/content-type-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/markdown-helper-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/markdown-helper-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/massage-data-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/massage-data-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/render-content-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/render-content-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/slug-comparison-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/slug-comparison-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/text-helpers-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/text-helpers-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/section-container-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/section-container-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/ig-knowledge-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/ig-knowledge-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/404-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/404-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/ember-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/ember-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/ember/item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/ember/item-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/general-js-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/general-js-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/general-js/item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/general-js/item-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/ig-knowledge-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/ig-knowledge-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/ig-knowledge/item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/ig-knowledge/item-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/js-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/js-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/skills-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/skills-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/testing-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/testing-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/testing/item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/testing/item-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/tooling-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/tooling-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/tooling/item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/tooling/item-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/web-dev-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/web-dev-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/web-dev/item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/web-dev/item-test.js should pass ESLint\n\n');
  });
});
define('level-up/tests/unit/controllers/section-container-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:section-container', 'Unit | Controller | section container', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});

define('level-up/tests/unit/models/ig-knowledge-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('ig-knowledge', 'Unit | Model | ig knowledge', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});

define('level-up/tests/unit/routes/404-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:404', 'Unit | Route | 404', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});

define('level-up/tests/unit/routes/ember-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:ember', 'Unit | Route | ember', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});

define('level-up/tests/unit/routes/ember/item-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:ember/item', 'Unit | Route | ember/item', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});

define('level-up/tests/unit/routes/general-js-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:general-js', 'Unit | Route | general js', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});

define('level-up/tests/unit/routes/general-js/item-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:general-js/item', 'Unit | Route | general js/item', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});

define('level-up/tests/unit/routes/ig-knowledge-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:ig-knowledge', 'Unit | Route | ig knowledge', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});

define('level-up/tests/unit/routes/ig-knowledge/item-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:ig-knowledge/item', 'Unit | Route | ig knowledge/item', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});

define('level-up/tests/unit/routes/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});

define('level-up/tests/unit/routes/js-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:js', 'Unit | Route | js', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});

define('level-up/tests/unit/routes/skills-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:skills', 'Unit | Route | skills', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});

define('level-up/tests/unit/routes/testing-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:testing', 'Unit | Route | testing', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});

define('level-up/tests/unit/routes/testing/item-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:testing/item', 'Unit | Route | testing/item', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});

define('level-up/tests/unit/routes/tooling-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:tooling', 'Unit | Route | tooling', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});

define('level-up/tests/unit/routes/tooling/item-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:tooling/item', 'Unit | Route | tooling/item', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});

define('level-up/tests/unit/routes/web-dev-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:web-dev', 'Unit | Route | web dev', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});

define('level-up/tests/unit/routes/web-dev/item-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:web-dev/item', 'Unit | Route | web dev/item', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});

require('level-up/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
