async function myFunc() {

    let result1 = await dummyFetch("dummyUrl1")
	console.log(`Result 1: ${result1}`)

	let result2 = await dummyFetch("dummyUrl2")
	console.log(`Result 2: ${result2}`)

	let result3 = await dummyFetch("dummyUrl3")			
	console.log(`Result 3: ${result3}`)
	console.log(`\nTotal: ${result1 + result2 + result3}`)
}

function dummyFetch(url) {
    return new Promise(resolve => resolve(Math.floor(Math.random() * 10)))
}

// Entry-point.
myFunc()