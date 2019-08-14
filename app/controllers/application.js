import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
	copyrightYear: computed('startYear', function () {
		const currentYear = new Date().getFullYear();
		const startYear = this.startYear || currentYear;

		return (startYear !== currentYear) ? `${startYear}-${currentYear}` : currentYear;
	})
});
