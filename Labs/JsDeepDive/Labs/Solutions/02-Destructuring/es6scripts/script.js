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
    const [item0, item1, ...itemOthers] = numbers
    setHtml('#item0', item0)
    setHtml('#item1', item1)
    setHtml('#itemOthers', itemOthers.join(', '))

    // Exercise 3 - Object destructuring.
    const {sum, average} = stats()
    setHtml('#sum', sum)
    setHtml('#average', average)

    // Exercise 4 - More object destructuring.
    const {position: negPosition, value: negValue = 'n/a'} = find(n => n < 0)
    setHtml('#negPosition', negPosition)
    setHtml('#negValue', negValue)

    const {position: oddPosition, value: oddValue = 'n/a'} = find(n => n % 2 != 0)
    setHtml('#oddPosition', oddPosition)
    setHtml('#oddValue', oddValue)
}

function setHtml(selector, html) {
	const element = document.querySelector(selector)
	if (element) {
		element.innerHTML = html
	}
}

function stats() {
    let sum = 0
    for (let i in numbers) {
        sum += numbers[i]
    }
    return {sum: sum, average: sum/numbers.length}
}

function find(predicate) {
    let sum = 0
    for (let i in numbers) {
        let num = numbers[i]
        if (predicate(num)) {
            return {position: i, value: num}
        }
    }
    return {position: -1}
}