FlowRouter.route('/', {
	// Setup
	subscriptions: function() {
		this.register('MyCollection', Meteor.subscribe('MyCollection'));
	},
	// Actions
	action: function() {
		BlazeLayout.render('workspace', {

			// Header
			headerAsideL: 	'logo',
			headerMain: 	'componentheader',
			headerAsideR: 	'componentheader',

			// Content
			contentAsideL: 	'componentcontent',
			contentMain: 	'content',
			contentAsideR: 	'componentcontent',

			// Footer
			footerAsideL: 	'componentfooter',
			footerMain: 	'componentfooter',
			footerAsideR: 	'componentfooter',
			
		});
	}
});