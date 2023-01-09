"use strict";

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('textFile').addEventListener('change', onLoadTextFile);
});

function onLoadTextFile() {
  var fileElem = document.getElementById('textFile');

  if (fileElem.files.length == 0 || !fileElem.files[0].type.match(/text.*/)) {
    alert('Please select a text file');
  } else {
    var fileReader = new FileReader();

    fileReader.onload = function () {
      document.getElementById('textFileContent').value = fileReader.result;
    };

    fileReader.onerror = function (e) {
      alert("Error loading file: ".concat(e));
    };

    fileReader.readAsText(fileElem.files[0], 'ISO-8859-1');
  }
}
//# sourceMappingURL=processTextFile.js.map
