"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displayProductDetail = displayProductDetail;
exports.displayProducts = displayProducts;
exports.displayTags = displayTags;
exports.doDisplayProductsForTag = doDisplayProductsForTag;
exports.getValue = getValue;
exports.readProductDetail = readProductDetail;
exports.setHtml = setHtml;
exports.setHtmlAll = setHtmlAll;
exports.setValue = setValue;

var _product = _interopRequireDefault(require("./product.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function readProductDetail() {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  var description = getValue('#description');
  var tags = getValue('#tags');
  var email = getValue('#email');
  var priceStr = getValue('#price');
  var price = parseFloat(priceStr).toFixed(2);
  var salesStr = getValue('#sales');
  var sales = parseInt(salesStr);
  return new _product["default"](id, description, tags, email, price, sales);
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

function displayTags(products) {
  setHtml('#tagArea', '');
  setHtml('#taggedProductsList', '');
  var allTags = new Set();

  var _iterator2 = _createForOfIteratorHelper(products),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var p = _step2.value;
      var productTags = p.tags.split(' ');

      var _iterator4 = _createForOfIteratorHelper(productTags),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var t = _step4.value;
          allTags.add(t);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  var tagArea = document.getElementById('tagArea');

  var _iterator3 = _createForOfIteratorHelper(allTags),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _t = _step3.value;
      tagArea.insertAdjacentHTML('beforeend', "<a href=\"#\">".concat(_t, "</a>"));
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
}

function doDisplayProductsForTag(e) {
  // The user clicked a tag inside the #taggedProductSuggestions element.
  // The #taggedProductSuggestions element itself is designated by e.currentTarget.
  // Get all the tags (i.e. <a> elements) inside the #taggedProductSuggestions element.
  var tagElements = e.currentTarget.getElementsByTagName('a'); // Highlight the tag the user actually clicked on.

  var _iterator5 = _createForOfIteratorHelper(tagElements),
      _step5;

  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var t = _step5.value;
      t.className = t == e.target ? 'tagSelected' : '';
    } // Display products that have this tag.

  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }

  var tagText = e.target.innerText;

  var productsForTag = _toConsumableArray(allProducts.values()).filter(function (p) {
    return p.hasTag(tagText);
  });

  displayProducts(productsForTag, '#taggedProductsList');
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
//# sourceMappingURL=userinterface.js.map
