"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _util = _interopRequireDefault(require("./util.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var nextId = 1;

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

      var tsStr = "".concat(this.ts.getDate(), "/").concat(this.ts.getMonth() + 1, "/").concat(this.ts.getFullYear(), ",    \n                       ").concat(_util["default"].pad(this.ts.getHours()), ":").concat(_util["default"].pad(this.ts.getMinutes()), ":").concat(_util["default"].pad(this.ts.getSeconds())); // Append the timestamp in blue.

      str += tsStr.fontcolor("blue");
      return str;
    }
  }, {
    key: "hasTag",
    value: function hasTag(tag) {
      var separateTags = this.tags.split(' ');
      return separateTags.filter(function (t) {
        return t == tag;
      }).length > 0;
    }
  }]);

  return Product;
}();

exports["default"] = Product;
//# sourceMappingURL=product.js.map
