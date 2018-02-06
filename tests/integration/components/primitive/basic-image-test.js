import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('primitive/basic-image', 'Integration | Component | primitive/basic image', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{primitive/basic-image}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#primitive/basic-image}}
      template block text
    {{/primitive/basic-image}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
