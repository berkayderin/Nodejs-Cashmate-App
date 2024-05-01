const express = require('express')
const router = express.Router()
const { isLoggedIn } = require('../middleware/checkAuth')
const dashboardController = require('../controllers/dashboardController')

router.get('/dashboard', isLoggedIn, dashboardController.dashboard)
router.get('/dashboard/:id', isLoggedIn, dashboardController.dashboardViewTransaction)
router.get('/dashboard/:id/edit', isLoggedIn, dashboardController.dashboardEditTransaction)
router.post('/dashboard/:id/edit', isLoggedIn, dashboardController.updateTransaction)

module.exports = router
