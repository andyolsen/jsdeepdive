"use strict";

var numbers = [];
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('add').addEventListener('click', doAdd);
});

function doAdd() {
  var numberElem = document.getElementById('number');
  var number = parseInt(numberElem.value);
  numbers.push(number);
  numberElem.value = ''; // Exercise 2 - Array destructuring.
  // Exercise 3 - Object destructuring.
  // Exercise 4 - More object destructuring.
}

function setHtml(selector, html) {
  var element = document.querySelector(selector);

  if (element) {
    element.innerHTML = html;
  }
}
//# sourceMappingURL=script.js.map
