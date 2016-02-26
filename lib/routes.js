FlowRouter.route('/', {
	// Setup
	subscriptions: function() {
		this.register('MyCollection', Meteor.subscribe('MyCollection'));
	},
	// Actions
	action: function() {
		BlazeLayout.render('layout_app', {
			aside: 'nav_main',
			main: 'content_main',
		});
	}
});