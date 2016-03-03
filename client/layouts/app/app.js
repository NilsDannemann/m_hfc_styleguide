Template.app.helpers({
	toggleStateHeaderAsideL: function(){
		if (Session.get('toggleStateHeaderAsideL') == true) {
			return 'is-toggled'
		};
	},
	toggleStateContentAsideL: function(){
		if (Session.get('toggleStateContentAsideL') == true) {
			return 'is-toggled'
		};
	},
	toggleStateFooterAsideL: function(){
		if (Session.get('toggleStateFooterAsideL') == true) {
			return 'is-toggled'
		};
	},
	toggleStateHeaderAsideR: function(){
		if (Session.get('toggleStateHeaderAsideR') == true) {
			return 'is-toggled'
		};
	},
	toggleStateContentAsideR: function(){
		if (Session.get('toggleStateContentAsideR') == true) {
			return 'is-toggled'
		};
	},
	toggleStateFooterAsideR: function(){
		if (Session.get('toggleStateFooterAsideR') == true) {
			return 'is-toggled'
		};
	}
});

Template.app.events({
	'click .icon-enter-left': function(){
		toggleSession('toggleStateHeaderAsideL');
		toggleSession('toggleStateContentAsideL');
		toggleSession('toggleStateFooterAsideL');
	},
	'click .icon-enter-right': function(){
		// toggleSession('toggleStateHeaderAsideR');
		toggleSession('toggleStateContentAsideR');
		toggleSession('toggleStateFooterAsideR');
	}
});