// Define initial app state
var props = function() {
	return {
		toggled: false,
		expanded: false
	};
};
var app = {
	header: {
		asideL: props(),
		main: props(),
		asideR: props()
	},
	content: {
		asideL: props(),
		main: props(),
		asideR: props()
	},
	footer: {
		asideL: props(),
		main: props(),
		asideR: props()
	},
	drawerL: props(),
	drawerR: props()
};


// Set initial app state
Template.app.onCreated(function () {
	Session.set('app', app);
});


// Helpers
Template.app.helpers({
	// Header
	headerAsideLState: function(){
		if (Session.get('app').header.asideL.toggled) return 'is-toggled';
		if (Session.get('app').header.asideL.expanded) return 'is-expanded';
	},
	headerMainState: function(){
		if (Session.get('app').header.main.toggled) return 'is-toggled';
		if (Session.get('app').header.main.expanded) return 'is-expanded';
	},
	headerAsideRState: function(){
		if (Session.get('app').header.asideR.toggled) return 'is-toggled';
		if (Session.get('app').header.asideR.expanded) return 'is-expanded';
	},
	// Content
	contentAsideLState: function(){
		if (Session.get('app').content.asideL.toggled) return 'is-toggled';
	},
	contentAsideRState: function(){
		if (Session.get('app').content.asideR.toggled) return 'is-toggled';
	},
	// Footer
	footerAsideLState: function(){
		if (Session.get('app').footer.asideL.toggled) return 'is-toggled';
		if (Session.get('app').footer.asideL.expanded) return 'is-expanded';
	},
	footerMainState: function(){
		if (Session.get('app').footer.main.toggled) return 'is-toggled';
		if (Session.get('app').footer.main.expanded) return 'is-expanded';
	},
	footerAsideRState: function(){
		if (Session.get('app').footer.asideR.toggled) return 'is-toggled';
		if (Session.get('app').footer.asideR.expanded) return 'is-expanded';
	},
	// Drawer
	DrawerLState: function(){
		if (Session.get('app').drawerL.toggled) return 'is-toggled';
	},
	DrawerRState: function(){
		if (Session.get('app').drawerR.toggled) return 'is-toggled';
	}
});


// Events
Template.app.events({
	// Toggle
	'click .js-toggle--aside-l': function(){
		var app = Session.get('app');
		app.content.asideL.toggled = !app.content.asideL.toggled;
		app.footer.asideL.toggled = !app.footer.asideL.toggled;
		Session.set('app', app);
	},
	'click .js-toggle--aside-r': function(){
		var app = Session.get('app');
		app.content.asideR.toggled = !app.content.asideR.toggled;
		app.footer.asideR.toggled = !app.footer.asideR.toggled;
		Session.set('app', app);
	},
	'click .js-toggle--drawer-l': function(){
		var app = Session.get('app');
		app.drawerL.toggled = !app.drawerL.toggled;
		Session.set('app', app);
	},
	'click .js-toggle--drawer-r': function(){
		var app = Session.get('app');
		app.drawerR.toggled = !app.drawerR.toggled;
		Session.set('app', app);
	},
	// Expand
	'click .app__header-aside-l': function(){
		var app = Session.get('app');
		app.header.asideL.expanded = !app.header.asideL.expanded;
		Session.set('app', app);
	},
	'click .app__header-main': function(){
		var app = Session.get('app');
		app.header.main.expanded = !app.header.main.expanded;
		Session.set('app', app);
	},
	'click .app__header-aside-r': function(){
		var app = Session.get('app');
		app.header.asideR.expanded = !app.header.asideR.expanded;
		Session.set('app', app);
	},
	'click .app__footer-aside-l': function(){
		var app = Session.get('app');
		app.footer.asideL.expanded = !app.footer.asideL.expanded;
		Session.set('app', app);
	},
	'click .app__footer-main': function(){
		var app = Session.get('app');
		app.footer.main.expanded = !app.footer.main.expanded;
		Session.set('app', app);
	},
	'click .app__footer-aside-r': function(){
		var app = Session.get('app');
		app.footer.asideR.expanded = !app.footer.asideR.expanded;
		Session.set('app', app);
	}
});