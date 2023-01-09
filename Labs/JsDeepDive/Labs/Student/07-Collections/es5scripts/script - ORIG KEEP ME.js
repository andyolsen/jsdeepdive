'use strict';

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

// TODO: Change allProducts from an array into a Map.
var allProducts = [];

var Product = function () {
    function Product(id, description, tags, email, price, sales) {
        _classCallCheck(this, Product);

        this.id = id ? id : 'PROD' + nextId++;
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

        // TODO, IF TIME PERMITS: 
        // Add a hasTag() function, which takes a tag as a parameter 
        // and returns true if the product has the specified tag, or false otherwise.

    }]);

    return Product;
}();

$(document).ready(function () {
    $('#get').click(doGet);
    $('#insert').click(doInsert);
    $('#update').click(doUpdate);
    $('#delete').click(doDelete);
    $('#taggedProductSuggestions').on('click', 'a', doDisplayProductsForTag);
});

function doGet() {
    // TODO: Implement this function, to get a product with the id entered by the user.
}

function doInsert() {

    var product = readProductDetail();

    // TODO: Modify this statement, so that it inserts the product into the map.
    allProducts.push(product);

    displayMessage('Product inserted successfully, id ' + product.id);
    displayProductDetail(product);

    // TODO: Modify the following two statements, so that they pass the map values into the functions.
    displayProducts(allProducts);
    displayTags(allProducts);
}

function doUpdate() {
    // TODO: Implement this function, to update a product with the id entered by the user.
}

function doDelete() {
    // TODO: Implement this function, to delete a product with the id entered by the user.
}

function displayMessage(message) {
    var success = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var cssClass = success ? 'valid' : 'error';
    $('#messageArea').removeClass().addClass(cssClass).html(message);
}

function readProductDetail() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;


    var description = $('#description').val();
    var tags = $('#tags').val();
    var email = $('#email').val();

    var priceStr = $('#price').val();
    var price = parseFloat(priceStr).toFixed(2);

    var salesStr = $('#sales').val();
    var sales = parseInt(salesStr);

    return new Product(id, description, tags, email, price, sales);
}

function displayProductDetail() {
    var product = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;


    if (!product) {
        $('#productDetail input').val('');
    } else {
        $('#id').val(product.id);
        $('#description').val(product.description);
        $('#tags').val(product.tags);
        $('#email').val(product.email);
        $('#price').val(product.price);
        $('#sales').val(product.sales);
        $('#lastUpdated').val(product.ts);
    }
}

function displayProducts(products) {
    var targetElementName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'allProductsList';

    var str = '<ul>';
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = products[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var p = _step.value;

            str += '<li>' + p.toString() + '</li>';
            console.log('Displayed product ' + p.toString());
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

function displayTags(products) {
    // TODO, IF TIME PERMITS: Implement this function, to display all tags for all products (no duplicates).
}

function doDisplayProductsForTag(e) {
    // TODO, IF TIME PERMITS: Implement this function, to display products that match a selected tag.
}
//# sourceMappingURL=script - ORIG KEEP ME.js.map
