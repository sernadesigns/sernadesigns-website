import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
	media: service(),

	leftToBottom: computed('media', function() {
		return this.media.isDesktop ? 'bottom' : 'left';
	}),
	rightToBottom: computed('media', function() {
		return this.media.isDesktop ? 'bottom' : 'right';
	})
});
