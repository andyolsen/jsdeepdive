document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('textFile').addEventListener('change', onLoadTextFile)
}) 
 
function onLoadTextFile() {

	const fileElem = document.getElementById('textFile')

	if (fileElem.files.length == 0 || !fileElem.files[0].type.match(/text.*/)) {
		alert('Please select a text file')
	}
	else {
		const fileReader = new FileReader()
		fileReader.onload = () => {
			document.getElementById('textFileContent').value = fileReader.result
		}
		fileReader.onerror = e => {
			alert(`Error loading file: ${e}`)
		}	
		fileReader.readAsText(fileElem.files[0], 'ISO-8859-1')
	}
}
