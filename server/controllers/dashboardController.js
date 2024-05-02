const Transaction = require('../models/Transaction')
const mongoose = require('mongoose')
const router = require('../routes')

// tüm transactionları getir
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

// transaction detayını getir
exports.dashboardViewTransaction = async (req, res) => {
	const locals = {
		title: 'Transaction | cashmate',
		description: 'View transaction'
	}

	try {
		const transaction = await Transaction.findOne({
			_id: req.params.id,
			userId: req.user.id
		}).lean()

		if (transaction) {
			res.render('dashboard/view-transaction', {
				firstName: req.user.firstName,
				transactionId: req.params.id,
				locals,
				transaction,
				layout: '../views/layouts/dashboard'
			})
		} else {
			res.redirect('/dashboard/')
		}
	} catch (error) {
		console.error(error)
		res.status(500).send('Detaylar getirilirken bir hata oluştu')
	}
}

// transaction düzenleme sayfasını getir
exports.dashboardEditTransaction = async (req, res) => {
	const locals = {
		title: 'Edit transaction | cashmate',
		description: 'Edit transaction'
	}

	try {
		const transaction = await Transaction.findOne({
			_id: req.params.id,
			userId: req.user.id
		}).lean()

		if (transaction) {
			const formattedDate = transaction.date.toISOString().substring(0, 10)

			res.render('dashboard/edit-transaction', {
				firstName: req.user.firstName,
				transactionId: req.params.id,
				date: formattedDate,
				locals,
				transaction,
				layout: '../views/layouts/dashboard'
			})
		} else {
			res.redirect('/dashboard/')
		}
	} catch (error) {
		console.error(error)
		res.status(500).send('Düzenleme sayfası getirilirken bir hata oluştu')
	}
}

exports.updateTransaction = async (req, res) => {
	const { id } = req.params
	const { description, amount, type, date } = req.body
	try {
		const transaction = await Transaction.findOneAndUpdate(
			{ _id: id, userId: req.user.id },
			{ description, amount, type, date },
			{ new: true }
		)
		if (transaction) {
			res.redirect('/dashboard/' + id)
		} else {
			res.status(404).send('İşlem bulunamadı veya güncellenemedi')
		}
	} catch (error) {
		console.error(error)
		res.status(500).send('İşlem güncellenirken bir hata oluştu')
	}
}

exports.deleteTransaction = async (req, res) => {
	try {
		await Transaction.deleteOne({ _id: req.params.id, userId: req.user.id })
		res.redirect('/dashboard/')
	} catch (error) {
		console.error(error)
		res.status(500).send('İşlem silinirken bir hata oluştu')
	}
}

exports.addTransaction = async (req, res) => {
	const locals = {
		title: 'Add transaction | cashmate',
		description: 'Add transaction'
	}

	try {
		res.render('dashboard/add-transaction', {
			firstName: req.user.firstName,
			locals,
			layout: '../views/layouts/dashboard'
		})
	} catch (error) {
		console.error('Error rendering add transaction page:', error)
		res.status(500).send('Internal Server Error')
	}
}

exports.createTransaction = async (req, res) => {
	const { description, amount, type, date } = req.body
	try {
		const transaction = new Transaction({
			description,
			amount,
			type,
			date,
			userId: req.user.id
		})
		await transaction.save()
		res.redirect('/dashboard/')
	} catch (error) {
		console.error('Error creating transaction:', error)
		res.status(500).send('Internal Server Error')
	}
}

// income / gelir sayfasını getir
exports.income = async (req, res) => {
	const locals = {
		title: 'Gelirlerim | cashmate',
		description: 'Income page'
	}

	try {
		const transactions = await Transaction.find({
			userId: req.user.id,
			type: 'income'
		}).sort({ date: -1 })

		// toplam gelir
		const totalIncome = transactions.reduce((acc, transaction) => acc + transaction.amount, 0)

		// maksimum gelir
		const maxIncome = transactions.reduce((acc, transaction) => Math.max(acc, transaction.amount), 0)

		// minimum gelir
		const minIncome = transactions.reduce((acc, transaction) => Math.min(acc, transaction.amount), 0)

		res.render('dashboard/incomes', {
			firstName: req.user.firstName,
			locals,
			transactions,
			totalIncome,
			maxIncome,
			minIncome,
			layout: '../views/layouts/dashboard'
		})
	} catch (error) {
		console.error('Error rendering income page:', error)
		res.status(500).send('Internal Server Error')
	}
}
