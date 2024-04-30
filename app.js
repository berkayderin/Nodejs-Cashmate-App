require('dotenv').config()

const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const app = express()
const port = process.env.PORT || 5000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// static dosyalar
app.use(express.static('public'))

// template engine
app.use(expressLayouts)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')

// routes
app.use('/', require('./server/routes/index'))

app.listen(port, () => {
	console.log(`Server started on http://localhost:${port}`)
})
