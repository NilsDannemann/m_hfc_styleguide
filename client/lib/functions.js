// Toggle App Layout
export function toggleAsideL() {
	var props = function() {
		return 'app.content.asideL.toggled';
	};

	var app = Session.get('app');
	app.content.asideL.toggled = !app.content.asideL.toggled;
	app.footer.asideL.toggled = !app.footer.asideL.toggled;
	Session.set('app', app);
}