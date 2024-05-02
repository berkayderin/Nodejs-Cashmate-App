require('dotenv').config()
const nodemailer = require('nodemailer')

exports.homepage = async (req, res) => {
	const locals = {
		title: 'Ana Sayfa | cashmate',
		description: 'Welcome to the homepage'
	}

	res.render('index', {
		locals,
		layout: '../views/layouts/front-page'
	})
}

exports.about = async (req, res) => {
	const locals = {
		title: 'Hakkımızda | cashmate',
		description: 'Welcome to the about page'
	}

	res.render('about', locals)
}
