FlowRouter.route('/', {
	// Setup
	subscriptions: function() {
		this.register('MyCollection', Meteor.subscribe('MyCollection'));
	},
	// Actions
	action: function() {
		BlazeLayout.render('layout-app', {
			header: 	'header',
			nav: 		'nav',
			content: 	'content',
			aside: 		'aside',
			footer: 	'footer',
		});
	}
});