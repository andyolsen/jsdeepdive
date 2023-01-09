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

  var item0 = numbers[0],
      item1 = numbers[1],
      itemOthers = numbers.slice(2);
  setHtml('#item0', item0);
  setHtml('#item1', item1);
  setHtml('#itemOthers', itemOthers.join(', ')); // Exercise 3 - Object destructuring.

  var _stats = stats(),
      sum = _stats.sum,
      average = _stats.average;

  setHtml('#sum', sum);
  setHtml('#average', average); // Exercise 4 - More object destructuring.

  var _find = find(function (n) {
    return n < 0;
  }),
      negPosition = _find.position,
      _find$value = _find.value,
      negValue = _find$value === void 0 ? 'n/a' : _find$value;

  setHtml('#negPosition', negPosition);
  setHtml('#negValue', negValue);

  var _find2 = find(function (n) {
    return n % 2 != 0;
  }),
      oddPosition = _find2.position,
      _find2$value = _find2.value,
      oddValue = _find2$value === void 0 ? 'n/a' : _find2$value;

  setHtml('#oddPosition', oddPosition);
  setHtml('#oddValue', oddValue);
}

function setHtml(selector, html) {
  var element = document.querySelector(selector);

  if (element) {
    element.innerHTML = html;
  }
}

function stats() {
  var sum = 0;

  for (var i in numbers) {
    sum += numbers[i];
  }

  return {
    sum: sum,
    average: sum / numbers.length
  };
}

function find(predicate) {
  var sum = 0;

  for (var i in numbers) {
    var num = numbers[i];

    if (predicate(num)) {
      return {
        position: i,
        value: num
      };
    }
  }

  return {
    position: -1
  };
}
//# sourceMappingURL=script.js.map
