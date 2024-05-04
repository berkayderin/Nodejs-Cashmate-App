const { format } = require('date-fns')

// tarih ve saat formatlama
const formatDate = (date, showTime = true) => {
	if (!date) {
		return '-'
	}
	if (showTime) {
		return format(new Date(date), 'dd.MM.yyyy HH:mm')
	}
	return format(new Date(date), 'dd.MM.yyyy')
}

module.exports = formatDate
