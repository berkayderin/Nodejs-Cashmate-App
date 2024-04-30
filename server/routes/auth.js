const express = require('express')
const router = express.Router()
const passport = require('passport')
const User = require('../models/User')

const GoogleStrategy = require('passport-google-oauth20').Strategy

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: process.env.GOOGLE_CALLBACK_URL
		},
		async function (accessToken, refreshToken, profile, done) {
			console.log('kullanıcı profili:', profile)

			const newUser = {
				googleId: profile.id,
				userName: profile.displayName,
				firstName: profile.name.givenName,
				lastName: profile.name.familyName,
				email: profile.emails[0].value,
				profileImage: profile.photos[0].value
			}

			try {
				let user = await User.findOne({ googleId: profile.id })

				if (user) {
					done(null, user)
				} else {
					user = await User.create(newUser)
					done(null, user)
				}
			} catch (error) {
				console.error(error)
			}
		}
	)
)

router.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'] }))

router.get(
	'/google/callback',
	passport.authenticate('google', { failureRedirect: '/login-failure' }),
	function (req, res) {
		// başarılı giriş
		res.redirect('/dashboard')
	}
)

router.get('login-failure', (req, res) => {
	res.send('Failed to login')
})

router.get('/logout', (req, res) => {
	req.session.destroy((err) => {
		if (err) {
			console.log(err)
			res.send('Failed to logout')
		} else {
			res.redirect('/')
		}
	})
})

// Kullanıcıyı yalnızca ID ile serileştir
passport.serializeUser(function (user, done) {
	done(null, user.id) // Sadece kullanıcı ID'sini session'a kaydet
})

// Kullanıcı ID'si kullanılarak deserialize işlemi
passport.deserializeUser(async function (id, done) {
	try {
		const user = await User.findById(id)
		done(null, user) // Kullanıcı objesini request objesine ekle
	} catch (err) {
		done(err, null)
	}
})

module.exports = router
