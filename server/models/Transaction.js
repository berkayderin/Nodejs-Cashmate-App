const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	type: {
		type: String,
		enum: ['income', 'expense'], // gelir, gider
		required: true
	},
	amount: {
		// miktar
		type: Number,
		required: true
	},
	description: {
		// açıklama
		type: String,
		required: false
	},
	category: {
		type: String,
		required: false
	},
	date: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model('Transaction', TransactionSchema)
