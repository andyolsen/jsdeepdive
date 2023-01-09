document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submit').addEventListener('click', doSubmit)
})

function doSubmit() {

    setHtmlAll('.error', '')
    setHtmlAll('.valid', '')

    processAmount()
    processName()
    processCardNumber()
    processExpiryDate()
    processCvv()
}

function processAmount() {

    const amountStr = getValue('#amount')
    const amount = Number.parseFloat(amountStr) 

    if (Number.isNaN(amount)) {
        setHtml('#amountError', 'Number required')
        return
    }
    const amountPennies = Math.trunc(amount * 100)
    setHtml('#amountValid', `Amount in pennies is ${amountPennies}`)
}

function processName() {

    const name = getValue('#name')

    if (name.length == 0) {
        setHtml('#nameError', 'Name required')
        return
    }
    setHtml('#nameValid', name)
}

function processCardNumber() {

    let cardNumber = getValue('#cardNumber')
    cardNumber = cardNumber.replace(/-|\s|\./g, '')

    if (cardNumber.length != 16) {
        setHtml('#cardNumberError', 'Must be 16 digits')
        return
    }

    const matches = cardNumber.match(/\d{4}/g)
    if (matches == null || matches.length != 4) {
        setHtml('#cardNumberError', 'Must be 16 digits')
        return
    }

    if (!cardNumber.startsWith('4') && !cardNumber.startsWith('5')) {
        setHtml('#cardNumberError', 'Must start with 4 or 5')
        return
    }

    setHtml('#cardNumberValid', `${matches[0]}-${matches[1]}-${matches[2]}-${matches[3]}`)
}

function processExpiryDate() {

    const expiryDate = getValue('#expiryDate')

    if (expiryDate.length != 4) {
        setHtml('#expiryDateError', 'Must be 4 digits')
        return
    }

    const matches = expiryDate.match(/\d{2}/g)
    if (matches == null || matches.length != 2) {
        setHtml('#expiryDateError', 'Must be mmyy format')
        return
    }

    const month = Number.parseInt(matches[0])
    const year = Number.parseInt(matches[1])
    if (month < 1 || month > 12) {
        setHtml('#expiryDateError', 'Invalid month')
        return
    }

    if (year < 18 || year > 23) {
        setHtml('#expiryDateError', 'Invalid year')
        return
    }

    setHtml('#expiryDateValid', `Month ${month}, year ${year}`)
}

function processCvv() {

    const cvv = getValue('#cvv')
        
    if (cvv.search(/^\d{3}$/) == -1) {
        setHtml('#cvvError', 'Must be 3 digits')
        return
    }
    setHtml('#cvvValid', cvv)
}

/* Helper functions */
function getValue(selector) {
	const element = document.querySelector(selector)
	return element ? element.value : ''
}

function setHtml(selector, html) {
	const element = document.querySelector(selector)
	if (element) {
		element.innerHTML = html
	}
}

function setHtmlAll(selector, html) {
	const elements = document.querySelectorAll(selector)
	elements.forEach(e => e.innerHTML = html)
}
