//Prototype Inheritance
//Person constructor
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
};


//Greeting
Person.PROTOTYPE.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
};

const person1 = new Person('DIVINE', 'CAVA');

console.log(person1.greeting());


//Customer constructor
function Customer(firstName, lastName, phone, membership){
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
};


//Inherit the person prototype methods
Customer.PROTOTYPE = Object.create(Person.PROTOTYPE);


//Make customer .prototype return Customer
Customer.PROTOTYPE.constructor = Customer;


//Create Customer
const customer1 = new Customer('ALDRICH', 'MATTHEW', '09275160995', 'GOLD');

console.log(customer1.greeting());
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
