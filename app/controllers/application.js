import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
    @service
    media;

    @computed('media.isDesktop')
    get leftToBottom() {
		return this.media.isDesktop ? 'bottom' : 'left';
	}

    @computed('media.isDesktop')
    get rightToBottom() {
		return this.media.isDesktop ? 'bottom' : 'right';
	}
}
