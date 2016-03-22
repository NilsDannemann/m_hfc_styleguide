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
			headerMain: 	'componentheader',
			headerAsideR: 	'componentheader',

			// Content
			contentAsideL: 	'componentcontent',
			contentMain: 	'dashboard',
			contentAsideR: 	'componentcontent',

			// Footer
			footerAsideL: 	'componentfooter',
			footerMain: 	'componentfooter',
			footerAsideR: 	'componentfooter',

			// Drawer
			drawerL: 		'componentdrawer',
			drawerR: 		'componentdrawer',
		});
	}
});