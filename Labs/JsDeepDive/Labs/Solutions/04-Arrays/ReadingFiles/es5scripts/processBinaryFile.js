"use strict";

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('binaryFile').addEventListener('change', onLoadBinaryFile);
});

function onLoadBinaryFile() {
  var fileElem = document.getElementById('binaryFile');

  if (fileElem.files.length == 0) {
    alert('Please select a file');
  } else {
    var fileReader = new FileReader();

    fileReader.onload = function () {
      var arrayBuffer = fileReader.result;
      var array = new Uint8Array(arrayBuffer);
      var str = '';
      array.forEach(function (b) {
        return str += pad(b.toString(16)) + ' ';
      });
      document.getElementById('binaryFileOutput').value = str;
    };

    fileReader.onerror = function (e) {
      alert("Error loading file: ".concat(e));
    };

    fileReader.readAsArrayBuffer(fileElem.files[0]);
  }
}

function pad(n) {
  return n.length == 1 ? "0".concat(n) : n;
}
//# sourceMappingURL=processBinaryFile.js.map
