"use strict";

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('imageFile').addEventListener('change', onLoadImageFile);
});

function onLoadImageFile() {
  var fileElem = document.getElementById('imageFile');

  if (fileElem.files.length == 0 || !fileElem.files[0].type.match(/image.*/)) {
    alert('Please select an image file');
  } else {
    var fileReader = new FileReader();

    fileReader.onload = function () {
      document.getElementById('imageFileContent').setAttribute('src', fileReader.result);
    };

    fileReader.onerror = function (e) {
      alert("Error loading file: ".concat(e));
    };

    fileReader.readAsDataURL(fileElem.files[0]);
  }
}
//# sourceMappingURL=processImageFile.js.map
