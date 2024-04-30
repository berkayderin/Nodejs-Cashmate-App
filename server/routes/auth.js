const express = require('express')
const router = express.Router()
const passport = require('passport')

const GoogleStrategy = require('passport-google-oauth20').Strategy

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: process.env.GOOGLE_CALLBACK_URL
		},
		function (accessToken, refreshToken, profile, cb) {
			console.log('kullanıcı profili:', profile)
			User.findOrCreate({ googleId: profile.id }, function (err, user) {
				return cb(err, user)
			})
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

passport.serializeUser(function (user, done) {
	done(null, user)
})

passport.deserializeUser(function (id, done) {
	User.findById(id, function (err, user) {
		done(err, user)
	})
})

module.exports = router
