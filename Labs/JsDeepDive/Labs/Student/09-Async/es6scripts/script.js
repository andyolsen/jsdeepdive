let promiseCount = 0;

function doIt() {

	const thisPromiseCount = ++promiseCount;

	displayMessage('info', `Promise ${thisPromiseCount}, sync code started`);

	// TODO: Create a Promise object. Pass a function into the Promise constructor, which does the following:
	//         - Performs some work on another thread (e.g. wait for a random time)
	//         - Decides to resolves or reject the promise (e.g. based on whether a random number is less than or more than 0.5).
	// 
	
	// TODO: Handle Promise completion - then() handles successful resolution, catch() handles rejection.
	//       The idea here is to do some follow-on work, after the above promise was resolved or rejected.

	
	displayMessage('info', `Promise ${thisPromiseCount}, sync code ended`);
}

function displayMessage(cssClass, message) {
	const messageArea = document.getElementById('messageArea')
 	messageArea.insertAdjacentHTML('beforeend', `<div class="${cssClass}">${message}</div>`);
}
