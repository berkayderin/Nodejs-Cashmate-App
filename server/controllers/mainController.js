exports.homepage = async (req, res) => {
	const locals = {
		title: 'Ana Sayfa | Node.js Not',
		description: 'Welcome to the homepage'
	}

	res.render('index', locals)
}

exports.about = async (req, res) => {
	const locals = {
		title: 'Hakkımızda | Node.js Not',
		description: 'Welcome to the about page'
	}

	res.render('about', locals)
}
