//Object
const person = {
    firstName: 'Divine',
    lastName: 'Cava',
    age: 29,
    email: 'divine.cava0614@gmail.com',
    hobbies : ['Watching TV', 'Cleaning', 'Reading'],
    address: {
        city: 'Bulacan',
        barangay: 'Buga',
    },
    getBirthYear: function () {
        return 2021 - this.age;      
    }

};

let value;

value = person;
console.log(value)

value = person.firstName;
console.log(value)

value = person.lastName;
console.log(value)

value = person.age;
console.log(value)

value = person.hobbies[0];
console.log(value)

value = person.address.city;
console.log(value)

value = person.getBirthYear(); //property method when calling needs ()
console.log(value)


const people = [{name: 'Aldrich', age: 10}, {name: 'Sabriyah', age: 3}, 
    {name: 'Nivin', age: 1}];

//for loop
for(let i = 0; i < people.length; i++){
    console.log(people[i].name);
}  