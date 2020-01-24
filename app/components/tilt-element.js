import classic from 'ember-classic-decorator';
import { attributeBindings } from '@ember-decorators/component';
import Component from '@ember/component';
import VanillaTilt from 'vanilla-tilt';

const optionProps = [
	'reverse',
	'max',
	'startX',
	'startY',
	'perspective',
	'scale',
	'speed',
	'transition',
	'axis',
	'easing',
	'glare',
	'max-glare',
	'glare-prerender',
	'mouse-event-element',
	'full-page-listening',
	'gyroscope',
	'gyroscopeMinAngleX',
	'gyroscopeMaxAngleX',
	'gyroscopeMinAngleY',
	'gyroscopeMaxAngleY',
	'gyroscopeSamples'
];

@classic
@attributeBindings('data-tilt')
export default class TiltElement extends Component {
  init() {
		super.init(...arguments);
		this.options = {};
	}

  didReceiveAttrs() {
		this._setDefaults();
	}

  didInsertElement() {
		VanillaTilt.init(this.element, this.options);
	}

	reverse = false;
	max = 35;
	startX = 0;
	startY = 0;
	perspective = 1000;
	scale = 1;
	speed = 300;
	transition = true;
	axis = null;
	reset = true;
	easing = "cubic-bezier(.03,.98,.52,.99)";
	glare = false;
	"max-glare" = 1;
	"glare-prerender" = false;
	"mouse-event-element" = null;
	"full-page-listening" = false;
	gyroscope = true;
	gyroscopeMinAngleX = -45;
	gyroscopeMaxAngleX = 45;
	gyroscopeMinAngleY = -45;
	gyroscopeMaxAngleY = 45;
	gyroscopeSamples = 10;

  _setDefaults() {
		optionProps.forEach(option => {
			this.options[option] = this[option];
		});
	}
}
