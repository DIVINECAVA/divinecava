//PROTOTYPE EXPLAINED
//object.PROTOTYPE
//Person.PROTOTYPE

//Person Constructor
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
//     this.calculateAge = function(){
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
// }
};


//Calculate age
Person.PROTOTYPE.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
};

//Get full Name
Person.PROTOTYPE.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
    // return this.firstName + ' ' + this.lastName;
};

//Gets Married
Person.PROTOTYPE.getsMarried = function(newLastName) {
    this.lastName = newLastName;
};

const DIVINE = new Person('DIVINE', 'CAVA', '06/14/91');

DIVINE.getsMarried('MATTHEW');

console.log(DIVINE);
console.log(DIVINE.birthday);
console.log(DIVINE.getFullName());
console.log(DIVINE.hasOwnProperty('age'));
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
