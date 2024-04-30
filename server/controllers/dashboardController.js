exports.dashboard = async (req, res) => {
	const locals = {
		title: 'Panel | cashmate',
		description: 'Welcome to the homepage'
	}

	res.render('dashboard/index', {
		locals,
		layout: '../views/layouts/dashboard'
	})
}
