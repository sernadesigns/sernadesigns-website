import classic from 'ember-classic-decorator';
import Component from '@glimmer/component';
import { action } from '@ember/object';
import jump from 'jump.js';

@classic
export default class JumpScroll extends Component {
	@action
  handleClick(e) {
		e.preventDefault();
		jump(this.args.href);
	}
}
