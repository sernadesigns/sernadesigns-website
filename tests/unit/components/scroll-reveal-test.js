import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Component | scroll-reveal', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let component = this.owner.factoryFor('component:scroll-reveal').create();
    assert.ok(component);
	});
	
	test('_setDefaults() method works', function(assert) {
		let component = this.owner.factoryFor('component:scroll-reveal').create();
		
		assert.equal(component.get('options.delay'), undefined, 'The delay option should be undefined on the options object before _setDefaults() has run');
		
		component._setDefaults();
		assert.equal(component.get('options.delay'), 0, 'The delay option should be set after _setDefaults() has run');

		component.set('delay', 5);
		component._setDefaults();
		assert.equal(component.get('options.delay'), 5, 'The delay option should be overridden if the component attr overrides the option');
	});

	test('didReceiveAttrs() triggers _setDefaults()', function(assert) {
		let component = this.owner.factoryFor('component:scroll-reveal').create();
		
		assert.equal(component.get('options.duration'), undefined, 'The duration option should be undefined on the options object before didReceiveAttrs() triggers _setDefaults()');
		
		component.didReceiveAttrs();
		assert.equal(component.get('options.duration'), 600, 'The duration option should be set after didReceiveAttrs() triggers _setDefaults()');

		component.set('duration', 900);
		component.didReceiveAttrs();
		assert.equal(component.get('options.duration'), 900, 'The duration option should be overridden if the component attr overrides the option');
	});

	test('rotate computed property works', function(assert) {
		let component = this.owner.factoryFor('component:scroll-reveal').create();

		assert.deepEqual(
			component.get('rotate'), 
			{ x: 0, y: 0, z: 0 },
			'The default rotate values are returned when no overriding values are passed into the component'
		);

		component.setProperties({
			rotateX: 10,
			rotateZ: 20 
		});
		assert.deepEqual(
			component.get('rotate'), 
			{ x: 10, y: 0, z: 20 },
			'The rotate values are modified when overriding values are passed into the component'
		);
	});

	test('viewOffset computed property workds', function(assert) {
		let component = this.owner.factoryFor('component:scroll-reveal').create();
		
		assert.deepEqual(
			component.get('viewOffset'), 
			{ top: 0, right: 0, bottom: 0, left: 0 },
			'The default viewOffset values are returned when no overriding values are passed into the component'
		);

		component.setProperties({
			viewOffsetRight: 10,
			viewOffsetLeft: 20 
		});
		assert.deepEqual(
			component.get('viewOffset'), 
			{ top: 0, right: 10, bottom: 0, left: 20 },
			'The viewOffset values are modified when overriding values are passed into the component'
		);
	})
});
