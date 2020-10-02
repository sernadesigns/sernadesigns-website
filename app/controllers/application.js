import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';
import { projects, socials } from 'serna-designs/utils/data';

export default class ApplicationController extends Controller {
	@service
	media;

	constructor() {
		super(...arguments);
		this.projects = projects;
		this.socials = socials;
	}

	@computed
	get copyrightText() {
		return htmlSafe(`&copy; 2011-${new Date().getFullYear()} SernaDesigns Web Development`);
	}

	@computed('media.isDesktop')
	get leftToBottom() {
		return this.media.isDesktop ? 'bottom' : 'left';
	}

	@computed('media.isDesktop')
	get rightToBottom() {
		return this.media.isDesktop ? 'bottom' : 'right';
	}
}
