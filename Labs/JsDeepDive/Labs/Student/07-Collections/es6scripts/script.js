class Util {
    static pad(n) {
        return (n < 10) ? (`0${n}`) : n;
    }
}

let nextId = 1;

// TODO: Change allProducts from an array into a Map.
let allProducts = [];

class Product {

    constructor(id, description, tags, email, price, sales) {
        this.id = id ? id : `PROD${nextId++}`;
        this.description = description;
        this.tags = tags;
        this.email = email;
        this.price = price;
        this.sales = sales;
        this.ts = new Date();
    }

    toString() {
        // Build a formatted string containing everything except the timestamp.
        let descStr = this.description.toUpperCase().big().bold().fontcolor('orange');
        let str = `[${this.id}] ${descStr}<br/>
                   Tags ${this.tags}<br/>
                   Suggested by ${this.email}<br/>
                   £${this.price} [projected sales ${this.sales}]<br/>`;

        // Append the current date/time to the  string.
        const tsStr = `${this.ts.getDate()}/${this.ts.getMonth() + 1}/${this.ts.getFullYear()},    
                       ${Util.pad(this.ts.getHours())}:${Util.pad(this.ts.getMinutes())}:${Util.pad(this.ts.getSeconds())}`;
        
        // Append the timestamp in blue.
        str += tsStr.fontcolor("blue");
        
        return str;
    }
    
    // TODO, IF TIME PERMITS: 
    // Add a hasTag() function, which takes a tag as a parameter 
    // and returns true if the product has the specified tag, or false otherwise.

}

document.addEventListener('DOMContentLoaded', () => {
    
	document.getElementById('get').addEventListener('click', doGet);
	document.getElementById('insert').addEventListener('click', doInsert);
	document.getElementById('update').addEventListener('click', doUpdate);
	document.getElementById('delete').addEventListener('click', doDelete);
	
	// For the #taggedProductSuggestions element, handle the bubbled 'click' event from any descendent elements.
	document.getElementById('taggedProductSuggestions').addEventListener('click', doDisplayProductsForTag, false);
});

function doGet() {

    const id = getValue('#id');

    // TODO: Complete this function, to get a product with the id entered by the user.
	
}

function doInsert() {

    const product = readProductDetail();

    // TODO: Modify this statement, so that it inserts the product into the map.
    allProducts.push(product);

	setHtml('#messageArea', `Product inserted successfully, id ${product.id}`, 'valid');
    displayProductDetail(product);

    // TODO: Modify the following two statements, so that they pass the map values into the functions.
    displayProducts(allProducts);
    displayTags(allProducts);
}

function doUpdate() {

    const id = getValue('#id');

    // TODO: Complete this function, to update a product with the id entered by the user.
	
}

function doDelete() {
    
	const id = getValue('#id');

    // TODO: Complete this function, to delete a product with the id entered by the user.
	
}

function readProductDetail(id=undefined) {

    const description = getValue('#description');
    const tags = getValue('#tags');
    const email = getValue('#email');

    const priceStr = getValue('#price');
    const price = parseFloat(priceStr).toFixed(2);

    const salesStr = getValue('#sales');
    const sales = parseInt(salesStr);

    return new Product(id, description, tags, email, price, sales);
}

function displayProductDetail(product=undefined) {

    if (!product) {
        setValue('#productDetail input', '');
    }
    else {
        setValue('#id', product.id);
        setValue('#description', product.description);
        setValue('#tags', product.tags);
        setValue('#email', product.email);
        setValue('#price', product.price);
        setValue('#sales', product.sales);
        setValue('#lastUpdated', product.ts);
    }
}

function displayProducts(products, selector='#allProductsList') {
    let str = '<ul>';
    for (let p of products) {
        str += `<li>${p.toString()}</li>`;
        console.log(`Displayed product ${p.toString()}`);
    }
    str += '</ul>';
    setHtml(selector, str);
}

function displayTags(products) {
    // TODO, IF TIME PERMITS: Implement this function, to display all tags for all products (no duplicates).
	
}

function doDisplayProductsForTag(e) {
    // TODO, IF TIME PERMITS: Implement this function, to display products that match a selected tag.
	
}

/* Helper functions */
function getValue(selector) {
	const element = document.querySelector(selector);
	return element ? element.value : '';
}

function setValue(selector, value) {
	const element = document.querySelector(selector);
	if (element) {
		element.value = value;
	}
}

function setHtml(selector, html, className=undefined) {
	const element = document.querySelector(selector);
	if (element) {
		element.innerHTML = html;
		if (className) {
			element.className = className;
		}
	}
}

function setHtmlAll(selector, html, className=undefined) {
	const elements = document.querySelectorAll(selector);
	elements.forEach(e => {
		e.innerHTML = html;
		if (className) {
			e.className = className;
		}
	})
}


