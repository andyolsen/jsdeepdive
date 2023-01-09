class Person {

    constructor(name, skills, contacts) {
        this.name = name;
        this.skills = skills;
        this.contacts = contacts;
    }
}

// TODO: Define the FieldExpander class here.




// Client code.
const people = [
    new Person('Mark Matthews', 'ES6 Java Angular C# ASP.NET Woodwork', 'mm@acme.com #mmacme 555-111-2222'),
    new Person('Jonathon Luke', 'C++ Python PHP Java C#', 'jl@swans.com 555-123-4567'),
];

const fe = new FieldExpander(people, 'skills');
for (let f of fe.values()) {
    console.log(f);
}