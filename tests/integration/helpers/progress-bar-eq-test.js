
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('progress-bar-eq', 'helper:progress-bar-eq', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{progress-bar-eq inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

