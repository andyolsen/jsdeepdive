const numbers = []

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('add').addEventListener('click', doAdd)
})

function doAdd() {

	const numberElem = document.getElementById('number')
    const number = parseInt(numberElem.value)
    numbers.push(number)
    numberElem.value = ''

    // Exercise 2 - Array destructuring.


    // Exercise 3 - Object destructuring.


    // Exercise 4 - More object destructuring.

}

function setHtml(selector, html) {
	const element = document.querySelector(selector)
	if (element) {
		element.innerHTML = html
	}
}


