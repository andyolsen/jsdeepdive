"use strict";

var promiseCount = 0;

function doIt() {
  var thisPromiseCount = ++promiseCount;
  displayMessage('info', "Promise ".concat(thisPromiseCount, ", sync code started"));
  var p1 = new Promise(function (resolve, reject) {
    var rand = Math.random();
    displayMessage('info', "Promise ".concat(thisPromiseCount, ", async code started, random number is ").concat(rand));
    window.setTimeout(function () {
      if (rand < 0.5) resolve("Promise ".concat(thisPromiseCount, ", resolved"));else reject("Promise ".concat(thisPromiseCount, ", rejected"));
    }, rand * 5000 + 1000);
  }); // Handle Promise completion - then() handles successful resolution, catch() handles rejection.

  p1.then(function (val) {
    return displayMessage('resolved', val);
  })["catch"](function (reason) {
    return displayMessage('rejected', reason);
  });
  displayMessage('info', "Promise ".concat(thisPromiseCount, ", sync code ended"));
}

function displayMessage(cssClass, message) {
  var messageArea = document.getElementById('messageArea');
  messageArea.insertAdjacentHTML('beforeend', "<div class=\"".concat(cssClass, "\">").concat(message, "</div>"));
}
//# sourceMappingURL=script.js.map
