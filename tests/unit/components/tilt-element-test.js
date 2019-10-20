import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Component | tilt-element', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let component = this.owner.factoryFor('component:tilt-element').create();
    assert.ok(component);
	});
	
	test('_setDefaults() method works', function(assert) {
		let component = this.owner.factoryFor('component:tilt-element').create();
		
		assert.equal(component.get('options.reverse'), undefined, 'The reverse option should be undefined on the options object before _setDefaults() has run');
		
		component._setDefaults();
		assert.equal(component.get('options.reverse'), false, 'The reverse option should be set after _setDefaults() has run');

		component.set('reverse', true);
		component._setDefaults();
		assert.equal(component.get('options.reverse'), true, 'The reverse option should be overridden if the component attr overrides the option');
	});

	test('didReceiveAttrs() triggers _setDefaults()', function(assert) {
		let component = this.owner.factoryFor('component:tilt-element').create();
		
		assert.equal(component.get('options.max'), undefined, 'The max option should be undefined on the options object before didReceiveAttrs() triggers _setDefaults()');
		
		component.didReceiveAttrs();
		assert.equal(component.get('options.max'), 35, 'The max option should be set after didReceiveAttrs() triggers _setDefaults()');

		component.set('max', 42);
		component.didReceiveAttrs();
		assert.equal(component.get('options.max'), 42, 'The max option should be overridden if the component attr overrides the option');
	});
});
