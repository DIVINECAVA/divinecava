//Object literal
// const person = {
//     name: 'DIVINE'
// };

// console.log(person);


//Person constructor
// function Person(){
//     this.name = 'CAVA'
// };

// const CAVA = new Person();

// console.log(CAVA);

// function Person(name, age){
//     this.name = name;
//     this.age = age;
// };

// const SAB = new Person('SAB', 28);
// const NIVIN = new Person('NIVIN', 16);

// console.log(SAB);
// console.log(NIVIN);


//Constructor and This Keyword
//Person constructor
function Person(name, dob){
    this.name = name;
    this.birthday = new Date(dob);
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
};

const nicko = new Person('DIVINE', '03/20/90');
const kicks = new Person('CAVA', '01/20/92');

console.log(DIVINE);
console.log(CAVA);
console.log(DIVINE.calculateAge());
console.log(CAVA.calculateAge());
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
