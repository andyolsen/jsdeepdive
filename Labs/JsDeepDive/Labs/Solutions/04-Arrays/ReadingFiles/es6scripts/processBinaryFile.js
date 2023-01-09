document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('binaryFile').addEventListener('change', onLoadBinaryFile);
}) 
 
function onLoadBinaryFile() {

	const fileElem = document.getElementById('binaryFile')

	if (fileElem.files.length == 0) {
		alert('Please select a file')
	}
	else {
		const fileReader = new FileReader()
		fileReader.onload = () => {
			let arrayBuffer = fileReader.result    
			let array = new Uint8Array(arrayBuffer)
			
			let str = ''
			array.forEach(b => str += pad(b.toString(16)) + ' ') 
			document.getElementById('binaryFileOutput').value = str    
		}
		fileReader.onerror = e => {
			alert(`Error loading file: ${e}`)
		}
		fileReader.readAsArrayBuffer(fileElem.files[0])
	}
}
		
function pad(n) {
    return n.length == 1 ? (`0${n}`) : n
}
