FlowRouter.route('/', {
	// Setup
	subscriptions: function() {
		this.register('MyCollection', Meteor.subscribe('MyCollection'));
	},
	// Actions
	action: function() {
		BlazeLayout.render('app', {

			// Header
			headerAsideL: 	'logo',
			headerMain: 	'component',
			headerAsideR: 	'settings',

			// Content
			contentAsideL: 	'component',
			contentMain: 	'content',
			contentAsideR: 	'component',

			// Footer
			footerAsideL: 	'component',
			footerMain: 	'component',
			footerAsideR: 	'component',
		});
	}
});