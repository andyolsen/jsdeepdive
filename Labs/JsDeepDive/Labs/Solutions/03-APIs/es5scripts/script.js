"use strict";

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('submit').addEventListener('click', doSubmit);
});

function doSubmit() {
  setHtmlAll('.error', '');
  setHtmlAll('.valid', '');
  processAmount();
  processName();
  processCardNumber();
  processExpiryDate();
  processCvv();
}

function processAmount() {
  var amountStr = getValue('#amount');
  var amount = Number.parseFloat(amountStr);

  if (Number.isNaN(amount)) {
    setHtml('#amountError', 'Number required');
    return;
  }

  var amountPennies = Math.trunc(amount * 100);
  setHtml('#amountValid', "Amount in pennies is ".concat(amountPennies));
}

function processName() {
  var name = getValue('#name');

  if (name.length == 0) {
    setHtml('#nameError', 'Name required');
    return;
  }

  setHtml('#nameValid', name);
}

function processCardNumber() {
  var cardNumber = getValue('#cardNumber');
  cardNumber = cardNumber.replace(/-|\s|\./g, '');

  if (cardNumber.length != 16) {
    setHtml('#cardNumberError', 'Must be 16 digits');
    return;
  }

  var matches = cardNumber.match(/\d{4}/g);

  if (matches == null || matches.length != 4) {
    setHtml('#cardNumberError', 'Must be 16 digits');
    return;
  }

  if (!cardNumber.startsWith('4') && !cardNumber.startsWith('5')) {
    setHtml('#cardNumberError', 'Must start with 4 or 5');
    return;
  }

  setHtml('#cardNumberValid', "".concat(matches[0], "-").concat(matches[1], "-").concat(matches[2], "-").concat(matches[3]));
}

function processExpiryDate() {
  var expiryDate = getValue('#expiryDate');

  if (expiryDate.length != 4) {
    setHtml('#expiryDateError', 'Must be 4 digits');
    return;
  }

  var matches = expiryDate.match(/\d{2}/g);

  if (matches == null || matches.length != 2) {
    setHtml('#expiryDateError', 'Must be mmyy format');
    return;
  }

  var month = Number.parseInt(matches[0]);
  var year = Number.parseInt(matches[1]);

  if (month < 1 || month > 12) {
    setHtml('#expiryDateError', 'Invalid month');
    return;
  }

  if (year < 18 || year > 23) {
    setHtml('#expiryDateError', 'Invalid year');
    return;
  }

  setHtml('#expiryDateValid', "Month ".concat(month, ", year ").concat(year));
}

function processCvv() {
  var cvv = getValue('#cvv');

  if (cvv.search(/^\d{3}$/) == -1) {
    setHtml('#cvvError', 'Must be 3 digits');
    return;
  }

  setHtml('#cvvValid', cvv);
}
/* Helper functions */


function getValue(selector) {
  var element = document.querySelector(selector);
  return element ? element.value : '';
}

function setHtml(selector, html) {
  var element = document.querySelector(selector);

  if (element) {
    element.innerHTML = html;
  }
}

function setHtmlAll(selector, html) {
  var elements = document.querySelectorAll(selector);
  elements.forEach(function (e) {
    return e.innerHTML = html;
  });
}
//# sourceMappingURL=script.js.map
