document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('imageFile').addEventListener('change', onLoadImageFile)
}) 

function onLoadImageFile() {

	const fileElem = document.getElementById('imageFile')

	if (fileElem.files.length == 0 || !fileElem.files[0].type.match(/image.*/)) {
		alert('Please select an image file')
	}
	else {
		const fileReader = new FileReader()
		fileReader.onload = () => {
			document.getElementById('imageFileContent').setAttribute('src', fileReader.result)    
		}
		fileReader.onerror = e => {
			alert(`Error loading file: ${e}`)
		}
		fileReader.readAsDataURL(fileElem.files[0])
	}
}
