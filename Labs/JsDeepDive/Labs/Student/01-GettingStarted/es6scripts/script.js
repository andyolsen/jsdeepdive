var allProducts = [];
 
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('add').addEventListener('click', doAdd);
    document.getElementById('sort').addEventListener('click', doSort);
    document.getElementById('reverse').addEventListener('click', doReverse);
	document.getElementById('search').addEventListener('click', doSearch);
});

function doAdd() {

    // Get the product suggestion (text).
    var description = document.getElementById('description').value;

    // Get the user's email address (text).
    var email = document.getElementById('email').value;

    // Get the recommended price (float).
    var priceStr = document.getElementById('price').value;
    var price = parseFloat(priceStr).toFixed(2);

    // Get the estimated sales/year (int).
    var salesStr = document.getElementById('sales').value;
    var sales = parseInt(salesStr);

    // Build a formatted string for this product suggestion.
    var product = description.toUpperCase().big().bold().fontcolor('orange') + '<br/>'
                                + 'Suggested by ' + email + '<br/>'
                                + '£' + price + ' [projected sales ' + sales + ']<br/>';

    // Append the current date/time to the product string.
    var ts = new Date();
    var tsStr = ts.getDate() + '/' + (ts.getMonth() + 1) + '/' + ts.getFullYear() + ', ' +
                pad(ts.getHours()) + ':' + pad(ts.getMinutes()) + ':' + pad(ts.getSeconds());
    product += tsStr.fontcolor('blue');

    // Add this product to the global array of all products.
    allProducts.push(product);

    // Redisplay all the products.
    displayProducts(allProducts, 'allProductsList');
}

function displayProducts(products, targetElement) {

    var str = '<ul>';
    for (var i in products) {
        str += '<li>' + products[i] + '</li>';
    }
    str += '</ul>';

    document.getElementById(targetElement).innerHTML = str;
}

function doSort() {
    allProducts.sort();
    displayProducts(allProducts, 'allProductsList');
}

function doReverse() {
    allProducts.reverse();
    displayProducts(allProducts, 'allProductsList');
}

function doSearch() {

    // Create a RegExp object, based on the search string entered by the user.
    var searchString = document.getElementById('searchString').value;
    var re = new RegExp(searchString, 'i');

    // Create an array that contains all the products that match the search string.
    var matchingProducts = []
    for (var i in allProducts) {

        // Get the next product from the global array.
        var curr = allProducts[i];

        // If it matches the search string, add it into the array of matches.
        if (re.test(curr)) {
            matchingProducts.push(curr);
        }
    }

    // Display the array of matching product suggestions.
    displayProducts(matchingProducts, 'matchingProductsList');
}

function pad(n) {
    return (n < 10) ? ('0' + n) : n;
}