// Template Subscription
Template.componentdynamic.onCreated(function() {
	this.autorun(() => {
		this.subscribe('MyCollection');
	});
});

// Helper
Template.componentdynamic.helpers({
	helper: function(){
		return 'componentdynamic';
	}
});

// Events
Template.componentdynamic.events({
	'click .componentdynamic': function(){
		console.log('componentdynamic event works');
	}
});