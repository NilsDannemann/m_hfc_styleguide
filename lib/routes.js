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
			headerMain: 	'titlebar',
			headerAsideR: 	'settings',

			// Content
			contentAsideL: 	'nav',
			contentMain: 	'content',
			contentAsideR: 	'component',

			// Footer
			footerAsideL: 	'component',
			footerMain: 	'component',
			footerAsideR: 	'component',
		});
	}
});