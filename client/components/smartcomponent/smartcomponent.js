// Template Subscription
Template.smartcomponent.onCreated(function() {
	this.autorun(() => {
		this.subscribe('MyCollection');
	});
});

// Helper
Template.smartcomponent.helpers({
	myhelper: function(){
		return 'something';
	}
});

// Events
Template.smartcomponent.events({
	'click .smartcomponent': function(){
		console.log('smartcomponent event works');
	}
});