import Product from './product.js';

export function readProductDetail(id=undefined) {

    const description = getValue('#description');
    const tags = getValue('#tags');
    const email = getValue('#email');

    const priceStr = getValue('#price');
    const price = parseFloat(priceStr).toFixed(2);

    const salesStr = getValue('#sales');
    const sales = parseInt(salesStr);

    return new Product(id, description, tags, email, price, sales);
}

export function displayProductDetail(product=undefined) {

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

export function displayProducts(products, selector='#allProductsList') {
    let str = '<ul>';
    for (let p of products) {
        str += `<li>${p.toString()}</li>`;
        console.log(`Displayed product ${p.toString()}`);
    }
    str += '</ul>';
    setHtml(selector, str);
}

export function displayTags(products) {

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

export function doDisplayProductsForTag(e) {

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

/* Helper functions */
export function getValue(selector) {
	const element = document.querySelector(selector);
	return element ? element.value : '';
}

export function setValue(selector, value) {
	const element = document.querySelector(selector);
	if (element) {
		element.value = value;
	}
}

export function setHtml(selector, html, className=undefined) {
	const element = document.querySelector(selector);
	if (element) {
		element.innerHTML = html;
		if (className) {
			element.className = className;
		}
	}
}

export function setHtmlAll(selector, html, className=undefined) {
	const elements = document.querySelectorAll(selector);
	elements.forEach(e => {
		e.innerHTML = html;
		if (className) {
			e.className = className;
		}
	})
}
