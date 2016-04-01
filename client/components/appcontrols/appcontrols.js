import * as functions from '../../lib/functions.js';

Template.appcontrols.events({
	'click .js-toggle-filter': function(){
		functions.toggleLayout('asideR');
	}
});