'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Util = function () {
    function Util() {
        _classCallCheck(this, Util);
    }

    _createClass(Util, null, [{
        key: 'pad',
        value: function pad(n) {
            return n < 10 ? '0' + n : n;
        }
    }]);

    return Util;
}();

var nextId = 1;
var allProducts = new Map();

var Product = function () {
    function Product(description, tags, email, price, sales) {
        _classCallCheck(this, Product);

        this.id = nextId++;
        this.description = description;
        this.tags = tags;
        this.email = email;
        this.price = price;
        this.sales = sales;
        this.ts = new Date();
    }

    _createClass(Product, [{
        key: 'toString',
        value: function toString() {
            // Build a formatted string containing everything except the timestamp.
            var descStr = this.description.toUpperCase().big().bold().fontcolor('orange');
            var str = '[' + this.id + '] ' + descStr + '<br/>\n                   Tags ' + this.tags + '<br/>\n                   Suggested by ' + this.email + '<br/>\n                   \xA3' + this.price + ' [projected sales ' + this.sales + ']<br/>';

            // Append the current date/time to the  string.
            var tsStr = this.ts.getDate() + '/' + (this.ts.getMonth() + 1) + '/' + this.ts.getFullYear() + ',    \n                       ' + Util.pad(this.ts.getHours()) + ':' + Util.pad(this.ts.getMinutes()) + ':' + Util.pad(this.ts.getSeconds());

            // Append the timestamp in blue.
            str += tsStr.fontcolor("blue");

            return str;
        }
    }]);

    return Product;
}();

$(document).ready(function () {
    $('#get').click(doGet);
    $('#insert').click(doInsert);
    $('#update').click(doUpdate);
    $('#delete').click(doDelete);
});

function doInsert() {

    var description = $('#description').val();
    var tags = $('#tags').val();
    var email = $('#email').val();

    var priceStr = $('#price').val();
    var price = parseFloat(priceStr).toFixed(2);

    var salesStr = $('#sales').val();
    var sales = parseInt(salesStr);

    var product = new Product(description, tags, email, price, sales);
    allProducts.set(product.id, product);

    displayProductDetails(product);
    displayProducts(allProducts);
}

function doGet() {
    // TODO.
}

function doUpdate() {
    // TODO.
}

function doDelete() {
    // TODO.
}

function displayProductDetails(product) {
    $('#id').val(product.id);
    $('#description').val(product.description);
    $('#tags').val(product.tags);
    $('#email').val(product.email);
    $('#price').val(product.price);
}

function displayProducts(products) {
    var targetElementName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'allProductsList';


    var str = '<ul>';
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = products.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _step$value = _slicedToArray(_step.value, 2),
                k = _step$value[0],
                v = _step$value[1];

            str += '<li>' + v.toString() + '</li>';
            console.log('Displayed product with key ' + k + ', value: ' + v.toString());
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    str += '</ul>';

    $('#' + targetElementName).html(str);
}
//# sourceMappingURL=SOLscript.js.map
