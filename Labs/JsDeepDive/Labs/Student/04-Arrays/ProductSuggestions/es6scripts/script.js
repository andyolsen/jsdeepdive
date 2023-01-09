const allProducts = []; 

document.addEventListener('DOMContentLoaded', () => {
	
    document.getElementById('add').addEventListener('click', doAdd);
    
    document.getElementById('sort').addEventListener('click', () => {
        allProducts.sort();
        displayProducts(allProducts);
    });
    
    document.getElementById('reverse').addEventListener('click', () => {
		allProducts.reverse();
        displayProducts(allProducts);
    });    
    
    document.getElementById('search').addEventListener('click', doSearch);
});

function doAdd() {

    // Get the product suggestion (text).
    const description = document.getElementById('description').value;

    // Get the user's email address (text).
    const email = document.getElementById('email').value;

    // Get the recommended price (float).
    const priceStr = document.getElementById('price').value;
    const price = parseFloat(priceStr).toFixed(2);

    // Get the estimated sales/year (int).
    const salesStr = document.getElementById('sales').value;
    const sales = parseInt(salesStr);

    // Build a formatted string for this product suggestion.
    let product = description.toUpperCase().big().bold().fontcolor('orange') + `<br/>
                                Suggested by ${email}<br/>
                                £${price} [projected sales ${sales}]<br/>`;

    // Append the current date/time to the product string.
    const ts = new Date();
    const tsStr = `${ts.getDate()}/${ts.getMonth() + 1}/${ts.getFullYear()},    
                   ${pad(ts.getHours())}:${pad(ts.getMinutes())}:${pad(ts.getSeconds())}`;
    product += tsStr.fontcolor('blue');

    // Add this product to the global array of all products.
    allProducts.push(product);

    // Redisplay all the products.
    displayProducts(allProducts);
}

function displayProducts(products, targetElement='allProductsList') {

    let str = '<ul>';
    for (var i in products) {
        str += `<li>${products[i]}</li>`;
    }
    str += '</ul>';

    document.getElementById(targetElement).innerHTML = str;
}

function doSearch() {

    // Create a RegExp object, based on the search string entered by the user.
    const searchString = document.getElementById('searchString').value;
    const re = new RegExp(searchString, 'i');

    // Create an array that contains all the products that match the search string.
    const matchingProducts = []
    for (let i in allProducts) {

        // Get the next product from the global array.
        const curr = allProducts[i];

        // If it matches the search string, add it into the array of matches.
        if (re.test(curr)) {
            matchingProducts.push(curr);
        }
    }

    // Display the array of matching product suggestions.
    displayProducts(matchingProducts, 'matchingProductsList');
}

function pad(n) {
    return (n < 10) ? (`0${n}`) : n;
}