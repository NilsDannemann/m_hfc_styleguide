Template.appheader.helpers({
	navigationToggled: function(){
		var app = Session.get('app');
		if(Session.get('app').content.asideL.toggled) {
			return true;
		}
	}
});

Template.appheader.events({
	'click .js-toggle-navigation': function(){
		var app = Session.get('app');
		app.content.asideL.toggled = !app.content.asideL.toggled;
		app.footer.asideL.toggled = !app.footer.asideL.toggled;
		Session.set('app', app);
	}
});