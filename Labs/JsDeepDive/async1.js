function myFunc() {

    let promise1 = dummyFetch("dummyUrl1")
	
    promise1.then(result1 => {

        console.log(`Result 1: ${result1}`)

		let promise2 = dummyFetch("dummyUrl2")

		promise2.then(result2 => {
			
			console.log(`Result 2: ${result2}`)

			let promise3 = dummyFetch("dummyUrl3")
			
			promise3.then(result3 => {
				console.log(`Result 3: ${result3}`)
				console.log(`\nTotal: ${result1 + result2 + result3}`)
			})
		})
    })
}

function dummyFetch(url) {
    return new Promise(resolve => resolve(Math.floor(Math.random() * 10)))
}

// Entry-point.
myFunc()