"use strict";

var _product = _interopRequireDefault(require("./product.js"));

var _userinterface = require("./userinterface.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var allProducts = new Map();
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('get').addEventListener('click', doGet);
  document.getElementById('insert').addEventListener('click', doInsert);
  document.getElementById('update').addEventListener('click', doUpdate);
  document.getElementById('delete').addEventListener('click', doDelete); // For the #taggedProductSuggestions element, handle the bubbled 'click' event from any descendent elements.

  document.getElementById('taggedProductSuggestions').addEventListener('click', doDisplayProductsForTag, false);
});

function doGet() {
  var id = (0, _userinterface.getValue)('#id');
  var product = allProducts.get(id);

  if (!product) {
    (0, _userinterface.setHtml)('#messageArea', "Product ".concat(id, " not found"), 'error');
  } else {
    (0, _userinterface.setHtml)('#messageArea', "Product ".concat(id, " found successfully"), 'valid');
  }

  (0, _userinterface.displayProductDetail)(product);
}

function doInsert() {
  var product = (0, _userinterface.readProductDetail)();
  allProducts.set(product.id, product);
  (0, _userinterface.setHtml)('#messageArea', "Product inserted successfully, id ".concat(product.id), 'valid');
  (0, _userinterface.displayProductDetail)(product);
  (0, _userinterface.displayProducts)(allProducts.values());
  (0, _userinterface.displayTags)(allProducts.values());
}

function doUpdate() {
  var id = (0, _userinterface.getValue)('#id');
  var product = allProducts.get(id);

  if (!product) {
    (0, _userinterface.setHtml)('#messageArea', "Product ".concat(id, " not found"), 'error');
  } else {
    product = (0, _userinterface.readProductDetail)(id);
    allProducts.set(id, product);
    (0, _userinterface.setHtml)('#messageArea', "Product updated successfully, id ".concat(product.id), 'valid');
    (0, _userinterface.displayProductDetail)(product);
    (0, _userinterface.displayProducts)(allProducts.values());
    (0, _userinterface.displayTags)(allProducts.values());
  }
}

function doDelete() {
  var id = (0, _userinterface.getValue)('#id');
  var product = allProducts.get(id);

  if (!product) {
    (0, _userinterface.setHtml)('#messageArea', "Product ".concat(id, " not found"), 'error');
  } else {
    allProducts["delete"](id);
    (0, _userinterface.setHtml)('#messageArea', "Product deleted successfully, id ".concat(product.id), 'valid');
    (0, _userinterface.displayProducts)(allProducts.values());
    (0, _userinterface.displayTags)(allProducts.values());
  }

  (0, _userinterface.displayProductDetail)(product);
}

function doDisplayProductsForTag(e) {
  // The user clicked a tag inside the #taggedProductSuggestions element.
  // The #taggedProductSuggestions element itself is designated by e.currentTarget.
  // Get all the tags (i.e. <a> elements) inside the #taggedProductSuggestions element.
  var tagElements = e.currentTarget.getElementsByTagName('a'); // Highlight the tag the user actually clicked on.

  var _iterator = _createForOfIteratorHelper(tagElements),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var t = _step.value;
      t.className = t == e.target ? 'tagSelected' : '';
    } // Display products that have this tag.

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var tagText = e.target.innerText;

  var productsForTag = _toConsumableArray(allProducts.values()).filter(function (p) {
    return p.hasTag(tagText);
  });

  (0, _userinterface.displayProducts)(productsForTag, '#taggedProductsList');
}
//# sourceMappingURL=script.js.map
