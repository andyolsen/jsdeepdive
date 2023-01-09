document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('binaryFile').addEventListener('change', onLoadBinaryFile)
}) 

function onLoadBinaryFile() {

	const fileElem = document.getElementById('binaryFile')

	if (fileElem.files.length == 0) {
		alert('Please select a file')
	}
	else {
		alert('TODO: Read binary file using readAsArrayBuffer()')		
		// TODO: Add your code here.		
	}
}

// Helper function, converts a 1-digit hex string into a 2-digit hex string.		
function pad(n) {
    return n.length == 1 ? (`0${n}`) : n
}
