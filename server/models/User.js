const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
	googleId: {
		type: String,
		required: true
	},
	userName: {
		type: String,
		required: true
	},
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String
	},
	email: {
		type: String,
		required: true
	},
	profileImage: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model('User', UserSchema)
