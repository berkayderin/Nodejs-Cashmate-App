const express = require('express')
const router = express.Router()
const { isLoggedIn } = require('../middleware/checkAuth')
const dashboardController = require('../controllers/dashboardController')

router.get('/dashboard', isLoggedIn, dashboardController.dashboard)
router.get('/dashboard/add', isLoggedIn, dashboardController.addTransaction)
router.get('/dashboard/incomes', isLoggedIn, dashboardController.income)

router.post('/dashboard/add', isLoggedIn, dashboardController.createTransaction)
router.get('/dashboard/:id', isLoggedIn, dashboardController.dashboardViewTransaction)

router.get('/dashboard/:id/edit', isLoggedIn, dashboardController.dashboardEditTransaction)
router.post('/dashboard/:id/edit', isLoggedIn, dashboardController.updateTransaction)

router.delete('/dashboard/:id/delete', isLoggedIn, dashboardController.deleteTransaction)

module.exports = router
