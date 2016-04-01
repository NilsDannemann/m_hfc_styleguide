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