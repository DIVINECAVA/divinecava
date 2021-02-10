const firstName = 'Divine';
const lastName = 'Cava';
const age = 29;
const str = 'Im Divine Cava';
const tags = 'Web development, Web Creative Design';

let val;

val = firstName + lastName; //concatenation *no space
console.log(val);

val = firstName + ' ' + lastName;  //with space using ' '
console.log(val);

val = 'Divine'; //append
val += 'Cava';
console.log(val);

val = 'Hi im ' + firstName + ' and I am ' + age + ' years old.';
console.log(val);

val = "I am waiting" //escaping using double quotes to use a single quote
console.log(val);

val = firstName.length; //string length
console.log(val);

val = firstName.concat(' ', lastName); //concat()
console.log(val);

val = firstName.toUpperCase(); //CAPSLOCKKKKKKK uppercase
console.log(val);

val = firstName.toLowerCase(); //lowercase
console.log(val);

val = firstName[3]; //index
console.log(val);

val = lastName.indexOf('n'); //indexof
console.log(val);

val = firstName.lastIndexOf('k');
console.log(val);

val = firstName.charAt('3'); //charAt()
console.log(val);

val = firstName.substring(0 , 4); //substring from start to end *end not included
console.log(val);

val = firstName.slice(0 , 3); //slice()
console.log(val);

val = firstName.slice(-2);
console.log(val);

val = str.split(' ');  //split()
console.log(val);

val = str.split(',');
console.log(val);

val = str.replace('Nivin', 'Kody'); //replace()
console.log(val);

val = str.includes('training program'); //includes() *returns as boolean
console.log(val);

val = str.includes('Cava');
console.log(val);