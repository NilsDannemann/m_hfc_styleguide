// Define initial app state
var app = {
	header: {
		asideL: {toggled: false},
		main: 	{toggled: false},
		asideR: {toggled: false}
	},
	content: {
		asideL: {toggled: false},
		main: 	{toggled: false},
		asideR: {toggled: true}
	},
	footer: {
		asideL: {toggled: false},
		main: 	{toggled: false},
		asideR: {toggled: true}
	},
	drawerL: 	{toggled: false},
	drawerR: 	{toggled: false}
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
	},
	headerMainState: function(){
		if (Session.get('app').header.main.toggled) return 'is-toggled';
	},
	headerAsideRState: function(){
		if (Session.get('app').header.asideR.toggled) return 'is-toggled';
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
	},
	footerMainState: function(){
		if (Session.get('app').footer.main.toggled) return 'is-toggled';
	},
	footerAsideRState: function(){
		if (Session.get('app').footer.asideR.toggled) return 'is-toggled';
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
	}
});