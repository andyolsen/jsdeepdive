class Person {

    constructor(name, skills, contacts) {
        this.name = name;
        this.skills = skills;
        this.contacts = contacts;
    }
}

class FieldExpander {

    constructor(items, fieldName, separator=' ') {
        this.items = items;
        this.fieldName = fieldName;
        this.separator = separator;
    }

    * values() {

        let uniqueValues = new Set();

        for (let item of this.items) {

            const fieldValue = item[this.fieldName];
            const splitFieldValue = fieldValue.split(this.separator);

            for (let v of splitFieldValue) {
                uniqueValues.add(v);
            }
        }            

        for (let uv of uniqueValues) {
            yield uv;
        }
    }
}

 
const people = [
    new Person('Mark Matthews', 'ES6 Java Angular C# ASP.NET Woodwork', 'mm@acme.com #mmacme 555-111-2222'),
    new Person('Jonathon Luke', 'C++ Python PHP Java C#', 'jl@swans.com 555-123-4567'),
];

const fe = new FieldExpander(people, 'skills');
for (let f of fe.values()) {
    console.log(f);
}



