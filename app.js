require('dotenv').config()

const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const methodOverride = require('method-override')
const connectDB = require('./server/config/db')
const session = require('express-session')
const passport = require('passport')
const MongoStore = require('connect-mongo')

const app = express()
const port = process.env.PORT || 5000

app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: true,
		store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }),
		cookie: {
			maxAge: 1000 * 60 * 60 * 24 // 24 saat
		}
	})
)

// passport ayarları
app.use(passport.initialize()) // passport başlat
app.use(passport.session()) // passport session

// kullanıcı bilgilerini global olarak kullanmak için
app.use((req, res, next) => {
	res.locals.isAuthenticated = req.isAuthenticated()
	res.locals.user = req.user
	next()
})

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// method-override
app.use(methodOverride('_method'))

// mongodb
connectDB()

// static dosyalar
app.use(express.static('public'))

// template engine
app.use(expressLayouts)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')

// routes
app.use('/', require('./server/routes/auth'))
app.use('/', require('./server/routes/index'))
app.use('/', require('./server/routes/dashboard'))

app.get('*', (req, res) => {
	res.status(404).render('404', {
		title: '404 | cashmate',
		description: 'Sayfa Bulunamadı'
	})
})

app.listen(port, () => {
	console.log(`Server çalıştırıldı: http://localhost:${port}`)
})
