import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('primitive/list-component', 'Integration | Component | primitive/list component', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{primitive/list-component}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#primitive/list-component}}
      template block text
    {{/primitive/list-component}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
