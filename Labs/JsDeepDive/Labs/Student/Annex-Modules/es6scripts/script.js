let nextId = 1;

class Util {
    static pad(n) {
        return (n < 10) ? (`0${n}`) : n;
    }
}

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
    
    hasTag(tag) {
        const separateTags = this.tags.split(' ');
        return separateTags.filter(t => t == tag).length > 0;
    }
}

let allProducts = new Map();

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

    const product = allProducts.get(id);
    if (!product) {
        setHtml('#messageArea', `Product ${id} not found`, 'error');
    }
    else {
        setHtml('#messageArea', `Product ${id} found successfully`, 'valid');
    }
    displayProductDetail(product);
}

function doInsert() {

    const product = readProductDetail();
    allProducts.set(product.id, product);

	setHtml('#messageArea', `Product inserted successfully, id ${product.id}`, 'valid');
    displayProductDetail(product);

    displayProducts(allProducts.values());
    displayTags(allProducts.values());
}

function doUpdate() {

    const id = getValue('#id');

    let product = allProducts.get(id);
    if (!product) {
        setHtml('#messageArea', `Product ${id} not found`, 'error');
    }
    else {
        product = readProductDetail(id);
        allProducts.set(id, product);

        setHtml('#messageArea', `Product updated successfully, id ${product.id}`, 'valid');
        displayProductDetail(product);
        displayProducts(allProducts.values());
        displayTags(allProducts.values());
    }
}

function doDelete() {

    const id = getValue('#id');

    const product = allProducts.get(id);
    if (!product) {
        setHtml('#messageArea', `Product ${id} not found`, 'error');
    }
    else {
        allProducts.delete(id);

        setHtml('#messageArea', `Product deleted successfully, id ${product.id}`, 'valid');
        displayProducts(allProducts.values());
        displayTags(allProducts.values());
    }
    displayProductDetail(product);
}

function doDisplayProductsForTag(e) {

	// The user clicked a tag inside the #taggedProductSuggestions element.
	// The #taggedProductSuggestions element itself is designated by e.currentTarget.
	// Get all the tags (i.e. <a> elements) inside the #taggedProductSuggestions element.
	const tagElements = e.currentTarget.getElementsByTagName('a');
	
	// Highlight the tag the user actually clicked on.
	for (let t of tagElements) {
		t.className = (t == e.target) ? 'tagSelected' : '';
	}
	
	// Display products that have this tag.
    const tagText = e.target.innerText;    
    const productsForTag = [...allProducts.values()].filter(p => p.hasTag(tagText));
    displayProducts(productsForTag, '#taggedProductsList');
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

    setHtml('#tagArea', '');
    setHtml('#taggedProductsList', '');

    let allTags = new Set();    
    for (let p of products) {
        const productTags = p.tags.split(' ');
        for (let t of productTags) {
            allTags.add(t);
        }
    }
    
	const tagArea = document.getElementById('tagArea');
    for (let t of allTags) {
        tagArea.insertAdjacentHTML('beforeend', `<a href="#">${t}</a>`);
    }
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




 



