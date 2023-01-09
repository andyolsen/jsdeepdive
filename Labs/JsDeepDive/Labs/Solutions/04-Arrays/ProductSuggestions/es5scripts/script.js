"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var allProducts = [];
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('add').addEventListener('click', doAdd);
  document.getElementById('sort').addEventListener('click', function () {
    allProducts.sort();
    displayProducts(allProducts);
  });
  document.getElementById('reverse').addEventListener('click', function () {
    allProducts.reverse();
    displayProducts(allProducts);
  });
  document.getElementById('repeat').addEventListener('click', function () {
    allProducts.push('Dummy');
    allProducts.copyWithin(allProducts.length - 1, allProducts.length - 2);
    displayProducts(allProducts);
  });
  document.getElementById('search').addEventListener('click', doSearch);
  document.getElementById('findFirst').addEventListener('click', doFindFirst);
});

function doAdd() {
  // Get the product suggestion (text).
  var description = document.getElementById('description').value; // Get the user's email address (text).

  var email = document.getElementById('email').value; // Get the recommended price (float).

  var priceStr = document.getElementById('price').value;
  var price = parseFloat(priceStr).toFixed(2); // Get the estimated sales/year (int).

  var salesStr = document.getElementById('sales').value;
  var sales = parseInt(salesStr); // Build a formatted string for this product suggestion.

  var product = description.toUpperCase().big().bold().fontcolor('orange') + "<br/>\n                                Suggested by ".concat(email, "<br/>\n                                \xA3").concat(price, " [projected sales ").concat(sales, "]<br/>"); // Append the current date/time to the product string.

  var ts = new Date();
  var tsStr = "".concat(ts.getDate(), "/").concat(ts.getMonth() + 1, "/").concat(ts.getFullYear(), ",    \n                   ").concat(pad(ts.getHours()), ":").concat(pad(ts.getMinutes()), ":").concat(pad(ts.getSeconds()));
  product += tsStr.fontcolor('blue'); // Add this product to the global array of all products.

  allProducts.push(product); // Redisplay all the products.

  displayProducts(allProducts);
}

function displayProducts(products) {
  var targetElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'allProductsList';
  var str = '<ul>';

  var _iterator = _createForOfIteratorHelper(products.entries()),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
          i = _step$value[0],
          p = _step$value[1];

      str += "<li>".concat(p, "</li>");
      console.log("Displayed product at position ".concat(i, ", details: ").concat(p));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  str += '</ul>';
  document.getElementById(targetElement).innerHTML = str;
}

function doSearch() {
  // Create a RegExp object, based on the search string entered by the user.
  var searchString = document.getElementById('searchString').value;
  var re = new RegExp(searchString, 'i'); // Create an array that contains all the products that match the search string.

  var matchingProducts = [];
  allProducts.forEach(function (p) {
    if (re.test(p)) {
      matchingProducts.push(p);
    }
  }); // Display the array of matching product suggestions.

  displayProducts(matchingProducts, 'matchingProductsList');
}

function doFindFirst() {
  // Create a RegExp object, based on the search string entered by the user.
  var searchString = document.getElementById('searchString').value;
  var re = new RegExp(searchString, 'i');
  var matchingProduct = allProducts.find(function (p) {
    return re.test(p);
  });

  if (matchingProduct !== undefined) {
    displayProducts([matchingProduct], 'matchingProductsList');
  } else {
    displayProducts([], 'matchingProductsList');
    alert("No product found matching ".concat(searchString));
  }
}

function pad(n) {
  return n < 10 ? "0".concat(n) : n;
}
//# sourceMappingURL=script.js.map
