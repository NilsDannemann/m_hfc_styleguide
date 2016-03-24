Template.appcontrols.events({
	'click .icon-equalizer': function(){
		var app = Session.get('app');
		app.content.asideR.toggled = !app.content.asideR.toggled;
		app.footer.asideR.toggled = !app.footer.asideR.toggled;
		Session.set('app', app);
	}
});