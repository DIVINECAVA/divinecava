const num1 = [34, 44, 15, 76, 11, 69 , 21]; //literal method
const num2 = new Array(1, 2, 3, 4, 5, 6, 7); //instanciate 
const fruits = ['Strawberry, Blueberry, Cherry, Mango'] //string array
const mixed = ['Strawberry', 30, 'Pesos', 'Discount', 5, true, undefined, null, {a: 1, b: 2}]; //mixed of all types

let value;

value = mixed.length // length of the array *method blue
console.log(value);

value = Array.isArray(fruits) //check if array *constructor object green
console.log(value);

value = num2[0]; //single value
console.log(value);

num2[7] = 7.5; //insert 
console.log(num2);

value = num1.indexOf(15); //indexOf finding index value
console.log(value);

//Mutating Arrays

num1.push(99999); //add to end .push
console.log(num1);

num1.unshift(0); //add to start .unshift
console.log(num1);

num1.pop(); //remove last element from an array *bye 99999
console.log(num1);

num1.shift(); //remove from start *bye 0
console.log(num1);

num1.splice(0, 4); //splice 
console.log(num1);

num1.reverse(); //reverse the order
console.log(num1);


value = num1.concat(num2); //concat to two arrays
console.log(value);

value = fruits.concat(mixed);
console.log(value);

value = fruits.sort(); //sort
console.log(value);

value = num1.sort()
console.log(value);

value = num2.sort(function(x, y) {
    return x + y;
})
console.log(value);  // sort using compare function

function under50(num) {
    return num < 50;
}
value = num1.find(under50);
console.log(value);  //find