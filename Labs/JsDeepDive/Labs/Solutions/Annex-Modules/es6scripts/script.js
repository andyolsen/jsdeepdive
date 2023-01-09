import Product from './product.js';
import {readProductDetail, displayProductDetail, displayProducts, displayTags} from './userinterface.js';
import {getValue, setValue, setHtml, setHtmlAll} from './userinterface.js';
 
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
