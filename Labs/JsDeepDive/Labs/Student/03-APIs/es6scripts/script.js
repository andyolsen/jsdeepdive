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

    // Add code to validate/process the amount.
    // If any errors, display an error message in '#amountError' <span>.
    // If all OK, display amount (in pennies) in '#amountValid' <span>.

}

function processName() {

    const name = getValue('#name')

    // Add code to validate/process the name.
    // If any errors, display an error message in '#nameError' <span>.
    // If all OK, display name in '#nameValid' <span>.

}

function processCardNumber() {

    let cardNumber = getValue('#cardNumber')

    // Add code to validate/process the credit card number.
    // If any errors, display an error message in '#cardNumberError' <span>.
    // If all OK, display credit card number in XXXX-XXXX-XXXX-XXXX format in '#cardNumberValid' <span>.

}

function processExpiryDate() {

    const expiryDate = getValue('#expiryDate')

    // Add code to validate/process the expiry date.
    // If any errors, display an error message in '#expiryDateError' <span>.
    // If all OK, display the month and year separately in '#expiryDateValid' <span>.

}

function processCvv() {

    const cvv = getValue('#cvv')
        
    // Add code to validate/process the CVV.
    // If any errors, display an error message in '#cvvError' <span>.
    // If all OK, display the CVC in '#cvvValid' <span>.

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

