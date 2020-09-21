import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | application', function(hooks) {
  setupTest(hooks);

  test('it computes leftToBottom', function(assert) {
    const controller = this.owner.lookup('controller:application');
		
		controller.set('media.isDesktop', false);
		assert.equal(controller.leftToBottom, 'left');

		controller.set('media.isDesktop', true);
		assert.equal(controller.leftToBottom, 'bottom');
	});

	test('it computes rightToBottom', function(assert) {
    const controller = this.owner.lookup('controller:application');
		
		controller.set('media.isDesktop', false);
		assert.equal(controller.rightToBottom, 'right');

		controller.set('media.isDesktop', true);
		assert.equal(controller.rightToBottom, 'bottom');
	});
});
