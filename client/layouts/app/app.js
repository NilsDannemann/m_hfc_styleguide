Template.app.helpers({
	// Toggle - AsideL
	toggleHeaderAsideL: function(){
		if (Session.get('toggleHeaderAsideL')) return 'is-toggled';
	},
	toggleContentAsideL: function(){
		if (Session.get('toggleContentAsideL')) return 'is-toggled';
	},
	toggleFooterAsideL: function(){
		if (Session.get('toggleFooterAsideL')) return 'is-toggled';
	},
	// Toggle - AsideR
	toggleHeaderAsideR: function(){
		if (Session.get('toggleHeaderAsideR')) return 'is-toggled';
	},
	toggleContentAsideR: function(){
		if (Session.get('toggleContentAsideR')) return 'is-toggled';
	},
	toggleFooterAsideR: function(){
		if (Session.get('toggleFooterAsideR')) return 'is-toggled';
	},
	// Toggle - Drawer
	toggleDrawerL: function(){
		if (Session.get('toggleDrawerL')) return 'is-toggled';
	},
	toggleDrawerR: function(){
		if (Session.get('toggleDrawerR')) return 'is-toggled';
	},
	// Expand - AsideL
	expandHeaderAsideL: function(){
		if (Session.get('expandHeaderAsideL')) return 'is-expanded';
	},
	expandFooterAsideL: function(){
		if (Session.get('expandFooterAsideL')) return 'is-expanded';
	},
	// Expand - AsideR
	expandHeaderAsideR: function(){
		if (Session.get('expandHeaderAsideR')) return 'is-expanded';
	},
	expandFooterAsideR: function(){
		if (Session.get('expandFooterAsideR')) return 'is-expanded';
	},
	// Expand - Main
	expandHeaderMain: function(){
		if (Session.get('expandHeaderMain')) return 'is-expanded';
	},
	expandFooterMain: function(){
		if (Session.get('expandFooterMain')) return 'is-expanded';
	},
});

Template.app.events({
	// Toggle
	'click .js-toggle--aside-l': function(){
		toggleSession('toggleHeaderAsideL');
		toggleSession('toggleContentAsideL');
		toggleSession('toggleFooterAsideL');
	},
	'click .js-toggle--aside-r': function(){
		toggleSession('toggleContentAsideR');
		toggleSession('toggleFooterAsideR');
	},
	'click .js-toggle--drawer-l': function(){
		toggleSession('toggleDrawerL');
	},
	'click .js-toggle--drawer-r': function(){
		toggleSession('toggleDrawerR');
	},
	// Expand
	'click .app__header-aside-l': function(){
		toggleSession('expandHeaderAsideL');
	},
	'click .app__footer-aside-l': function(){
		toggleSession('expandFooterAsideL');
	},
	'click .app__header-aside-r': function(){
		toggleSession('expandHeaderAsideR');
	},
	'click .app__footer-aside-r': function(){
		toggleSession('expandFooterAsideR');
	},
	'click .app__header-main': function(){
		toggleSession('expandHeaderMain');
	},
	'click .app__footer-main': function(){
		toggleSession('expandFooterMain');
	}
});