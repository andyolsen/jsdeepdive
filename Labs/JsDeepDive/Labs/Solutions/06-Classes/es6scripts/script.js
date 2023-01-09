class Util {
	static pad(n) {
		return (n < 10) ? (`0${n}`) : n;
	}
} 

class Product {

    constructor(description, email, price, sales) {
        this.description = description
        this.email = email
        this.price = price
        this.sales = sales
        this.ts = new Date()
    }

    toString() {
		// Build a formatted string containing everything except the timestamp.
		let str = this.description.toUpperCase().big().bold().fontcolor('orange') + `<br/>
									Suggested by ${this.email}<br/>
									£${this.price} [projected sales ${this.sales}]<br/>`

		// Append the current date/time to the  string.
		const tsStr = `${this.ts.getDate()}/${this.ts.getMonth() + 1}/${this.ts.getFullYear()},    
					   ${Util.pad(this.ts.getHours())}:${Util.pad(this.ts.getMinutes())}:${Util.pad(this.ts.getSeconds())}`
		
		// Append the timestamp in blue.
		str += tsStr.fontcolor("blue")
		
		return str
    }
}

const allProducts = [];

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('add').addEventListener('click', doAdd);
    
    document.getElementById('sort').addEventListener('click', () => {
		allProducts.sort( (p1, p2) => {
			if (p1.description < p2.description)
				return -1
			else if (p1.description > p2.description)
				return +1
			else 
				return 0
		})
        displayProducts(allProducts);
    });
    
    document.getElementById('reverse').addEventListener('click', () => {
		allProducts.reverse();
        displayProducts(allProducts);
    });    
    
    document.getElementById('repeat').addEventListener('click', () => {
		allProducts.push('Dummy')
		allProducts.copyWithin(allProducts.length-1, allProducts.length-2) 
        displayProducts(allProducts);
    });    
	
    document.getElementById('search').addEventListener('click', doSearch);
    document.getElementById('findFirst').addEventListener('click', doFindFirst);
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

    // Create a new Product object with the data garnered from the form.
    let product = new Product(description, email, price, sales);

    // Add this Product object to the global array of all products.
    allProducts.push(product);

    // Redisplay all the products.
    displayProducts(allProducts);
}

function displayProducts(products, targetElement='allProductsList') {

    let str = '<ul>';
    for (let [i,p] of products.entries()) {
        str += `<li>${p.toString()}</li>`;
		console.log(`Displayed product at position ${i}, details: ${p.toString()}`)
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
    allProducts.forEach(p => {
        if (re.test(p.description)) {
            matchingProducts.push(p);
        }
    });

    // Display the array of matching product suggestions.
    displayProducts(matchingProducts, 'matchingProductsList');
}

function doFindFirst() {

    // Create a RegExp object, based on the search string entered by the user.
    const searchString = document.getElementById('searchString').value;
    const re = new RegExp(searchString, 'i');

    const matchingProduct = allProducts.find(p => re.test(p.description));
	if (matchingProduct !== undefined) {
		displayProducts([matchingProduct], 'matchingProductsList');
	} 
	else {
		displayProducts([], 'matchingProductsList');
		alert(`No product found matching ${searchString}`);
	}
}