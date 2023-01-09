"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Util = /*#__PURE__*/function () {
  function Util() {
    _classCallCheck(this, Util);
  }

  _createClass(Util, null, [{
    key: "pad",
    value: function pad(n) {
      return n < 10 ? "0".concat(n) : n;
    }
  }]);

  return Util;
}();

var nextId = 1; // TODO: Change allProducts from an array into a Map.

var allProducts = [];

var Product = /*#__PURE__*/function () {
  function Product(id, description, tags, email, price, sales) {
    _classCallCheck(this, Product);

    this.id = id ? id : "PROD".concat(nextId++);
    this.description = description;
    this.tags = tags;
    this.email = email;
    this.price = price;
    this.sales = sales;
    this.ts = new Date();
  }

  _createClass(Product, [{
    key: "toString",
    value: function toString() {
      // Build a formatted string containing everything except the timestamp.
      var descStr = this.description.toUpperCase().big().bold().fontcolor('orange');
      var str = "[".concat(this.id, "] ").concat(descStr, "<br/>\n                   Tags ").concat(this.tags, "<br/>\n                   Suggested by ").concat(this.email, "<br/>\n                   \xA3").concat(this.price, " [projected sales ").concat(this.sales, "]<br/>"); // Append the current date/time to the  string.

      var tsStr = "".concat(this.ts.getDate(), "/").concat(this.ts.getMonth() + 1, "/").concat(this.ts.getFullYear(), ",    \n                       ").concat(Util.pad(this.ts.getHours()), ":").concat(Util.pad(this.ts.getMinutes()), ":").concat(Util.pad(this.ts.getSeconds())); // Append the timestamp in blue.

      str += tsStr.fontcolor("blue");
      return str;
    } // TODO, IF TIME PERMITS: 
    // Add a hasTag() function, which takes a tag as a parameter 
    // and returns true if the product has the specified tag, or false otherwise.

  }]);

  return Product;
}();

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('get').addEventListener('click', doGet);
  document.getElementById('insert').addEventListener('click', doInsert);
  document.getElementById('update').addEventListener('click', doUpdate);
  document.getElementById('delete').addEventListener('click', doDelete); // For the #taggedProductSuggestions element, handle the bubbled 'click' event from any descendent elements.

  document.getElementById('taggedProductSuggestions').addEventListener('click', doDisplayProductsForTag, false);
});

function doGet() {
  var id = getValue('#id'); // TODO: Complete this function, to get a product with the id entered by the user.
}

function doInsert() {
  var product = readProductDetail(); // TODO: Modify this statement, so that it inserts the product into the map.

  allProducts.push(product);
  setHtml('#messageArea', "Product inserted successfully, id ".concat(product.id), 'valid');
  displayProductDetail(product); // TODO: Modify the following two statements, so that they pass the map values into the functions.

  displayProducts(allProducts);
  displayTags(allProducts);
}

function doUpdate() {
  var id = getValue('#id'); // TODO: Complete this function, to update a product with the id entered by the user.
}

function doDelete() {
  var id = getValue('#id'); // TODO: Complete this function, to delete a product with the id entered by the user.
}

function readProductDetail() {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  var description = getValue('#description');
  var tags = getValue('#tags');
  var email = getValue('#email');
  var priceStr = getValue('#price');
  var price = parseFloat(priceStr).toFixed(2);
  var salesStr = getValue('#sales');
  var sales = parseInt(salesStr);
  return new Product(id, description, tags, email, price, sales);
}

function displayProductDetail() {
  var product = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

  if (!product) {
    setValue('#productDetail input', '');
  } else {
    setValue('#id', product.id);
    setValue('#description', product.description);
    setValue('#tags', product.tags);
    setValue('#email', product.email);
    setValue('#price', product.price);
    setValue('#sales', product.sales);
    setValue('#lastUpdated', product.ts);
  }
}

function displayProducts(products) {
  var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#allProductsList';
  var str = '<ul>';

  var _iterator = _createForOfIteratorHelper(products),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var p = _step.value;
      str += "<li>".concat(p.toString(), "</li>");
      console.log("Displayed product ".concat(p.toString()));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  str += '</ul>';
  setHtml(selector, str);
}

function displayTags(products) {// TODO, IF TIME PERMITS: Implement this function, to display all tags for all products (no duplicates).
}

function doDisplayProductsForTag(e) {// TODO, IF TIME PERMITS: Implement this function, to display products that match a selected tag.
}
/* Helper functions */


function getValue(selector) {
  var element = document.querySelector(selector);
  return element ? element.value : '';
}

function setValue(selector, value) {
  var element = document.querySelector(selector);

  if (element) {
    element.value = value;
  }
}

function setHtml(selector, html) {
  var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  var element = document.querySelector(selector);

  if (element) {
    element.innerHTML = html;

    if (className) {
      element.className = className;
    }
  }
}

function setHtmlAll(selector, html) {
  var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  var elements = document.querySelectorAll(selector);
  elements.forEach(function (e) {
    e.innerHTML = html;

    if (className) {
      e.className = className;
    }
  });
}
//# sourceMappingURL=script.js.map
