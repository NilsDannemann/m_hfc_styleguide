import * as functions from '../../lib/functions.js';

Template.appheader.helpers({
	navigationToggled: function(){
		var app = Session.get('app');
		if(app.content.asideL.toggled) {
			return true;
		}
	}
});
Template.appheader.events({
	'click .js-toggle-navigation': function(){
		functions.toggleAsideL();
	}
});
