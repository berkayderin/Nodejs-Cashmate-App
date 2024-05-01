const Transaction = require('../models/Transaction')
const mongoose = require('mongoose')

exports.dashboard = async (req, res) => {
	const locals = {
		title: 'Panel | cashmate',
		description: 'Welcome to the homepage'
	}

	try {
		// sadece giriş yapan kullanıcının işlemlerini getir
		const transactions = await Transaction.find({ userId: new mongoose.Types.ObjectId(req.user.id) }).sort({ date: -1 })

		res.render('dashboard/index', {
			firstName: req.user.firstName,
			locals,
			transactions,
			layout: '../views/layouts/dashboard'
		})
	} catch (error) {
		console.log(error)
	}
}
