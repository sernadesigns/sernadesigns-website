'use strict';

const browsers = [
	'last 2 Edge versions',
  'last 2 Chrome versions',
  'last 2 Firefox versions',
  'last 2 Safari versions'
];

const isFallback = process.env.BUILD_TARGET === 'LEGACY';

if (isFallback) {
  browsers.push('ie 11');
}

module.exports = {
  browsers
};
