const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGODB_URI, {})

		console.log(`MongoDB Bağlandı: ${conn.connection.host}`)
	} catch (error) {
		console.error(`MongoDB Bağlanma Hatası: ${error.message}`)
	}
}

module.exports = connectDB
