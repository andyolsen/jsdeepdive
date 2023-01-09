import Util from './util.js';

let nextId = 1;

export default class Product {

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
