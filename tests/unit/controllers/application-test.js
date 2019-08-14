import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | application', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:application');
    assert.ok(controller);
	});
	
	test('it computes copyright year correctly', function(assert) {
		let controller = this.owner.lookup('controller:application');
		
		const currentYear = new Date().getFullYear();

		assert.equal(controller.copyrightYear, currentYear, 'If no startYear is provided, the copyright year should be the current year');

		let startYear = currentYear - 2;
		controller.set('startYear', startYear);

		assert.equal(controller.copyrightYear, `${startYear}-${currentYear}`, 'If startYear is provided, the copyright year will be in the format YYYY-YYYY');
	});
});
