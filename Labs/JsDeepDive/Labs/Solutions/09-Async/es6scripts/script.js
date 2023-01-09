let promiseCount = 0;

function doIt() {

	const thisPromiseCount = ++promiseCount;

	displayMessage('info', `Promise ${thisPromiseCount}, sync code started`);

	var p1 = new Promise(function (resolve, reject) {
		var rand = Math.random();
		displayMessage('info', `Promise ${thisPromiseCount}, async code started, random number is ${rand}`);
		window.setTimeout(() => {
			if (rand < 0.5) 
				resolve(`Promise ${thisPromiseCount}, resolved`);
			else 
				reject(`Promise ${thisPromiseCount}, rejected`);
		}, rand * 5000 + 1000);
	});

	// Handle Promise completion - then() handles successful resolution, catch() handles rejection.
	p1.then(val => displayMessage('resolved', val))
	  .catch(reason => displayMessage('rejected', reason))

	displayMessage('info', `Promise ${thisPromiseCount}, sync code ended`);
}

function displayMessage(cssClass, message) {
	const messageArea = document.getElementById('messageArea')
 	messageArea.insertAdjacentHTML('beforeend', `<div class="${cssClass}">${message}</div>`);
}
