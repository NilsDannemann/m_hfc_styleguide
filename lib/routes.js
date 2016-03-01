FlowRouter.route('/', {
	// Setup
	subscriptions: function() {
		this.register('MyCollection', Meteor.subscribe('MyCollection'));
	},
	// Actions
	action: function() {
		BlazeLayout.render('layout-app', {

			// Header
			headerAsideL: 	'logo',
			headerMain: 	'header',
			headerAsideR: 	'aside',

			// Footer
			contentAsideL: 	'nav',
			contentMain: 	'content',
			contentAsideR: 	'aside',

			// Footer
			footerAsideL: 	'aside',
			footerMain: 	'footer',
			footerAsideR: 	'aside',
			
		});
	}
});