Template.app.helpers({
	toggleHeaderAsideL: function(){
		if (Session.get('toggleHeaderAsideL') == true) {
			return 'is-toggled'
		};
	},
	toggleContentAsideL: function(){
		if (Session.get('toggleContentAsideL') == true) {
			return 'is-toggled'
		};
	},
	toggleFooterAsideL: function(){
		if (Session.get('toggleFooterAsideL') == true) {
			return 'is-toggled'
		};
	},
	toggleHeaderAsideR: function(){
		if (Session.get('toggleHeaderAsideR') == true) {
			return 'is-toggled'
		};
	},
	toggleContentAsideR: function(){
		if (Session.get('toggleContentAsideR') == true) {
			return 'is-toggled'
		};
	},
	toggleFooterAsideR: function(){
		if (Session.get('toggleFooterAsideR') == true) {
			return 'is-toggled'
		};
	}
});

Template.app.events({
	'click .icon-enter-left': function(){
		toggleSession('toggleHeaderAsideL');
		toggleSession('toggleContentAsideL');
		toggleSession('toggleFooterAsideL');
	},
	'click .icon-enter-right': function(){
		// toggleSession('toggleHeaderAsideR');
		toggleSession('toggleContentAsideR');
		toggleSession('toggleFooterAsideR');
	}
});