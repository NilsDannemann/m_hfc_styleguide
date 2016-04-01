// Toggle Layout Function
export function toggleLayout(area) {
	let app = Session.get('app');
	
	app.content[area].toggled = !app.content[area].toggled;
	app.footer[area].toggled = !app.footer[area].toggled;
	Session.set('app', app);
}

// Toggle Session Function
export function toggleSession(session){
	(Session.get(session)) ? Session.set(session, false) : Session.set(session, true);
};